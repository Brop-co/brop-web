"use client";

import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, List } from "lucide-react";

type ModuleType = "Web Design" | "UI/UX" | "Branding" | "Embedded";

// Added 'type' to the interface
interface ProjectProps {
  title: string;
  description?: string;
  imageUrl: string;
  projectUrl?: string | null;
  figmaUrl?: string | null;
  githubUrl?: string | null;
  type?: string; // This will be used for the right-most column in list view
  modules: ModuleType[];
  year?: number;
}

const Projects = () => {
  // ----- DATA -----
  // Added 'type' to each project object to match the new design
  const projects: ProjectProps[] = [
    {
      title: "TitanX",
      description: "Branding & visual identity",
      imageUrl: "https://placehold.co/800x600/1a1a1a/ffffff",
      projectUrl: "#",
      modules: ["Branding", "Web Design"],
      year: 2025,
      type: "Fintech",
    },
    {
      title: "Vantir",
      description: "Mobile concept & UI",
      imageUrl: "https://placehold.co/800x600/4a4a4a/ffffff",
      projectUrl: "#",
      modules: ["Branding", "UI/UX"],
      year: 2025,
      type: "AI",
    },
    {
      title: "Project Alpha",
      description:
        "A cutting-edge platform that revolutionizes user engagement.",
      imageUrl: "https://placehold.co/800x600/7a7a7a/ffffff",
      projectUrl: "#",
      modules: ["Web Design", "UI/UX", "Branding"],
      year: 2023,
      type: "SaaS",
    },
    {
      title: "Beta App",
      description: "Mobile app for finance",
      imageUrl: "https://placehold.co/800x600/d1d1d1/000000",
      projectUrl: "#",
      modules: ["UI/UX", "Branding"],
      year: 2024,
      type: "Healthtech",
    },
  ];

  // ----- STATE MANAGEMENT -----
  const [activeModule, setActiveModule] = useState<ModuleType | "All">("All");
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const [hoveredProject, setHoveredProject] = useState<ProjectProps | null>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement>>({});

  // ----- MODULES / FILTER -----
  const availableModules = useMemo(() => {
    const set = new Set<ModuleType>();
    projects.forEach((p) => p.modules.forEach((m) => set.add(m)));
    return ["All", ...Array.from(set)] as (ModuleType | "All")[];
  }, [projects]);

  const filtered = useMemo(() => {
    if (activeModule === "All") return projects;
    return projects.filter((p) =>
      p.modules.includes(activeModule as ModuleType)
    );
  }, [projects, activeModule]);

  // ----- ANIMATION VARIANTS -----
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // ----- RENDER -----
  return (
    <section
      id="projects"
      className="py-24 px-6 sm:px-8 lg:px-16 bg-white rounded-3xl"
    >
      <div className="max-w-[1460px] mx-auto">
        {/* --- HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-8"
        >
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-black rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900">
              Our projects
            </h2>
          </div>
          <div className="flex items-end justify-start sm:justify-end">
            <button
              onClick={() => setLayout("grid")}
              aria-label="Grid view"
              className={`border border-gray-900 w-12 h-12 rounded-xl flex items-center justify-center mx-1 transition-colors ${
                layout === "grid"
                  ? "bg-gray-900 text-white"
                  : "hover:bg-gray-900 hover:text-white cursor-pointer"
              }`}
            >
              <LayoutGrid size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setLayout("list")}
              aria-label="List view"
              className={`border border-gray-900 w-12 h-12 rounded-xl flex items-center justify-center mx-1 transition-colors ${
                layout === "list"
                  ? "bg-gray-900 text-white"
                  : "hover:bg-gray-900 hover:text-white cursor-pointer"
              }`}
            >
              <List size={20} strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>

        {/* --- MODULE FILTER ROW --- */}
        <motion.div
          className="flex flex-wrap gap-3 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {availableModules.map((m) => {
            const isActive = m === activeModule;
            return (
              <motion.button
                key={m}
                onClick={() => setActiveModule(m)}
                className={`text-sm px-4 py-2 rounded-full border transition-shadow whitespace-nowrap ${
                  isActive
                    ? "bg-gray-100 border-gray-300 shadow"
                    : "bg-white border-gray-200 hover:shadow-sm"
                }`}
                aria-pressed={isActive}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {m}
              </motion.button>
            );
          })}
        </motion.div>

        {/* --- PROJECT LIST / GRID CONTAINER --- */}
        <div className="relative">
          {/* List view with hover image preview - only on large screens */}
          {layout === "list" && (
            <AnimatePresence>
              {hoveredProject && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="hidden lg:block fixed right-8 z-50 pointer-events-none"
                  style={{
                    top: `${
                      itemRefs.current[hoveredProject.title]?.getBoundingClientRect().top +
                      itemRefs.current[hoveredProject.title]?.getBoundingClientRect().height / 2
                    }px`,
                    transform: "translateY(-50%)",
                  }}
                >
                  <div className="w-64 h-40 rounded-2xl overflow-hidden shadow-2xl bg-white border">
                    <img
                      src={hoveredProject.imageUrl}
                      alt={hoveredProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}

          <motion.div
            className={
              layout === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14"
                : "flex flex-col" // Simple flex column for list view
            }
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            key={activeModule + layout}
          >
            {filtered.map((p, idx) => (
              <motion.div
                key={`${p.title}-${idx}`}
                variants={itemVariants}
                className="group"
                ref={(el) => { if (el) itemRefs.current[p.title] = el; }}
                onMouseEnter={() => layout === "list" && setHoveredProject(p)}
                onMouseLeave={() => layout === "list" && setHoveredProject(null)}
              >
                {/* --- CONDITIONAL RENDERING FOR LAYOUT --- */}
                {layout === "grid" ? (
                  // --- GRID VIEW ITEM ---
                  <div>
                    <a
                      href={p.projectUrl ?? "#"}
                      className="block rounded-2xl overflow-hidden shadow-sm"
                    >
                      <motion.img
                        src={p.imageUrl}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </a>
                    <div className="mt-4">
                      <div className="flex flex-col gap-3 xl:flex-row xl:justify-between xl:items-center">
                        <div>
                          <div className="flex items-baseline flex-wrap">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                              {p.title}
                            </h3>
                            <span className="text-gray-400 font-medium sm:ml-2">
                              ({p.year ?? "N/A"})
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {p.modules.map((module, moduleIdx) => (
                            <span
                              key={moduleIdx}
                              className="text-xs sm:text-sm px-3 py-1.5 rounded-lg border border-gray-200 bg-white shadow-sm whitespace-nowrap"
                            >
                              {module}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // --- LIST VIEW ITEM ---
                  <div className="relative w-full py-4 px-0 group-hover:px-6 border-b border-gray-200 last:border-b-0 overflow-hidden transition-all duration-400">
                    {/* Animated background overlay - only on large screens */}
                    <motion.div
                      className="absolute inset-0 bg-gray-200 hidden lg:block"
                      initial={{ y: "100%" }}
                      animate={{ 
                        y: hoveredProject?.title === p.title ? "0%" : "100%" 
                      }}
                      transition={{ 
                        duration: 0.4, 
                        ease: "easeOut"
                      }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Desktop Layout */}
                      <div className="hidden md:grid grid-cols-[auto_1fr_1.5fr_auto] items-center gap-x-8">
                        {/* 1. Index */}
                        <span className="text-base text-gray-400">
                          {String(filtered.length - idx).padStart(2, "0")}
                        </span>

                        {/* 2. Title and Year */}
                        <div className="flex items-baseline gap-x-3">
                          <h3 className="text-2xl font-bold text-gray-900 whitespace-nowrap">
                            {p.title}
                          </h3>
                          <span className="text-2xl text-gray-300">
                            - {p.year}
                          </span>
                        </div>

                        {/* 3. Modules */}
                        <div className="flex justify-center items-center gap-2">
                          {p.modules.map((module, moduleIdx) => (
                            <span
                              key={moduleIdx}
                              className="text-xs px-3 py-1.5 rounded-md border border-gray-200 bg-white shadow-sm"
                            >
                              {module}
                            </span>
                          ))}
                        </div>

                        {/* 4. Type */}
                        <span className="text-base text-gray-500 justify-self-end text-right">
                          {p.type}
                        </span>
                      </div>

                      {/* Mobile Layout */}
                      <div className="md:hidden">
                        {/* Title, Year, Type Row */}
                        <div className="flex items-baseline justify-between mb-3">
                          <div className="flex items-baseline gap-2">
                            <h3 className="text-lg font-bold text-gray-900">
                              {p.title}
                            </h3>
                            <span className="text-lg text-gray-300">
                              - {p.year}
                            </span>
                          </div>
                          <span className="text-sm text-gray-500">
                            {p.type}
                          </span>
                        </div>

                        {/* Modules Row */}
                        <div className="flex flex-wrap gap-2">
                          {p.modules.map((module, moduleIdx) => (
                            <span
                              key={moduleIdx}
                              className="text-xs px-3 py-1.5 rounded-md border border-gray-200 bg-gray-50"
                            >
                              {module}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;