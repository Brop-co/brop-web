"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { LayoutGrid, List } from "lucide-react";

type ModuleType = "Web Design" | "UI/UX" | "Branding" | "Embedded";

interface ProjectProps {
  title: string;
  description?: string;
  imageUrl: string;
  projectUrl?: string | null;
  figmaUrl?: string | null;
  githubUrl?: string | null;
  type?: string;
  modules: ModuleType[];
  year?: number;
}

const Projects = () => {
  // ----- DATA -----
  const projects: ProjectProps[] = [
    {
      title: "TitanX",
      description: "Branding & visual identity",
      imageUrl: "https://placehold.co/800x600/",
      projectUrl: "#",
      modules: ["Branding", "Web Design"],
      year: 2025,
    },
    {
      title: "Vantir",
      description: "Mobile concept & UI",
      imageUrl: "https://placehold.co/800x600/",
      projectUrl: "#",
      modules: ["Branding", "UI/UX"],
      year: 2025,
    },
    {
      title: "Project Alpha",
      description:
        "A cutting-edge platform that revolutionizes user engagement.",
      imageUrl: "https://placehold.co/800x600/",
      projectUrl: "#",
      modules: ["Web Design", "UI/UX", "Branding"],
      year: 2023,
    },
    {
      title: "Beta App",
      description: "Mobile app for finance",
      imageUrl: "https://placehold.co/800x600/",
      projectUrl: "#",
      modules: ["UI/UX", "Branding"],
      year: 2024,
    },
  ];

  // ----- MODULES / FILTER -----
  // get unique modules from data
  const availableModules = useMemo(() => {
    const set = new Set<ModuleType>();
    projects.forEach((p) => p.modules.forEach((m) => set.add(m)));
    return ["All", ...Array.from(set)] as (ModuleType | "All")[];
  }, [projects]);

  const [activeModule, setActiveModule] = useState<ModuleType | "All">("All");

  const filtered = useMemo(() => {
    if (activeModule === "All") return projects;
    return projects.filter((p) =>
      p.modules.includes(activeModule as ModuleType)
    );
  }, [projects, activeModule]);

  // Variants for staggering
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
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8 items-end"
        >
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-black rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900">
              Our projects
            </h2>
          </div>

          <div className="flex items-end justify-end">
            <div className="border border-gray-900 w-14 rounded-xl h-14 flex items-center justify-center mx-2">
              <LayoutGrid size={24} strokeWidth={1.5} />
            </div>
            <div className="border border-gray-900 rounded-xl w-14 h-14 flex items-center justify-center mx-2">
              <List size={24} strokeWidth={1.5} />
            </div>
          </div>
        </motion.div>

        {/* MODULE FILTER ROW */}
        <motion.div
          className="flex flex-wrap gap-3 mb-8"
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
                className={`text-sm px-4 py-2 rounded-full border transition-shadow whitespace-nowrap
                  ${
                    isActive
                      ? "bg-gray-100 border-gray-300 shadow"
                      : "bg-white border-gray-200 hover:shadow-sm"
                  }`}
                aria-pressed={isActive}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
              >
                {m}
              </motion.button>
            );
          })}
        </motion.div>

        {/* PROJECT GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          key={activeModule} // Key to re-trigger animation on filter change
        >
          {filtered.map((p, idx) => (
            <motion.div
              key={`${p.title}-${idx}`}
              className="group"
              variants={itemVariants}
            >
              <a
                href={p.projectUrl ?? "#"}
                className="block rounded-2xl overflow-hidden shadow-sm"
              >
                <motion.img
                  src={p.imageUrl}
                  alt={p.title}
                  className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </a>

              {/* below image: left: title - year ; right: module pill */}
              <div className="mt-4 flex justify-between items-center">
                <div className="flex  items-center">
                  <h3 className="text-3xl font-[700] text-gray-900">
                    {p.title} —
                  </h3>
                  <div className="text-gray-400 text-3xl font-medium">{`${
                    p.year ?? ""
                  }`}</div>
                </div>

                <div className="flex items-center space-x-2">
                  {p.modules.map((module, moduleIdx) => (
                    <span
                      key={moduleIdx}
                      className="text-sm px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm"
                    >
                      {module}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
