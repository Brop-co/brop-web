"use client";
import { motion } from "framer-motion";
import { useState, useEffect, FC, ReactNode } from "react";

interface ScrollAnimationLayoutProps {
  children: ReactNode;
  sectionId?: string;
  shrinkThreshold?: number;
  backgroundColor?: string;
  backgroundOverlay?: string;
}

const ScrollAnimationLayout: FC<ScrollAnimationLayoutProps> = ({
  children,
  sectionId = "animated-section",
  shrinkThreshold = 0.2,
  backgroundColor = "white",
  backgroundOverlay = "bg-gray-200",
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Track viewport height & width
  useEffect(() => {
    const updateViewport = () => {
      setViewportHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    };
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const sectionElement = document.getElementById(sectionId);
      if (!sectionElement) return;

      const sectionHeight = sectionElement.offsetHeight;
      const scrolled = window.scrollY;

      setScrollProgress(scrolled > sectionHeight * shrinkThreshold ? 1 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionId, shrinkThreshold]);

  const isShrunken = scrollProgress === 1;

  // Calculate shrinked width dynamically to match About section
  const getShrinkWidth = () => {
    const maxContentWidth = 1500; // same as About max-w-[1460px]

    // About section paddings: px-6 sm:px-8 lg:px-16
    const basePadding = 24; // 6 * 4
    const smPadding = 32; // 8 * 4
    const lgPadding = 64; // 16 * 4

    if (windowWidth >= 1024)
      return Math.min(maxContentWidth, windowWidth - lgPadding * 2) + "px";
    if (windowWidth >= 640)
      return Math.min(maxContentWidth, windowWidth - smPadding * 2) + "px";
    return windowWidth - basePadding * 2 + "px";
  };

  return (
    <section
      id={sectionId}
      className="relative flex flex-col justify-center items-center overflow-hidden"
      style={{
        height: viewportHeight > 0 ? `${viewportHeight}px` : "100vh",
        maxHeight: "100vh",
      }}
    >
      <div className={`absolute inset-0 ${backgroundOverlay} z-0`}></div>

      <motion.div
        className="w-full flex flex-col justify-center items-center relative z-10 h-full"
        style={{
          maxWidth: isShrunken ? getShrinkWidth() : "100%",
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
