"use client";

import About from "@/components/about/About";
import Approach from "@/components/about/Approach";
import Commitments from "@/components/about/Commitments";
import Hero from "@/components/projects/Hero";
import Contact from "@/components/about/Contact";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/projects/Projects";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <CustomCursor />
      <Contact />
      <Footer />
    </main>
  );
}
