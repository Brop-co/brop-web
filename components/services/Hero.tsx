"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const updateViewport = () => {
      setViewportHeight(window.innerHeight);
    };
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const scrollToServices = () => {
    const aboutSection = document.getElementById("services");
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
      <div className="absolute inset-0 bg-gray-200 z-0"></div>
      <motion.div
        className="w-full flex flex-col justify-center items-center relative z-10 h-full"
        style={{
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "white",
        }}
      >
        <div className="max-w-[1460px] mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-medium text-gray-900 leading-tight max-w-4xl"
          >
            Explore Our Services
          </motion.h1>
        </div>
        <p className="absolute bottom-28 text-base md:text-xl flex flex-col items-center">
          <span>Solutions to help your brand</span>
          <span>stand out and grow</span>
        </p>
        <motion.div
          onClick={scrollToServices}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-12"
        >
          <motion.div
            className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mx-auto cursor-pointer hover:bg-gray-300 transition-colors duration-200 text-gray-200 hover:text-gray-900"
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
