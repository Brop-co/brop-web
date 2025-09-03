"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, LucideIcon, Menu } from "lucide-react";
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
import AboutDropdown from "./AboutDropdown";
import ProjectsDropdown from "./ProjectsDropdown";
import ServicesDropdown from "./ServicesDropdown";

type DropdownKey = "about" | "projects" | "services";

interface DropdownItem {
  name: string;
  icon: LucideIcon;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: "Home", href: "/#home", hasDropdown: false },
    { name: "About", hasDropdown: true, dropdown: "about" },
    { name: "Projects", hasDropdown: true, dropdown: "projects" },
    { name: "Services", hasDropdown: true, dropdown: "services" },
    { name: "For Startups", href: "/#startups", hasDropdown: false },
  ];

  // Mobile dropdown data
  const mobileDropdownData: Record<DropdownKey, DropdownItem[]> = {
    about: [
      { name: "Company", icon: Building2 },
      { name: "Our Team", icon: Users },
      { name: "Careers", icon: Briefcase },
      { name: "Excellence", icon: Award },
      { name: "Innovation", icon: Globe },
      { name: "Passion", icon: Heart },
      { name: "Impact", icon: Zap },
    ],
    projects: [
      { name: "Multicard", icon: Globe },
      { name: "ContinuOS", icon: Zap },
      { name: "Brandformance", icon: Video },
      { name: "Foothills", icon: Heart },
      { name: "Branding", icon: Palette },
      { name: "Web Design", icon: Monitor },
      { name: "UX/UI Design", icon: Smartphone },
    ],
    services: [
      { name: "Web Design", icon: Monitor },
      { name: "Branding", icon: PenTool },
      { name: "UX/UI Design", icon: Tablet },
      { name: "Motion Design", icon: RotateCcw },
      { name: "Content Creation", icon: Lightbulb },
      { name: "Webflow Development", icon: FolderOpen },
      { name: "SEO", icon: Search },
      { name: "Landing Page", icon: FileText },
      { name: "Creative Design Subscription", icon: RotateCcw },
      { name: "Content Design & Socials", icon: Users },
      { name: "Website as a Service", icon: Shield },
      { name: "Marketing Content", icon: Package },
    ],
  };

  // Clear timeout helper function
  const clearDropdownTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Close dropdown on scroll
      if (activeDropdown) {
        setActiveDropdown(null);
        clearDropdownTimeout();
      }
      // Header visibility logic
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
    }, 150); // Slightly longer delay for better UX
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

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      clearDropdownTimeout();
    };
  }, []);

  // Close dropdown when header becomes invisible
  useEffect(() => {
    if (!isHeaderVisible && activeDropdown) {
      setActiveDropdown(null);
      clearDropdownTimeout();
    }
  }, [isHeaderVisible, activeDropdown]);

  const renderDropdown = () => {
    // Explicitly handle each case and ensure we return null for invalid states
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
        // Explicitly set to null if we get an invalid dropdown value
        setActiveDropdown(null);
        return null;
    }
  };

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
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
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            {menuItems.map((item) => {
              const isActive = activeDropdown === item.dropdown; // 👈 new helper
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
                  <motion.a
                    href={item.href}
                    className={`relative font-medium text-lg sm:text-xl transition-colors duration-200 flex items-center space-x-2 py-3 group ${
                      item.hasDropdown
                        ? isActive
                          ? "text-gray-600" // 👈 stays highlighted when dropdown is open
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
                          rotate: isActive ? 180 : 0, // 👈 rotate when dropdown is active
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ChevronDown
                          size={20}
                          className="transition-transform duration-300"
                        />
                      </motion.span>
                    )}
                  </motion.a>
                </div>
              );
            })}
          </nav>
          {/* Right Side */}
          <div className="flex items-center space-x-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            >
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden group font-medium py-3 px-8 rounded-full text-lg sm:text-xl cursor-pointer bg-gray-200"
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
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-6 border-t border-gray-200"
          >
            <div className="flex flex-col">
              {menuItems.map((item, index) => {
                const isActive = activeDropdown === item.dropdown;
                const dropdownItems: DropdownItem[] = item.dropdown
                  ? mobileDropdownData[item.dropdown as DropdownKey] || []
                  : [];

                return (
                  <div key={item.name} className="flex flex-col">
                    {/* Menu Button */}
                    <button
                      onClick={() => {
                        if (item.hasDropdown && item.dropdown) {
                          setActiveDropdown(isActive ? null : item.dropdown);
                        } else {
                          setIsMenuOpen(false);
                        }
                      }}
                      className={`flex justify-between items-center font-medium text-lg py-4 px-4 transition-colors duration-200 ${
                        isActive
                          ? "text-gray-600 bg-gray-50"
                          : "text-gray-900 hover:text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <motion.span
                          animate={{ rotate: isActive ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <ChevronDown size={20} />
                        </motion.span>
                      )}
                    </button>

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
                                  <motion.button
                                    key={idx}
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
                                  </motion.button>
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

              {/* Chat button */}
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200 w-full text-center text-lg mt-4 mx-4">
                Let's chat 👋
              </button>
            </div>
          </motion.div>
        )}
      </div>
      {/* Desktop Dropdown Menus */}
      <AnimatePresence mode="wait">
        {activeDropdown && (
          <motion.div
            key={activeDropdown}
            ref={dropdownRef}
            className="hidden md:block absolute top-full left-0 right-0 max-w-7xl m-auto"
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
