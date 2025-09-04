"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

// The module types are now strictly enforced as requested.
type ModuleType = "Web Design" | "UI/UX" | "Branding" | "Embedded";

interface ProjectProps {
  title: string;
  imageUrl: string;
  projectUrl?: string;
  modules: ModuleType[];
  year: number;
  cardClassName: string;
  // The 'moduleStyle' property has been removed.
}

const Works = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState(0);
  // State to hold the dynamic width of a card for accurate scrolling.
  const [cardWidth, setCardWidth] = useState(0);

  const x = useMotionValue(0);
  const progressBarWidth = useTransform(
    x,
    [0, -dragConstraints],
    ["0%", "100%"]
  );

  useEffect(() => {
    const calculateSizes = () => {
      if (trackRef.current) {
        // Calculate total scrollable width.
        const newConstraints =
          trackRef.current.scrollWidth - trackRef.current.offsetWidth;
        setDragConstraints(newConstraints);

        // Dynamically get the width of the first card element.
        const firstCard = trackRef.current.firstChild as HTMLElement;
        if (firstCard) {
          // Card width + gap (32px or 2rem)
          setCardWidth(firstCard.offsetWidth + 32);
        }
      }
    };

    calculateSizes();
    window.addEventListener("resize", calculateSizes);
    return () => window.removeEventListener("resize", calculateSizes);
  }, []);

  // Project data is updated to use the strict ModuleType and remove 'moduleStyle'.
  const projects: ProjectProps[] = [
    {
      title: "Fractal",
      year: 2024,
      imageUrl: "https://i.imgur.com/u5vSt6g.png",
      projectUrl: "#",
      modules: ["Web Design", "Branding"],
      cardClassName: "bg-[#111111] text-white border-gray-800",
    },
    {
      title: "Incipet",
      year: 2024,
      imageUrl: "https://i.imgur.com/Kz4YxLg.png",
      projectUrl: "#",
      modules: ["Web Design", "Branding", "UI/UX"],
      cardClassName:
        "bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 border-gray-200 text-gray-900",
    },
    {
      title: "TitanX",
      year: 2025,
      imageUrl: "https://placehold.co/800x600/1a1a1a/ffffff/png?text=TitanX",
      projectUrl: "#",
      modules: ["Branding", "Web Design", "Embedded"],
      cardClassName: "bg-gray-100 border-gray-200 text-gray-900",
    },
    {
      title: "Vantir AI",
      year: 2025,
      imageUrl: "https://placehold.co/800x600/4a4a4a/ffffff/png?text=Vantir",
      projectUrl: "#",
      modules: ["UI/UX", "Branding"],
      cardClassName: "bg-[#2A2B3A] text-white border-gray-700",
    },
  ];

  const handleNext = () => {
    const currentX = x.get();
    // Use the dynamic cardWidth for accurate scrolling.
    const nextX = Math.max(currentX - cardWidth, -dragConstraints);
    animate(x, nextX, { type: "spring", stiffness: 300, damping: 30 });
  };

  const handlePrev = () => {
    const currentX = x.get();
    const prevX = Math.min(currentX + cardWidth, 0);
    animate(x, prevX, { type: "spring", stiffness: 300, damping: 30 });
  };

  return (
    <section
      id="works"
      className="py-24 bg-white rounded-3xl overflow-x-hidden"
    >
      <div className="max-w-[1460px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-12 lg:mb-16"
        >
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900">
              Our Works
            </h2>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
              Check Our Featured Projects
            </h3>
          </div>
        </motion.div>
      </div>

      <div className="pl-4 sm:pl-8 lg:pl-16">
        <motion.div
          ref={trackRef}
          className="flex gap-8 cursor-grab"
          whileTap={{ cursor: "grabbing" }}
          drag="x"
          dragConstraints={{
            left: -dragConstraints,
            right: 0,
          }}
          style={{ x }}
          // **FIX:** The component-level transition is removed to prevent
          // the carousel from snapping back to the start after dragging.
        >
          {projects.map((p, i) => (
            <div
              key={i}
              className="w-[90vw] max-w-[550px] md:w-[45vw] lg:w-[40vw] flex-shrink-0"
            >
              <div
                className={`h-full rounded-3xl p-4 sm:p-6 border ${p.cardClassName}`}
              >
                <a
                  href={p.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl overflow-hidden"
                >
                  <motion.img
                    src={p.imageUrl}
                    alt={p.title}
                    className="w-full aspect-[4/3] object-cover pointer-events-none"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
                <div className="mt-6">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl sm:text-2xl font-bold">{p.title}</h4>
                    <span className="text-lg font-medium opacity-50">
                      {p.year}
                    </span>
                  </div>
                  {/* The rendering logic is now simplified to always show pills. */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.modules.map((module, moduleIdx) => (
                      <span
                        key={moduleIdx}
                        className="text-xs sm:text-sm px-3 py-1.5 rounded-lg border border-current border-opacity-30 bg-white bg-opacity-10 whitespace-nowrap"
                      >
                        {module}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-[1460px] mx-auto px-4 sm:px-8 lg:px-16 mt-8 hidden lg:flex items-center gap-8">
        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gray-900"
            style={{ width: progressBarWidth }}
          />
        </div>
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            aria-label="Previous project"
            className="w-12 h-12 rounded-full border border-gray-900 flex items-center justify-center hover:bg-gray-900 transition-colors flex-shrink-0"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next project"
            className="w-12 h-12 rounded-full border border-gray-900 flex items-center justify-center  hover:bg-gray-900 transition-colors flex-shrink-0"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Works;
