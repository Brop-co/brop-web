"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ScrollAnimationLayout = ({
  children,
  sectionId = "animated-section",
  shrinkThreshold = 0.2,
  backgroundColor = "white",
  backgroundOverlay = "bg-gray-200",
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElement = document.getElementById(sectionId);
      if (!sectionElement) return;

      const sectionHeight = sectionElement.offsetHeight;
      const scrolled = window.scrollY;

      const shouldShrink = scrolled > sectionHeight * shrinkThreshold;
      setScrollProgress(shouldShrink ? 1 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionId, shrinkThreshold]);

  const isShrunken = scrollProgress === 1;

  return (
    <section
      id={sectionId}
      className="relative min-h-screen flex flex-col justify-center items-center"
    >
      <div className={`absolute inset-0 ${backgroundOverlay} z-0`}></div>

      <motion.div
        className="w-full flex flex-col justify-center items-center min-h-screen relative z-10"
        style={{
          maxWidth: isShrunken ? "1500px" : "100%",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: isShrunken ? "24px" : "0px",
          backgroundColor: backgroundColor,
          padding: isShrunken ? "2rem" : "0",
          transition: `
            max-width 1s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            border-radius 1s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            padding 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
          `,
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default ScrollAnimationLayout;
