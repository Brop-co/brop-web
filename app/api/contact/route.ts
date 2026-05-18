import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Basic rate limiting: track IPs in memory (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3; // max submissions per window
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 2000);
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = sanitize(body.name);
  const company = sanitize(body.company);
  const email = sanitize(body.email);
  const phone = sanitize(body.phone);
  const project = sanitize(body.project);
  const budget = sanitize(body.budget);
  const services = Array.isArray(body.services)
    ? (body.services as unknown[])
        .filter((s) => typeof s === "string")
        .map((s) => sanitize(s as string))
        .join(", ")
    : "";

  // Server-side validation
  if (!name || !email || !project) {
    return NextResponse.json(
      { error: "Name, email and project description are required." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
      <h2 style="border-bottom: 2px solid #3827C7; padding-bottom: 8px;">New Contact Form Submission</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr><td style="padding: 8px 0; font-weight: 600; width: 140px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Company</td><td style="padding: 8px 0;">${company || "—"}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Phone</td><td style="padding: 8px 0;">${phone || "—"}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Budget</td><td style="padding: 8px 0;">${budget || "—"}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 600;">Services</td><td style="padding: 8px 0;">${services || "—"}</td></tr>
      </table>
      <h3 style="margin-top: 24px;">Project Description</h3>
      <p style="background: #f5f5f5; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${project}</p>
      <p style="color: #888; font-size: 12px; margin-top: 32px;">Sent from brop.co contact form</p>
    </div>
  `;

  const { RESEND_API_KEY } = process.env;
  if (!RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Brop Contact Form <contact@brop.co>",
      to: "bropcorw@gmail.com",
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` @ ${company}` : ""}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to send email:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
