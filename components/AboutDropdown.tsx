"use client";

import { motion } from "framer-motion";
import { Building2, Briefcase } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { UsersRoundIcon, UsersRoundHandle } from "./icons/UsersRoundIcon";

interface AboutDropdownProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const DropdownItem = ({ item }: { item: any }) => {
  const iconRef = useRef<UsersRoundHandle>(null);

  return (
    <Link
      href={item.href}
      className="group block"
      data-cursor="hover"
      onMouseEnter={() => iconRef.current?.startAnimation?.()}
      onMouseLeave={() => iconRef.current?.stopAnimation?.()}
    >
      <motion.div
        className="flex items-center space-x-5 p-5 lg:p-6 rounded-[32px] transition-all duration-300 group-hover:bg-white"
      >
        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100/50">
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
          <p className="text-gray-500 text-sm lg:text-base leading-snug truncate">
            {item.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

const AboutDropdown = ({ onMouseEnter, onMouseLeave }: AboutDropdownProps) => {
  const companyInfo = [
    {
      icon: Building2,
      title: "Company",
      description: "Learn more about who we are.",
      href: "/about/#home",
    },
    {
      icon: UsersRoundIcon,
      title: "Our Team",
      description: "Meet the people behind.",
      href: "/about/#about",
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
        className="max-w-4xl mx-auto bg-[#F1F6F9] rounded-[40px] p-6 lg:p-8 shadow-sm border border-white/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {companyInfo.map((item, index) => (
            <DropdownItem key={index} item={item} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutDropdown;

