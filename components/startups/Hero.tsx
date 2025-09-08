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

  const scrollToNeeds = () => {
    const projectsSection = document.getElementById("need");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className="max-w-[1460px] mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight px-0 md:px-8"
        >
          Supercharge Your Startup with Design and Branding
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-14"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden group font-medium py-5 px-10 rounded-full text-xl cursor-pointer bg-gray-200"
          >
            <span className="absolute inset-0 bg-gray-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
            <span className="relative z-10 flex items-center gap-3 font-[550] text-gray-900 group-hover:text-white transition-colors duration-500">
              Request a quote
              <span className="inline-block group-hover:-rotate-45 transition-transform duration-500">
                👋
              </span>
            </span>
          </motion.button>
        </motion.div>
      </div>

      <p className="absolute bottom-28 text-base md:text-xl flex flex-col items-center">
        <span>Tailored Solutions to help startups</span>
        <span>stand out and grow</span>
      </p>

      <motion.div
        onClick={scrollToNeeds}
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
