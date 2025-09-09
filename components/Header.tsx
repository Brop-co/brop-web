"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, LucideIcon, Menu, X } from "lucide-react";
import {
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
  Palette,
  Smartphone,
  Video,
  Globe,
  Building,
  Zap,
  Heart,
  Building2,
  Briefcase,
  Award,
} from "lucide-react";
import Link from "next/link";
import AboutDropdown from "./AboutDropdown";
import ProjectsDropdown from "./ProjectsDropdown";
import ServicesDropdown from "./ServicesDropdown";

type DropdownKey = "about" | "projects" | "services";

interface DropdownItem {
  name: string;
  icon: LucideIcon;
  href: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<
    string | null | undefined
  >(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: "Home", href: "/#home", hasDropdown: false },
    { name: "About", href: "/about", hasDropdown: true, dropdown: "about" },
    {
      name: "Projects",
      href: "projects",
      hasDropdown: true,
      dropdown: "projects",
    },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      dropdown: "services",
    },
    { name: "For Startups", href: "/startups", hasDropdown: false },
  ];

  // Mobile dropdown data
  const mobileDropdownData: Record<DropdownKey, DropdownItem[]> = {
    about: [
      { name: "Company", icon: Building2, href: "/about/#home" },
      { name: "Our Team", icon: Users, href: "/about/#about" },
      { name: "Careers", icon: Briefcase, href: "/about/#approachs" },
    ],
    projects: [
      {
        name: "Branding",
        icon: Palette,
        href: "/projects/?filter=branding#projects",
      },
      {
        name: "Web Design",
        icon: Monitor,
        href: "/projects/?filter=web design#projects",
      },
      {
        name: "UX/UI Design",
        icon: Smartphone,
        href: "/projects/?filter=ui/ux#projects",
      },
    ],
    services: [
      { name: "Web Design", icon: Monitor, href: "/services/#services" },
      { name: "Branding", icon: PenTool, href: "/services/#services" },
      { name: "UX/UI Design", icon: Tablet, href: "/services/#services" },
      {
        name: "Motion Design",
        icon: RotateCcw,
        href: "/services/#services",
      },
      {
        name: "Content Creation",
        icon: Lightbulb,
        href: "/services/#services",
      },
      {
        name: "Webflow Development",
        icon: FolderOpen,
        href: "/services/#services",
      },
      { name: "SEO", icon: Search, href: "/services/#services" },
      { name: "Landing Page", icon: FileText, href: "/services/#services" },
    ],
  };

  const clearDropdownTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (activeDropdown) {
        setActiveDropdown(null);
        clearDropdownTimeout();
      }
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, activeDropdown]);

  const handleMouseEnter = (dropdown: string) => {
    clearDropdownTimeout();
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    clearDropdownTimeout();
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    clearDropdownTimeout();
  };

  const handleDropdownMouseLeave = () => {
    clearDropdownTimeout();
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      clearDropdownTimeout();
    };
  }, []);

  useEffect(() => {
    if (!isHeaderVisible && activeDropdown) {
      setActiveDropdown(null);
      clearDropdownTimeout();
    }
  }, [isHeaderVisible, activeDropdown]);

  const scrollToContact = () => {
    const aboutSection = document.getElementById("contact");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const renderDropdown = () => {
    if (!activeDropdown) return null;
    switch (activeDropdown) {
      case "about":
        return (
          <AboutDropdown
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          />
        );
      case "projects":
        return (
          <ProjectsDropdown
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          />
        );
      case "services":
        return (
          <ServicesDropdown
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          />
        );
      default:
        setActiveDropdown(null);
        return null;
    }
  };

  // Animated Menu Icon Component
  const AnimatedMenuIcon = ({ isOpen }: { isOpen: boolean }) => (
    <div className="w-6 h-6 flex items-center justify-center relative">
      <motion.span
        className="absolute w-5 h-0.5 bg-gray-700"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 0 : -6,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute w-5 h-0.5 bg-gray-700"
        animate={{
          opacity: isOpen ? 0 : 1,
          x: isOpen ? -20 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute w-5 h-0.5 bg-gray-700"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? 0 : 6,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </div>
  );

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isHeaderVisible ? 0 : -100,
        opacity: isHeaderVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md"
    >
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <img
                src="/logo.svg"
                alt="Brop Logo"
                className="w-12 h-12 sm:w-14 sm:h-14"
              />
              <span className="text-3xl sm:text-4xl font-semibold text-gray-900 lowercase">
                brop
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-12">
            {menuItems.map((item) => {
              const isActive = activeDropdown === item.dropdown;
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.hasDropdown && item.dropdown) {
                      handleMouseEnter(item.dropdown);
                    }
                  }}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href || "#"}
                    className={`relative font-medium text-lg xl:text-xl transition-colors duration-200 flex items-center space-x-2 py-3 group ${
                      item.hasDropdown
                        ? isActive
                          ? "text-gray-600"
                          : "text-gray-900 hover:text-gray-600"
                        : "text-gray-900"
                    }`}
                  >
                    <span className="relative">
                      {item.name}
                      {!item.hasDropdown && (
                        <span className="absolute left-0 bottom-0 h-[1px] bg-gray-900 w-full scale-x-0 origin-right transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-hover:origin-left"></span>
                      )}
                    </span>
                    {item.hasDropdown && (
                      <motion.span
                        animate={{
                          rotate: isActive ? 180 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ChevronDown
                          size={20}
                          className="transition-transform duration-300"
                        />
                      </motion.span>
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            {/* Desktop Let's Chat Button - Hidden on medium devices */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <motion.button
                onClick={scrollToContact}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden group font-medium py-3 px-6 xl:px-8 rounded-full text-lg xl:text-xl cursor-pointer bg-gray-200 whitespace-nowrap"
              >
                <span className="absolute inset-0 bg-gray-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                <span className="relative z-10 flex items-center gap-2 font-[550] text-gray-900 group-hover:text-white transition-colors duration-500">
                  Let's chat
                  <span className="inline-block group-hover:-rotate-45 transition-transform duration-500">
                    👋
                  </span>
                </span>
              </motion.button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors duration-200"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatedMenuIcon isOpen={isMenuOpen} />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden py-6 border-t border-gray-200"
            >
              <div className="flex flex-col">
                {menuItems.map((item, index) => {
                  const isActive = activeDropdown === item.dropdown;
                  const dropdownItems: DropdownItem[] = item.dropdown
                    ? mobileDropdownData[item.dropdown as DropdownKey] || []
                    : [];

                  return (
                    <div key={item.name} className="flex flex-col">
                      {item.hasDropdown ? (
                        // This is for dropdown items like 'About' and 'Services'
                        <button
                          onClick={() =>
                            setActiveDropdown(isActive ? null : item.dropdown)
                          }
                          className={`flex justify-between items-center font-medium text-lg py-4 px-4 transition-colors duration-200 ${
                            isActive
                              ? "text-gray-600 bg-gray-50"
                              : "text-gray-900 hover:text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          {item.name}
                          <motion.span
                            animate={{ rotate: isActive ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <ChevronDown size={20} />
                          </motion.span>
                        </button>
                      ) : (
                        // This is for non-dropdown items like 'Home' and 'For Startups'
                        <Link
                          href={item.href || "#"}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex justify-between items-center font-medium text-lg py-4 px-4 transition-colors duration-200 text-gray-900 hover:text-gray-600 hover:bg-gray-50"
                        >
                          {item.name}
                        </Link>
                      )}

                      {/* Mobile Dropdown Content */}
                      <AnimatePresence>
                        {item.hasDropdown && isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden bg-gray-50 border-t border-gray-200"
                          >
                            <div className="px-6 py-4">
                              <div className="grid grid-cols-2 gap-3">
                                {dropdownItems.map((dropdownItem, idx) => {
                                  const IconComponent = dropdownItem.icon;
                                  return (
                                    <Link
                                      key={idx}
                                      href={dropdownItem.href}
                                      className="block"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex items-center space-x-3 p-3 rounded-lg bg-white hover:bg-blue-50 transition-colors duration-200 text-left group"
                                      >
                                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-200">
                                          <IconComponent
                                            size={16}
                                            className="text-blue-600 group-hover:text-white transition-colors duration-200"
                                          />
                                        </div>
                                        <span className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors duration-200">
                                          {dropdownItem.name}
                                        </span>
                                      </motion.div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {/* Mobile Chat Button */}
                <div className="px-4 mt-4">
                  <motion.button
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToContact();
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200 w-full text-center text-lg flex items-center justify-center gap-2"
                  >
                    Let's chat
                    <span className="inline-block">👋</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Dropdown Menus */}
      <AnimatePresence mode="wait">
        {activeDropdown && (
          <motion.div
            key={activeDropdown}
            ref={dropdownRef}
            className="hidden lg:block absolute top-full left-0 right-0 max-w-[1460px] m-auto"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {renderDropdown()}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
