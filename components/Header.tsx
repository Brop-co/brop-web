"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, LucideIcon, Menu, X, Sun, Moon } from "lucide-react";
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
import { useTheme } from "./ThemeProvider";

type DropdownKey = "about" | "projects" | "services";

interface DropdownItem {
  name: string;
  icon: LucideIcon;
  href: string;
}

interface HeaderProps {
  theme?: "light" | "dark";
}

const Header = ({ theme = "light" }: HeaderProps) => {
  const { theme: globalTheme, toggleTheme } = useTheme();
  const isDarkMode = globalTheme === "dark";
  // Dark nav when: global dark mode is on, OR the prop explicitly requests dark (e.g. over the hero section)
  const isDark = isDarkMode || theme === "dark";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<
    string | null | undefined
  >(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
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
      setIsAtTop(currentScrollY < 10);
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
            theme={isDark ? "dark" : "light"}
          />
        );
      case "projects":
        return (
          <ProjectsDropdown
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
            theme={isDark ? "dark" : "light"}
          />
        );
      case "services":
        return (
          <ServicesDropdown
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
            theme={isDark ? "dark" : "light"}
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
        className={`absolute w-5 h-0.5 ${isDark ? "bg-white" : "bg-gray-700"}`}
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 0 : -6,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        className={`absolute w-5 h-0.5 ${isDark ? "bg-white" : "bg-gray-700"}`}
        animate={{
          opacity: isOpen ? 0 : 1,
          x: isOpen ? -20 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
      <motion.span
        className={`absolute w-5 h-0.5 ${isDark ? "bg-white" : "bg-gray-700"}`}
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isAtTop
          ? "bg-transparent border-transparent"
          : isDark
            ? "backdrop-blur-xl bg-black/60 border-b border-white/10"
            : "backdrop-blur-xl bg-white/80 border-b border-gray-200/50"
      }`}
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
                src={isDark ? "/dark-theme-logo.svg" : "/light-theme-logo.svg"}
                alt="Brop Logo"
                className="h-10 sm:h-12 w-auto"
              />
            </motion.div>
          </Link>

          <nav className="hidden lg:flex space-x-12 items-center">
            {menuItems.map((item) => {
              const isActive = activeDropdown === item.dropdown;
              return (
                <div
                  key={item.name}
                  className="relative h-20 flex items-center"
                  onMouseEnter={() => {
                    if (item.hasDropdown && item.dropdown) {
                      handleMouseEnter(item.dropdown);
                    }
                  }}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href || "#"}
                    data-cursor="hover"
                    className={`relative font-medium text-lg xl:text-xl transition-all duration-300 flex items-center space-x-2 px-6 py-2.5 rounded-full group ${
                    isDark
                      ? isActive
                        ? "bg-white/10 text-white"
                        : "text-white hover:bg-white/10"
                      : isActive
                        ? "bg-gray-100/80 text-gray-900"
                        : "text-gray-900 hover:bg-gray-50/80"
                  }`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <motion.span
                        animate={{
                          rotate: isActive ? 180 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-colors duration-300 ${
                            isDark
                              ? isActive ? "text-white" : "text-white/40 group-hover:text-white"
                              : isActive ? "text-gray-900" : "text-gray-400 group-hover:text-gray-900"
                          }`}
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
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              data-cursor="hover"
              title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                isDark
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <motion.div
                key={isDarkMode ? "sun" : "moon"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </motion.button>

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
                data-cursor="hover"
                className={`relative overflow-hidden group font-medium py-3 px-6 xl:px-8 rounded-full text-lg xl:text-xl cursor-pointer whitespace-nowrap border ${
                  isDark
                    ? "bg-[#FDC448] border-[#FDC448]"
                    : "bg-[#3827C7] border-transparent"
                }`}
              >
                <span className={`absolute inset-0 translate-y-[105%] group-hover:translate-y-0 transition-transform duration-500 ${isDark ? "bg-dark-base" : "bg-white"}`}></span>
                <span className={`relative z-10 flex items-center gap-2 font-[550] transition-colors duration-500 ${isDark ? "text-dark-base group-hover:text-[#FDC448]" : "text-white group-hover:text-[#3827C7]"}`}>
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
              className={`lg:hidden w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 ${
                isDark ? "bg-white/10 text-white" : "bg-gray-100 text-gray-700 hover:text-gray-900"
              }`}
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
              className={`lg:hidden py-6 border-t ${isDark ? "border-white/10" : "border-gray-200"}`}
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
                          isDark
                            ? isActive ? "text-white/60 bg-white/5" : "text-white hover:text-white/60 hover:bg-white/5"
                            : isActive ? "text-gray-600 bg-gray-50" : "text-gray-900 hover:text-gray-600 hover:bg-gray-50"
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
                          className={`flex justify-between items-center font-medium text-lg py-4 px-4 transition-colors duration-200 ${
                            isDark ? "text-white hover:text-white/60 hover:bg-white/5" : "text-gray-900 hover:text-gray-600 hover:bg-gray-50"
                          }`}
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
                            className={`overflow-hidden border-t ${isDark ? "bg-white/5 border-white/10" : "bg-gray-50 border-gray-200"}`}
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
                                        className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 text-left group ${
                                          isDark ? "bg-white/5 hover:bg-white/10" : "bg-white hover:bg-blue-50"
                                        }`}
                                      >
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                                          isDark ? "bg-white/10 group-hover:bg-white/20" : "bg-[#3827C7]/10 group-hover:bg-[#3827C7]"
                                        }`}>
                                          <IconComponent
                                            size={16}
                                            className={`transition-colors duration-200 ${isDark ? "text-white" : "text-[#3827C7] group-hover:text-white"}`}
                                          />
                                        </div>
                                        <span className={`font-medium text-sm transition-colors duration-200 ${isDark ? "text-white" : "text-gray-900 group-hover:text-[#3827C7]"}`}>
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
                    className={`font-medium py-4 px-6 rounded-lg transition-colors duration-200 w-full text-center text-lg flex items-center justify-center gap-2 ${
                      isDark ? "bg-white text-gray-900 hover:bg-white/90" : "bg-[#3827C7] hover:bg-[#3827C7]/90 text-white"
                    }`}
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
