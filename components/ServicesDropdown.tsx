"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { CodeXmlIcon } from "./icons/CodeXmlIcon";
import { SparklesIcon } from "./icons/SparklesIcon";
import { FigmaIcon } from "./icons/FigmaIcon";
import { FramerIcon } from "./icons/FramerIcon";
import { BrainIcon } from "./icons/BrainIcon";
import { SearchIcon } from "./icons/SearchIcon";
import { EyeIcon } from "./icons/EyeIcon";
import { ShieldCheckIcon } from "./icons/ShieldCheckIcon";

interface ServicesDropdownProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const DropdownItem = ({ item }: { item: any }) => {
  const iconRef = useRef<any>(null);

  return (
    <Link
      href={item.href}
      className="group block"
      data-cursor="hover"
      onMouseEnter={() => iconRef.current?.startAnimation?.()}
      onMouseLeave={() => iconRef.current?.stopAnimation?.()}
    >
      <motion.div
        className="flex flex-col items-start p-5 lg:p-6 rounded-[32px] transition-all duration-300 group-hover:bg-white h-full"
      >
        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100/50 mb-4">
          <item.icon
            ref={iconRef}
            size={24}
            className="text-black"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-black text-lg lg:text-xl mb-1 transition-all duration-300 relative inline-block">
            {item.title}
            <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </h4>
          <p className="text-gray-500 text-sm lg:text-base leading-snug">
            {item.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

const ServicesDropdown = ({
  onMouseEnter,
  onMouseLeave,
}: ServicesDropdownProps) => {
  const coreServices = [
    {
      icon: CodeXmlIcon,
      title: "Software Crafting",
      description: "Bespoke digital solutions built with precision.",
      href: "/services/#services",
    },
    {
      icon: SparklesIcon,
      title: "Branding",
      description: "Distinctive identities that resonate and endure.",
      href: "/services/#services",
    },
    {
      icon: FigmaIcon,
      title: "UX/UI Design",
      description: "User-centric interfaces that engage and convert.",
      href: "/services/#services",
    },
    {
      icon: FramerIcon,
      title: "Motion Design",
      description: "Dynamic animations that bring brands to life.",
      href: "/services/#services",
    },
  ];

  const developmentServices = [
    {
      icon: BrainIcon,
      title: "Workflow Automation",
      description: "Streamlined processes powered by intelligent logic.",
      href: "/services/#services",
    },
    {
      icon: SearchIcon,
      title: "SEO",
      description: "Organic growth strategies to dominate search results.",
      href: "/services/#services",
    },
    {
      icon: EyeIcon,
      title: "AR and 3D",
      description: "Immersive experiences that transcend dimensions.",
      href: "/services/#services",
    },
    {
      icon: ShieldCheckIcon,
      title: "Security",
      description: "Robust protection for your digital ecosystem.",
      href: "/services/#services",
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
        className="max-w-6xl mx-auto bg-[#F1F6F9] rounded-[40px] p-6 lg:p-10 shadow-sm border border-white/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[...coreServices, ...developmentServices].map((item, index) => (
            <DropdownItem key={index} item={item} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesDropdown;

