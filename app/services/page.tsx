"use client";

import Hero from "@/components/services/Hero";
import Contact from "@/components/about/Contact";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";
import Works from "@/components/services/Works";
import Expertise from "@/components/services/Expertise";
import Difference from "@/components/services/Difference";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/services/faq";
import Interested from "@/components/services/Interested";

export default function ServicePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Works />
      <CustomCursor />
      <Expertise />
      <Difference />
      <Testimonials title="Our clients" />
      <FAQ />
      <Interested />
      <Contact />
      <Footer />
    </main>
  );
}
