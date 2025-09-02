"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import AboutDropdown from "./AboutDropdown";
import ProjectsDropdown from "./ProjectsDropdown";
import ServicesDropdown from "./ServicesDropdown";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: "Home", href: "#home", hasDropdown: false },
    { name: "About", hasDropdown: true, dropdown: "about" },
    { name: "Projects", hasDropdown: true, dropdown: "projects" },
    { name: "Services", hasDropdown: true, dropdown: "services" },
    { name: "For Startups", href: "#startups", hasDropdown: false },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (activeDropdown) {
        setActiveDropdown(null);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (currentScrollY > lastScrollY && currentScrollY > 100)
        setIsHeaderVisible(false);
      else if (currentScrollY < lastScrollY) setIsHeaderVisible(true);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, activeDropdown]);

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 100);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  };

  const handleDropdownMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 100);
  };

  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    },
    []
  );
  useEffect(() => () => setActiveDropdown(null), []);
  useEffect(() => {
    if (!isHeaderVisible && activeDropdown) {
      setActiveDropdown(null);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  }, [isHeaderVisible, activeDropdown]);

  const renderDropdown = () => {
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
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
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
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown ? handleMouseEnter(item.dropdown!) : null
                }
                onMouseLeave={handleMouseLeave}
              >
                <motion.a
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="text-gray-900 hover:text-gray-600 font-medium text-lg sm:text-xl transition-colors duration-200 flex items-center space-x-2 py-3"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown size={20} />}
                </motion.a>
              </div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-base sm:text-lg"
            >
              Let's chat 👋
            </motion.button>

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
            <div className="flex flex-col space-y-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-gray-900 font-medium text-lg sm:text-xl py-3 flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown size={20} />}
                </a>
              ))}
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors duration-200 w-full text-left text-lg sm:text-xl">
                Let's chat 👋
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Dropdown Menus */}
      <AnimatePresence>
        {activeDropdown && (
          <div
            ref={dropdownRef}
            className="absolute top-full left-0 right-0"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            {renderDropdown()}
          </div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
