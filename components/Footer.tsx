"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUp, Linkedin, Instagram } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderLinks = (links: string[]) =>
    links.map((link) => (
      <a
        key={link}
        href={`#${link.toLowerCase().replace(" ", "-")}`}
        className="relative inline-block text-gray-700 dark:text-white/60 text-lg sm:text-xl transition-colors duration-200 group"
      >
        <span className="relative">
          {link}
          <span className="absolute left-0 bottom-0 h-[1px] bg-gray-900 dark:bg-white w-full scale-x-0 origin-right transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-hover:origin-left"></span>
        </span>
      </a>
    ));

  return (
    <footer className="bg-gray-200 dark:bg-dark-base border-t border-transparent dark:border-white/5">
      <div className="max-w-[1460px] mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Column 1: Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-5 text-center md:text-left"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Company:
            </h3>
            <nav className="flex flex-col space-y-3">
              {renderLinks([
                "Home",
                "About",
                "Services",
                "Projects",
                "For startups",
                "Lab",
                "Blog",
                "Contacts",
                "Careers",
              ])}
            </nav>
          </motion.div>

          {/* Column 2: Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="space-y-5 text-center md:text-left"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Services:
            </h3>
            <nav className="flex flex-col space-y-3">
              {renderLinks([
                "Web Design",
                "Branding",
                "UX/UI",
                "Motion",
                "SEO",
                "Content Creation",
                "Landing Page",
                "Webflow Dev",
              ])}
            </nav>
          </motion.div>

          {/* Column 3: Industries */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="space-y-5 text-center md:text-left"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Industries:
            </h3>
            <nav className="flex flex-col space-y-3">
              {renderLinks([
                "Healthcare",
                "Fintech",
                "Web3",
                "Technology",
                "Corporate",
                "AI",
                "Real Estate",
                "E-commerce",
                "FMCG",
                "Hospitality",
              ])}
            </nav>
          </motion.div>

          {/* Column 4: Subscribe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="space-y-5 text-center md:text-left"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Subscribe:
            </h3>
            <div className="space-y-5">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email here"
                  className="w-full border-b border-gray-400 dark:border-white/20 py-3 px-0 bg-transparent focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors duration-200 text-lg sm:text-xl text-gray-900 dark:text-white text-center md:text-left dark:placeholder:text-white/30"
                />
                <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-900 hover:text-gray-700 transition-colors duration-200">
                  <ArrowRight size={24} />
                </button>
              </div>
              <p className="text-base sm:text-lg text-gray-500 dark:text-white/40 leading-relaxed">
                By signing up, you agree to our{" "}
                <a
                  href="#privacy-policy"
                  className="underline hover:text-gray-700 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                . We respect your data. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>

          {/* Column 5: Follow us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="space-y-5 text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Follow us on:
              </h3>
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <motion.a
                href="#behance"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-200 dark:bg-white/10 rounded-full flex items-center justify-center text-gray-700 dark:text-white/60 transition-all duration-200"
                style={{ aspectRatio: "1 / 1" }}
              >
                <span className="text-sm sm:text-base font-bold">Bē</span>
              </motion.a>

              <motion.a
                href="#instagram"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-200 dark:bg-white/10 rounded-full flex items-center justify-center text-gray-700 dark:text-white/60 transition-all duration-200"
                style={{ aspectRatio: "1 / 1" }}
              >
                <Instagram size={20} />
              </motion.a>

              <motion.a
                href="#linkedin"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-200 dark:bg-white/10 rounded-full flex items-center justify-center text-gray-700 dark:text-white/60 transition-all duration-200"
                style={{ aspectRatio: "1 / 1" }}
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        className="border-t border-gray-200 dark:border-white/5 py-8"
      >
        <div className="max-w-[1460px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-5 sm:space-y-0">
            <div className="flex items-center space-x-3">
              <img
                src={isDark ? "/dark-theme-logo.svg" : "/light-theme-logo.svg"}
                alt="Brop Logo"
                className="w-10 h-10"
              />
              <span className="text-2xl sm:text-3xl font-bold text-gray-600 dark:text-white/40">
                brop
              </span>
            </div>

            <div className="flex items-center space-x-4 text-base sm:text-lg text-gray-500 dark:text-white/40">
              <span>© 2025 Brop. All rights reserved</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <a
                href="#privacy-policy"
                className="font-bold hover:text-gray-700 transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </div>

            <motion.button
              onClick={scrollToTop}
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-[#3827C7] dark:bg-[#FDC448] rounded-full flex items-center justify-center text-white dark:text-dark-base hover:bg-[#3827C7]/80 dark:hover:bg-[#FDC448]/80 transition-colors duration-200 hover:text-white"
            >
              <ArrowUp size={24} className="text-inherit" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
