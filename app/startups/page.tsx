"use client";

import Header from "@/components/Header";
import Hero from "@/components/startups/Hero";
import CustomCursor from "@/components/CustomCursor";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Need from "@/components/startups/Need";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Need />
      <CustomCursor />
      <Contact />
      <Footer />
    </main>
  );
}
