"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import CustomCursor from "@/components/CustomCursor";
import TargetCursor from "@/components/TargetCursor";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/about/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [headerTheme, setHeaderTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const heroSection = document.getElementById("home");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderTheme(entry.isIntersecting ? "dark" : "light");
      },
      { threshold: 0.1 }
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      <Header theme={headerTheme} />
      <Hero />
      <About />
      <Projects />
      <Services />
      <CustomCursor />
      <TargetCursor spinDuration={2} hideDefaultCursor={false} parallaxOn={true} containerSelector="#projects" />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
