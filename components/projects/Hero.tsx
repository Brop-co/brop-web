"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@/components/ThemeProvider";

const RippleGrid = dynamic(() => import("@/components/RippleGrid"), {
  ssr: false,
});

const Hero = () => {
  const [viewportHeight, setViewportHeight] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const updateViewport = () => {
      setViewportHeight(window.innerHeight);
    };
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const scrollTProjects = () => {
    const aboutSection = document.getElementById("projects");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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

      {/* RippleGrid background */}
      <div className="absolute inset-0 z-[1]">
        <RippleGrid
          enableRainbow={false}
          gridColor={isDark ? "#FDC448" : "#3827C7"}
          rippleIntensity={0.05}
          gridSize={11}
          gridThickness={20}
          mouseInteraction={true}
          mouseInteractionRadius={0.4}
          opacity={isDark ? 0.8 : 0.6}
          fadeDistance={1.3}
          vignetteStrength={4}
          glowIntensity={0.4}
        />
      </div>

      <motion.div className="w-full flex flex-col justify-center items-center relative z-10 h-full">
        <div className="max-w-[1460px] mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl sm:text-5xl lg:text-7xl font-medium leading-tight max-w-4xl ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Good design looks nice, but great design solves a problem.
          </motion.h1>
        </div>
        <p className={`absolute bottom-28 text-base md:text-xl ${isDark ? "text-white" : "text-gray-900"}`}>
          See the problems that we solved
        </p>
        <motion.div
          onClick={scrollTProjects}
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
