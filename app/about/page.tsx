"use client";

import About from "@/components/about/About";
import Approach from "@/components/about/Approach";
import Commitments from "@/components/about/Commitments";
import Hero from "@/components/about/Hero";
import CustomCursor from "@/components/CustomCursor";
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
    </main>
  );
}
