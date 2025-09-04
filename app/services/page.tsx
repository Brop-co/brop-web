"use client";

import Hero from "@/components/services/Hero";
import Contact from "@/components/about/Contact";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";

export default function ServicePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <CustomCursor />
      <Contact />
      <Footer />
    </main>
  );
}
