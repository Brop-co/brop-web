"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@/components/ThemeProvider";

const LineWaves = dynamic(() => import("@/components/LineWaves"), {
  ssr: false,
});

const Hero = () => {
  const [viewportHeight, setViewportHeight] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const update = () => setViewportHeight(window.innerHeight);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scrollToServices = () => {
    const section = document.getElementById("services");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="services-hero"
      className="relative flex flex-col justify-center items-center overflow-hidden"
      style={{
        height: viewportHeight > 0 ? `${viewportHeight}px` : "100vh",
        maxHeight: "100vh",
      }}
    >
      {/* Solid bg */}
      <div className={`absolute inset-0 z-0 ${isDark ? "bg-dark-base" : "bg-white"}`} />

      {/* LineWaves background */}
      <div className="absolute inset-0 z-[1]">
        <LineWaves
          speed={0.3}
          innerLineCount={32}
          outerLineCount={36}
          warpIntensity={1.0}
          rotation={-45}
          edgeFadeWidth={0.0}
          colorCycleSpeed={1.0}
          brightness={isDark ? 0.25 : 0.18}
          color1={isDark ? "#FDC448" : "#3827C7"}
          color2={isDark ? "#FDC448" : "#3827C7"}
          color3={isDark ? "#FDC448" : "#3827C7"}
          enableMouseInteraction={true}
          mouseInfluence={2.0}
        />
      </div>

      {/* Content */}
      <motion.div className="w-full flex flex-col justify-center items-center relative z-10 h-full">
        <div className="max-w-[1460px] mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl sm:text-5xl lg:text-7xl font-medium leading-tight max-w-4xl ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Explore Our Services
          </motion.h1>
        </div>

        <motion.p
          className={`absolute bottom-28 text-base md:text-xl flex flex-col items-center ${isDark ? "text-white" : "text-gray-900"}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span>Solutions to help your brand</span>
          <span>stand out and grow</span>
        </motion.p>

        <motion.div
          onClick={scrollToServices}
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
