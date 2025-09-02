"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById("home");
      if (!heroElement) return;

      const heroHeight = heroElement.offsetHeight;
      const scrolled = window.scrollY;

      const shouldShrink = scrolled > heroHeight * 0.2;
      setScrollProgress(shouldShrink ? 1 : 0);
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

  const isShrunken = scrollProgress === 1;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center"
    >
      {/* Full-width gray background, always present */}
      <div className="absolute inset-0 bg-gray-200 z-0"></div>

      {/* Shrinking white container */}
      <motion.div
        className="w-full flex flex-col justify-center items-center min-h-screen relative z-10"
        style={{
          maxWidth: isShrunken ? "1280px" : "100%",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: isShrunken ? "24px" : "0px",
          backgroundColor: "white",
          padding: isShrunken ? "2rem" : "0",
          transition: `
            max-width 1s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            border-radius 1s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            padding 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
          `,
        }}
      >
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Your trusted creative partner
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-900 mx-auto leading-relaxed mb-8"
          >
            We deliver creative branding, web design, and UI/UX solutions to
            make the most impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden group font-medium py-4 px-8 rounded-full text-lg cursor-pointer"
            >
              <span className="absolute inset-0 bg-gray-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
              <span className="relative z-10 flex items-center gap-2 font-[550] text-gray-900 group-hover:text-white transition-colors duration-500">
                Request a quote
                <span className="inline-block group-hover:-rotate-45 transition-transform duration-500">
                  👋
                </span>
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          onClick={scrollToAbout}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-40"
          style={{
            opacity: isShrunken ? 0 : 1,
            transition: "opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <motion.div
            className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto cursor-pointer hover:bg-gray-300 transition-colors duration-200"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown
              size={24}
              className="text-gray-200 hover:text-gray-900"
            />
          </motion.div>
        </motion.div>

        {/* Moving Words */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-4 w-full overflow-hidden"
          style={{
            opacity: isShrunken ? 0 : 1,
            transition: "opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <div className="flex items-center gap-6 text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
            <motion.div
              className="flex items-center gap-6 whitespace-nowrap"
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <span>PURPOSEFUL DESIGNS</span>
              <span className="text-gray-400">/</span>
              <span>STRATEGIC EXPERIENCES</span>
              <span className="text-gray-400">/</span>
              <span>RESULTS DRIVEN SOLUTIONS</span>
              <span className="text-gray-400">/</span>
              <span>BUSINESS VALUE</span>
              <span className="text-gray-400">/</span>
              <span>PURPOSEFUL DESIGNS</span>
              <span className="text-gray-400">/</span>
              <span>STRATEGIC EXPERIENCES</span>
              <span className="text-gray-400">/</span>
              <span>RESULTS DRIVEN SOLUTIONS</span>
              <span className="text-gray-400">/</span>
              <span>BUSINESS VALUE</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
