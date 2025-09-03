"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import ScrollAnimationLayout from "@/components/layouts/ScrollAnimationLayout";

const HeroContent = () => {
  const [isShrunken, setIsShrunken] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById("home");
      if (!heroElement) return;

      const heroHeight = heroElement.offsetHeight;
      const scrolled = window.scrollY;
      setIsShrunken(scrolled > heroHeight * 0.2);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-medium text-gray-900  leading-tight max-w-xl"
        >
          We are design-first
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-medium text-gray-900  leading-tight max-w-xl"
        >
          creative studio
        </motion.h1>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-12"
        style={{
          opacity: isShrunken ? 0 : 1,
          transition: "opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <motion.div
          className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mx-auto cursor-pointer hover:bg-gray-300 transition-colors duration-200 text-gray-200 hover:text-gray-900"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={26} className="text-inherit" />
        </motion.div>
      </motion.div>
    </>
  );
};

const Hero = () => {
  return (
    <ScrollAnimationLayout sectionId="home">
      <HeroContent />
    </ScrollAnimationLayout>
  );
};

export default Hero;
