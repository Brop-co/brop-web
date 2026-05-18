"use client";

import { motion } from "framer-motion";
import { Globe, Zap, Video, Heart } from "lucide-react";
import Link from "next/link";

interface ProjectsDropdownProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  theme?: "light" | "dark";
}

const ProjectsDropdown = ({
  onMouseEnter,
  onMouseLeave,
  theme = "light",
}: ProjectsDropdownProps) => {
  const isDark = theme === "dark";
  const projects = [
    {
      icon: Globe,
      title: "Multicard",
      description: "Discover a powerful fintech platform",
      href: "https://github.com",
    },
    {
      icon: Zap,
      title: "ContinuOS",
      description: "Seamless OS experience with smart features",
      href: "https://github.com",
    },
    {
      icon: Video,
      title: "Brandformance",
      description: "Elevating brand performance through design",
      href: "https://github.com",
    },
    {
      icon: Heart,
      title: "Foothills",
      description: "A community-focused real estate project",
      href: "https://github.com",
    },
  ];

  return (
    <div
      className="w-full pt-2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`max-w-6xl mx-auto rounded-[40px] p-6 lg:p-8 shadow-sm backdrop-blur-xl border ${
          isDark
            ? "bg-dark-base/90 border-white/10"
            : "bg-[#F1F6F9]/90 border-white/50"
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {projects.map((item, index) => (
            <Link key={index} href={item.href} className="group block" target="_blank" rel="noopener noreferrer" data-cursor="hover">
              <motion.div
                className={`flex flex-col items-start p-5 lg:p-6 rounded-[32px] transition-all duration-300 h-full ${
                  isDark ? "group-hover:bg-white/10" : "group-hover:bg-white"
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm mb-4 ${
                  isDark ? "bg-white/10 border border-white/10" : "bg-white border border-gray-100/50"
                }`}>
                  <item.icon
                    size={24}
                    className={isDark ? "text-white" : "text-black"}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`font-semibold text-lg lg:text-xl mb-1 transition-all duration-300 relative inline-block ${
                    isDark ? "text-white" : "text-black"
                  }`}>
                    {item.title}
                    <span className={`absolute left-0 bottom-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                      isDark ? "bg-white" : "bg-black"
                    }`}></span>
                  </h4>
                  <p className={`text-sm lg:text-base leading-snug ${isDark ? "text-white/50" : "text-gray-500"}`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsDropdown;

