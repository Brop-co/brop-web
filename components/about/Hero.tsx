"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import ScrollAnimationLayout from "@/components/layouts/ScrollAnimationLayout";
import { useTheme } from "@/components/ThemeProvider";

const FaultyTerminal = dynamic(() => import("@/components/FaultyTerminal"), {
  ssr: false,
});

const HeroContent = ({ isDark }: { isDark: boolean }) => {
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
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl sm:text-5xl lg:text-7xl font-medium leading-tight max-w-xl ${isDark ? "text-white" : "text-gray-900"}`}
        >
          We are design-first
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl sm:text-5xl lg:text-7xl font-medium leading-tight max-w-xl ${isDark ? "text-white" : "text-gray-900"}`}
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
      backgroundColor={isDark ? "#060602" : "#ffffff"}
      backgroundContent={
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.4}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={0.8}
          flickerAmount={0.6}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0}
          tint={isDark ? "#FDC448" : "#3827C7"}
          mouseReact={true}
          mouseStrength={0.4}
          pageLoadAnimation={false}
          brightness={isDark ? 0.35 : 0.25}
        />
      }
    >
      <HeroContent isDark={isDark} />
    </ScrollAnimationLayout>
  );
};

export default Hero;
