// src/components/Works.tsx

"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

type ModuleType = string;

interface ProjectProps {
  title: string;
  imageUrl: string;
  projectUrl?: string;
  modules: ModuleType[];
  year: number;
  cardClassName: string;
  moduleStyle: "pills" | "text";
}

const Works = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // --- EFFECT TO UPDATE SCROLL PROGRESS ---
  const handleScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
    setScrollProgress(progress);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.addEventListener("scroll", handleScroll);
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  const projects: ProjectProps[] = [
    {
      title: "Fractal",
      year: 2024,
      imageUrl: "https://placehold.co/800x600/4a4a4a/ffffff/png?text=Fractal",
      projectUrl: "#",
      modules: ["DESIGN SOLUTIONS", "EXPERT COLLABORATION", "Branding"],
      cardClassName: "bg-green-50 text-gray-900 border-gray-200",
      moduleStyle: "text",
    },
    {
      title: "Incipet",
      year: 2024,
      imageUrl: "https://placehold.co/800x600/4a4a4a/ffffff/png?text=Incipet",
      projectUrl: "#",
      modules: ["Webflow Dev", "Web Design", "Branding"],
      cardClassName:
        "bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 border-gray-200 text-gray-900",
      moduleStyle: "pills",
    },
    {
      title: "TitanX",
      year: 2025,
      imageUrl: "https://placehold.co/800x600/4a4a4a/ffffff/png?text=TitanX",
      projectUrl: "#",
      modules: ["Fintech", "Branding", "Web Design"],
      cardClassName: "bg-gray-100 border-gray-200 text-gray-900",
      moduleStyle: "pills",
    },
    {
      title: "Vantir AI",
      year: 2025,
      imageUrl: "https://placehold.co/800x600/4a4a4a/ffffff/png?text=Vantir",
      projectUrl: "#",
      modules: ["Artificial Intelligence", "UI/UX"],
      cardClassName: "bg-blue-50 text-gray-900 border-gray-200",
      moduleStyle: "text",
    },
  ];

  const cardWidth = 600; // An approximate width of a card + gap

  const handleNavClick = (direction: "prev" | "next") => {
    if (!trackRef.current) return;

    const scrollAmount = direction === "prev" ? -cardWidth : cardWidth;
    trackRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
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
        {/* UPDATED: Now uses native scroll with overflow-x-auto */}
        <div
          ref={trackRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide cursor-grab pr-6 sm:pr-8 lg:pr-16"
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
                  <div className="mt-4 text-sm font-medium opacity-80">
                    {p.moduleStyle === "text" ? (
                      <p className="tracking-wider uppercase">
                        {p.modules.join(" / ")}
                      </p>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {p.modules.map((module, moduleIdx) => (
                          <span
                            key={moduleIdx}
                            className="text-xs sm:text-sm px-3 py-1.5 rounded-lg border border-current border-opacity-30 bg-white bg-opacity-10 whitespace-nowrap"
                          >
                            {module}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1460px] mx-auto px-4 sm:px-8 lg:px-16 mt-8 hidden lg:flex items-center gap-8">
        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gray-900"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
        <div className="flex gap-4">
          <motion.button
            onClick={() => handleNavClick("prev")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-900 transition-all duration-200"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            onClick={() => handleNavClick("next")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-900 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
      {/* Small Center Button */}
      <div className="text-center mt-20">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden group font-medium py-4 px-10 rounded-full text-lg sm:text-xl cursor-pointer bg-gray-900 flex items-center space-x-3 mx-auto group-hover:bg-gray-100 transition-colors duration-500"
          onClick={() => (window.location.href = "/projects")}
        >
          <span className="absolute inset-0 bg-gray-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
          <span className="relative z-10 flex items-center gap-3 text-white group-hover:text-gray-900 transition-colors duration-500">
            <span>All projects</span>
          </span>
        </motion.button>
      </div>
    </section>
  );
};

export default Works;
