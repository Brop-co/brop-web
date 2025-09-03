"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Users,
  Briefcase,
  Award,
  Globe,
  Heart,
  Zap,
} from "lucide-react";
import Link from "next/link";

interface AboutDropdownProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const AboutDropdown = ({ onMouseEnter, onMouseLeave }: AboutDropdownProps) => {
  const companyInfo = [
    {
      icon: Building2,
      title: "Company",
      description: "Learn more about who we are",
      href: "/about/#home",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "Meet the people behind the magic",
      href: "/about/#team",
    },
    {
      icon: Briefcase,
      title: "Careers",
      description: "Join and grow with our talented team",
      href: "/about/#careers",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering quality in everything we do",
      href: "/about/#excellence",
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Pushing creative boundaries forward",
      href: "/about/#innovation",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Love for design and creativity drives us",
      href: "/about/#passion",
    },
    {
      icon: Zap,
      title: "Impact",
      description: "Creating meaningful change for brands",
      href: "/about/#impact",
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
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 bg-blue-50 py-10 lg:py-12 rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Column 1: Company Info */}
          <div>
            <div className="bg-[#F5F5F7] px-6 py-4 rounded-lg mb-8">
              <div className="flex items-center justify-between">
                <span className="text-[#02021E] font-semibold text-lg sm:text-xl">
                  Company
                </span>
                <ArrowRight size={20} className="text-[#3827C7]" />
              </div>
            </div>
            <div className="space-y-6">
              {companyInfo.map((item, index) => (
                <Link key={index} href={item.href} className="block">
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F5F5F7] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#3827C7] transition-colors duration-200">
                      <item.icon
                        size={20}
                        className="text-[#3827C7] group-hover:text-white transition-colors duration-200"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#02021E] text-base sm:text-lg mb-1 group-hover:text-[#3827C7] transition-colors duration-200">
                        {item.title}
                      </h4>
                      <p className="text-[#8B8B94] text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Values */}
          <div>
            <div className="bg-[#FDC448] px-6 py-4 rounded-lg mb-8">
              <div className="flex items-center justify-between">
                <span className="text-[#02021E] font-semibold text-lg sm:text-xl">
                  Our Values
                </span>
                <ArrowRight size={20} className="text-[#02021E]" />
              </div>
            </div>
            <div className="space-y-6">
              {values.map((value, index) => (
                <Link key={index} href={value.href} className="block">
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="flex items-start space-x-4 group cursor-pointer"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F5F5F7] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#FDC448] transition-colors duration-200">
                      <value.icon
                        size={20}
                        className="text-[#3827C7] group-hover:text-[#02021E] transition-colors duration-200"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#02021E] text-base sm:text-lg mb-1 group-hover:text-[#3827C7] transition-colors duration-200">
                        {value.title}
                      </h4>
                      <p className="text-[#8B8B94] text-sm sm:text-base leading-relaxed">
                        {value.description}
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

export default AboutDropdown;
