"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Monitor,
  PenTool,
  Tablet,
  RotateCcw,
  Lightbulb,
  FolderOpen,
  Search,
  FileText,
  Shield,
  Users,
  Package,
  BarChart3,
  Pencil,
} from "lucide-react";

interface ServicesDropdownProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ServicesDropdown = ({
  onMouseEnter,
  onMouseLeave,
}: ServicesDropdownProps) => {
  const coreServices = [
    {
      icon: Monitor,
      title: "Web Design",
      description: "Engaging assets for all platforms",
    },
    {
      icon: PenTool,
      title: "Branding",
      description: "Memorable & Strategic identities",
    },
    {
      icon: Tablet,
      title: "UX/UI Design",
      description: "Seamless & intuitive experiences",
    },
    {
      icon: RotateCcw,
      title: "Motion Design",
      description: "Engaging animations for brands",
    },
    {
      icon: Lightbulb,
      title: "Content Creation",
      description: "Compelling brand storytelling",
    },
    {
      icon: FolderOpen,
      title: "Webflow Development",
      description: "Functional & interactive websites",
    },
    {
      icon: Search,
      title: "SEO",
      description: "Boosting search rankings and traffic",
    },
    {
      icon: FileText,
      title: "Landing Page",
      description: "High converting landing pages",
    },
  ];

  const specializedServices = [
    {
      icon: RotateCcw,
      title: "Creative Design Subscription",
      description: "Web design, ux/ui, branding services",
    },
    {
      icon: Users,
      title: "Content Design & Socials",
      description: "Engaging assets for all platforms",
    },
    {
      icon: Shield,
      title: "Website as a Service",
      description: "Complete Turnkey WAAS solution",
    },
    {
      icon: Package,
      title: "Marketing Content",
      description: "Content creation for your marketing",
    },
  ];

  const readyMadeSolutions = [
    {
      icon: Package,
      title: "Branding Pack",
      description: "Customizable marketing assets",
    },
    {
      icon: Pencil,
      title: "Superdesign.space",
      description: "Ready to use custom websites",
    },
  ];

  const otherServices = [
    {
      icon: RotateCcw,
      title: "Creative Direction",
      description: "Art direction in branding, web & motion design.",
    },
    {
      icon: BarChart3,
      title: "Presentation Design",
      description: "Captivating decks that tell your story",
    },
    {
      icon: Package,
      title: "Packaging Design",
      description: "Production ready packaging designs",
    },
    {
      icon: FileText,
      title: "Landing Page",
      description: "Engaging assets for all platforms",
    },
    {
      icon: Pencil,
      title: "Grey-Label Design",
      description: "Flexible design support for agencies.",
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
          {/* Column 1: Core Services */}
          <div>
            <div className="bg-[#F5F5F7] px-6 py-4 rounded-lg mb-8">
              <div className="flex items-center justify-between">
                <span className="text-[#02021E] font-semibold text-lg sm:text-xl">
                  Core Services
                </span>
                <ArrowRight size={20} className="text-[#3827C7]" />
              </div>
            </div>
            <div className="space-y-6">
              {coreServices.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F5F5F7] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#3827C7] transition-colors duration-200">
                    <service.icon
                      size={20}
                      className="text-[#3827C7] group-hover:text-white transition-colors duration-200"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#02021E] text-base sm:text-lg mb-1 group-hover:text-[#3827C7] transition-colors duration-200">
                      {service.title}
                    </h4>
                    <p className="text-[#8B8B94] text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Specialized Services */}
          <div>
            <div className="bg-[#FDC448] px-6 py-4 rounded-lg mb-8">
              <div className="flex items-center justify-between">
                <span className="text-[#02021E] font-semibold text-lg sm:text-xl">
                  Specialized
                </span>
                <ArrowRight size={20} className="text-[#02021E]" />
              </div>
            </div>
            <div className="space-y-6">
              {specializedServices.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F5F5F7] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#FDC448] transition-colors duration-200">
                    <service.icon
                      size={20}
                      className="text-[#3827C7] group-hover:text-[#02021E] transition-colors duration-200"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#02021E] text-base sm:text-lg mb-1 group-hover:text-[#3827C7] transition-colors duration-200">
                      {service.title}
                    </h4>
                    <p className="text-[#8B8B94] text-sm sm:text-base leading-relaxed">
                      {service.description}
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

export default ServicesDropdown;
