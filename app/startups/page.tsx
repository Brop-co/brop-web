"use client";

import Header from "@/components/Header";
import Hero from "@/components/startups/Hero";
import CustomCursor from "@/components/CustomCursor";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Need from "@/components/startups/Need";
import Interested from "@/components/startups/Interested";
import Works from "@/components/startups/Works";
import Comparison from "@/components/startups/Comparison";
import SuperDesignPackage from "@/components/startups/SuperDesignPackage";
import Packages from "@/components/startups/Packages";
import Projects from "@/components/startups/Projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Need />
      <CustomCursor />
      <Packages />
      <Projects />
      <SuperDesignPackage />
      <Works />
      <Comparison />
      <Interested />
      <Contact />
      <Footer />
    </main>
  );
}
