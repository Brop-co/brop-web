"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";
import BlurText from "@/components/BlurText";
import TextType from "@/components/TextType";
import ScrollAnimationLayout from "@/components/layouts/ScrollAnimationLayout";

const GridScan = dynamic(() => import("@/components/GridScan"), { ssr: false });

const HeroContent = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
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
      <div className="max-w-[1460px] mx-auto text-center px-4 sm:px-6 lg:px-8">
        <BlurText
          text="Your trusted creative partner"
          delay={120}
          animateBy="words"
          direction="top"
          stepDuration={0.4}
          className={`text-6xl sm:text-7xl lg:text-8xl font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-6 leading-tight justify-center`}
        />

        <TextType
          text="We deliver creative branding, web design, and UI/UX solutions to make the most impact."
          as="p"
          typingSpeed={30}
          initialDelay={800}
          loop={false}
          showCursor={false}
          className={`text-xl sm:text-2xl lg:text-3xl ${isDark ? "text-white/70" : "text-gray-600"} mx-auto leading-relaxed mb-10`}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-14"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`relative overflow-hidden group font-medium py-5 px-10 rounded-full text-xl cursor-pointer ${isDark ? "bg-[#FDC448]" : "bg-[#3827C7]"}`}
          >
            <span className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ${isDark ? "bg-dark-base" : "bg-white"}`}></span>
            <span className={`relative z-10 flex items-center gap-3 font-[550] transition-colors duration-500 ${isDark ? "text-dark-base group-hover:text-[#FDC448]" : "text-white group-hover:text-[#3827C7]"}`}>
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
        className="absolute bottom-44"
        style={{
          opacity: isShrunken ? 0 : 1,
          transition: "opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <motion.div
          className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto cursor-pointer transition-colors duration-200 ${isDark ? "bg-white/20 border border-white/30 text-white hover:bg-white hover:text-gray-900" : "bg-gray-900/10 border border-gray-900/20 text-gray-900 hover:bg-gray-900 hover:text-white"}`}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={26} className="text-inherit" />
        </motion.div>
      </motion.div>

      {/* Moving Words */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-6 w-full overflow-hidden"
        style={{
          opacity: isShrunken ? 0 : 1,
          transition: "opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <div className={`flex items-center gap-8 text-2xl sm:text-3xl lg:text-4xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
          <motion.div
            className="flex items-center gap-8 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <span>PURPOSEFUL DESIGNS</span>
            <span className={isDark ? "text-white/30" : "text-gray-900/30"}>/</span>
            <span>STRATEGIC EXPERIENCES</span>
            <span className={isDark ? "text-white/30" : "text-gray-900/30"}>/</span>
            <span>RESULTS DRIVEN SOLUTIONS</span>
            <span className={isDark ? "text-white/30" : "text-gray-900/30"}>/</span>
            <span>BUSINESS VALUE</span>
            <span className={isDark ? "text-white/30" : "text-gray-900/30"}>/</span>
            <span>PURPOSEFUL DESIGNS</span>
            <span className={isDark ? "text-white/30" : "text-gray-900/30"}>/</span>
            <span>STRATEGIC EXPERIENCES</span>
            <span className={isDark ? "text-white/30" : "text-gray-900/30"}>/</span>
            <span>RESULTS DRIVEN SOLUTIONS</span>
            <span className={isDark ? "text-white/30" : "text-gray-900/30"}>/</span>
            <span>BUSINESS VALUE</span>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <ScrollAnimationLayout
      sectionId="home"
      disableShrink
      backgroundOverlay={isDark ? "bg-dark-base" : "bg-white"}
      backgroundContent={
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor={isDark ? "#2F293A" : "#D1D5DB"}
          gridScale={0.1}
          scanColor={isDark ? "#FDC448" : "#3827C7"}
          scanOpacity={0.4}
          enablePost={isDark}
          bloomIntensity={0.6}
          chromaticAberration={0.0005}
          noiseIntensity={0.01}
          scanSoftness={1.8}
        />
      }
    >
      <HeroContent />
    </ScrollAnimationLayout>
  );
};

export default Hero;
