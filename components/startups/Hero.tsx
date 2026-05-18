"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@/components/ThemeProvider";

const PrismaticBurst = dynamic(() => import("@/components/PrismaticBurst"), {
  ssr: false,
});

const Hero = () => {
  const [viewportHeight, setViewportHeight] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const updateViewport = () => setViewportHeight(window.innerHeight);
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const scrollToNeeds = () => {
    const section = document.getElementById("need");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center overflow-hidden"
      style={{
        height: viewportHeight > 0 ? `${viewportHeight}px` : "100vh",
        maxHeight: "100vh",
      }}
    >
      {/* Solid bg */}
      <div className={`absolute inset-0 z-0 ${isDark ? "bg-dark-base" : "bg-white"}`} />

      {/* PrismaticBurst background */}
      <div className="absolute inset-0 z-[1]">
        <PrismaticBurst
          animationType="rotate3d"
          intensity={1}
          speed={0.5}
          distort={1.0}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={24}
          mixBlendMode={isDark ? "lighten" : "normal"}
          colors={isDark ? ["#ffba25", "#fdc448", "#e6922a"] : ["#3827C7", "#4a35d4", "#2a1fa0"]}
        />
      </div>

      {/* Content */}
      <motion.div className="w-full flex flex-col justify-center items-center relative z-10 h-full">
        <div className="max-w-[1460px] mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight px-0 md:px-8 ${isDark ? "text-white" : "text-gray-900"}`}
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
              <span className="absolute inset-0 bg-[#3827C7] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 flex items-center gap-3 font-[550] text-gray-900 group-hover:text-white transition-colors duration-500">
                Request a quote
                <span className="inline-block group-hover:-rotate-45 transition-transform duration-500">
                  👋
                </span>
              </span>
            </motion.button>
          </motion.div>
        </div>

        <p className={`absolute bottom-28 text-base md:text-xl flex flex-col items-center ${isDark ? "text-white" : "text-gray-900"}`}>
          <span>Tailored Solutions to help startups</span>
          <span>stand out and grow</span>
        </p>

        <motion.div
          onClick={scrollToNeeds}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-12"
        >
          <motion.div
            className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto cursor-pointer transition-colors duration-200 ${
              isDark
                ? "bg-[#FDC448] hover:bg-[#FDC448]/80 text-dark-base"
                : "bg-[#3827C7] hover:bg-[#3827C7]/80 text-white"
            }`}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={26} className="text-inherit" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
