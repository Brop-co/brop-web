"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Palette,
  Monitor,
  Smartphone,
  Video,
  Globe,
  Building,
  Zap,
  Heart,
} from "lucide-react";

interface ProjectsDropdownProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ProjectsDropdown = ({
  onMouseEnter,
  onMouseLeave,
}: ProjectsDropdownProps) => {
  const projectCategories = [
    {
      icon: Palette,
      title: "Branding",
      description: "Brands that make impact",
    },
    {
      icon: Monitor,
      title: "Web Design",
      description: "Websites that connect",
    },
    {
      icon: Smartphone,
      title: "UX/UI Design",
      description: "Seamless & intuitive interfaces",
    },
  ];

  const featuredProjects = [
    {
      icon: Globe,
      title: "Multicard",
      description: "FinTech, UZ - Unified payment platform",
    },
    {
      icon: Zap,
      title: "ContinuOS",
      description: "AI Operating System, US - Smart web automation",
    },
    {
      icon: Video,
      title: "Brandformance",
      description: "Video Ads Platform, UZ - High-impact ad space",
    },
    {
      icon: Heart,
      title: "Foothills",
      description: "Healthcare, US - Pharmacy fulfillment automation",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute top-full left-0 right-0 z-40"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-blue-50 py-10 lg:py-12 rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Column 1: Featured Projects */}
          <div>
            <div className="bg-[#F5F5F7] px-6 py-4 rounded-lg mb-8">
              <div className="flex items-center justify-between">
                <span className="text-[#02021E] font-semibold text-lg sm:text-xl">
                  Featured
                </span>
                <ArrowRight size={20} className="text-[#3827C7]" />
              </div>
            </div>
            <div className="space-y-6">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F5F5F7] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#3827C7] transition-colors duration-200">
                    <project.icon
                      size={20}
                      className="text-[#3827C7] group-hover:text-white transition-colors duration-200"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#02021E] text-base sm:text-lg mb-1 group-hover:text-[#3827C7] transition-colors duration-200">
                      {project.title}
                    </h4>
                    <p className="text-[#8B8B94] text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Project Categories */}
          <div>
            <div className="bg-[#FDC448] px-6 py-4 rounded-lg mb-8">
              <div className="flex items-center justify-between">
                <span className="text-[#02021E] font-semibold text-lg sm:text-xl">
                  Categories
                </span>
                <ArrowRight size={20} className="text-[#02021E]" />
              </div>
            </div>
            <div className="space-y-6">
              {projectCategories.map((category, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F5F5F7] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#FDC448] transition-colors duration-200">
                    <category.icon
                      size={20}
                      className="text-[#3827C7] group-hover:text-[#02021E] transition-colors duration-200"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#02021E] text-base sm:text-lg mb-1 group-hover:text-[#3827C7] transition-colors duration-200">
                      {category.title}
                    </h4>
                    <p className="text-[#8B8B94] text-sm sm:text-base leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsDropdown;
