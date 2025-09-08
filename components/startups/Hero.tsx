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
          onClick={scrollTProjects}
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
