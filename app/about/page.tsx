"use client";

import About from "@/components/about/About";
import Approach from "@/components/about/Approach";
import Commitments from "@/components/about/Commitments";
import Hero from "@/components/about/Hero";
import Contact from "@/components/about/Contact";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Approach />
      <CustomCursor />
      <Commitments />
      <Contact />
      <Footer />
    </main>
  );
}
