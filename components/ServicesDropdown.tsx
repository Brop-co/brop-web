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
import Link from "next/link";

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
      href: "/services/#web-design",
    },
    {
      icon: PenTool,
      title: "Branding",
      description: "Memorable & Strategic identities",
      href: "/services/#branding",
    },
    {
      icon: Tablet,
      title: "UX/UI Design",
      description: "Seamless & intuitive experiences",
      href: "/services/#ux-ui-design",
    },
    {
      icon: RotateCcw,
      title: "Motion Design",
      description: "Engaging animations for brands",
      href: "/services/#motion-design",
    },
    {
      icon: Lightbulb,
      title: "Content Creation",
      description: "Compelling brand storytelling",
      href: "/services/#content-creation",
    },
    {
      icon: FolderOpen,
      title: "Webflow Development",
      description: "Functional & interactive websites",
      href: "/services/#webflow-development",
    },
    {
      icon: Search,
      title: "SEO",
      description: "Boosting search rankings and traffic",
      href: "/services/#seo",
    },
    {
      icon: FileText,
      title: "Landing Page",
      description: "High converting landing pages",
      href: "/services/#landing-page",
    },
  ];

  const specializedServices = [
    {
      icon: RotateCcw,
      title: "Creative Design Subscription",
      description: "Web design, ux/ui, branding services",
      href: "/services/#creative-design-subscription",
    },
    {
      icon: Users,
      title: "Content Design & Socials",
      description: "Engaging assets for all platforms",
      href: "/services/#content-design-socials",
    },
    {
      icon: Shield,
      title: "Website as a Service",
      description: "Complete Turnkey WAAS solution",
      href: "/services/#website-as-a-service",
    },
    {
      icon: Package,
      title: "Marketing Content",
      description: "Content creation for your marketing",
      href: "/services/#marketing-content",
    },
  ];

  // Note: The following are not used in the final component, but I am adding them to the data structure
  // for consistency and future use, as they were present in the prompt.
  const readyMadeSolutions = [
    {
      icon: Package,
      title: "Branding Pack",
      description: "Customizable marketing assets",
      href: "/services/#branding-pack",
    },
    {
      icon: Pencil,
      title: "Superdesign.space",
      description: "Ready to use custom websites",
      href: "/services/#superdesign-space",
    },
  ];

  const otherServices = [
    {
      icon: RotateCcw,
      title: "Creative Direction",
      description: "Art direction in branding, web & motion design.",
      href: "/services/#creative-direction",
    },
    {
      icon: BarChart3,
      title: "Presentation Design",
      description: "Captivating decks that tell your story",
      href: "/services/#presentation-design",
    },
    {
      icon: Package,
      title: "Packaging Design",
      description: "Production ready packaging designs",
      href: "/services/#packaging-design",
    },
    {
      icon: FileText,
      title: "Landing Page",
      description: "Engaging assets for all platforms",
      href: "/services/#landing-page-other", // Added -other to avoid duplicate ID
    },
    {
      icon: Pencil,
      title: "Grey-Label Design",
      description: "Flexible design support for agencies.",
      href: "/services/#grey-label-design",
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
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 bg-blue-50 py-10 lg:py-12 rounded-3xl">
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
                <Link key={index} href={service.href} className="block">
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="flex items-start space-x-4 group"
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
                </Link>
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
                <Link key={index} href={service.href} className="block">
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="flex items-start space-x-4 group"
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesDropdown;
