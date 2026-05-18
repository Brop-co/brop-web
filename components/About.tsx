"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useTheme } from "@/components/ThemeProvider";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <section id="about" className="py-24 px-6 sm:px-8 lg:px-16 bg-gray-200 dark:bg-dark-base">
      <div className="max-w-[1460px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white dark:bg-dark-surface rounded-3xl p-10 sm:p-16 lg:p-20 shadow-lg dark:shadow-none dark:border dark:border-white/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 h-full">
            {/* Left Content Area */}
            <div className="space-y-10 flex flex-col">
              {/* Who we are title */}
              <div className="flex items-center space-x-4">
                <div className="w-2.5 h-2.5 bg-black dark:bg-[#FDC448] rounded-full"></div>
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white">
                  Who we are
                </h3>
              </div>

              {/* Video placeholder */}
              <div className="bg-gray-100 dark:bg-dark-base rounded-2xl p-10 flex items-center justify-center flex-1">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-200 dark:bg-white/10 rounded-full flex items-center justify-center mb-5 mx-auto">
                    <Play size={28} className="text-gray-600 dark:text-white/60 ml-1" />
                  </div>
                </div>
              </div>

              {/* Logo and brand name */}
              <div className="flex items-center space-x-6">
                <img
                  src={isDark ? "/dark-theme-logo.svg" : "/light-theme-logo.svg"}
                  alt="Brop Logo"
                  className="w-20 h-20"
                />

              </div>
            </div>

            {/* Right Content Area */}
            <div className="space-y-10">
              {/* Main headline + body text */}
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
                containerClassName="my-0"
                textClassName="font-medium text-gray-900 dark:text-white leading-snug"
                wordAnimationEnd="bottom center"
              >
                {`We are design-first creative studio We believe in the power of purposeful design to solve real business challenges. Every line, color, and interaction is crafted with intent, creating experiences that connect and drive impact. Our mission is to turn ideas into strategic, visual solutions that resonate deeply and support our clients' goals.`}
              </ScrollReveal>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <motion.button className="relative overflow-hidden group font-medium py-4 px-10 sm:py-5 sm:px-12 rounded-full text-xl cursor-pointer bg-[#3827C7] dark:bg-[#FDC448]">
                  <span className="absolute inset-0 bg-white dark:bg-dark-base translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                  <span className="relative z-10 flex items-center gap-3 font-[550] text-white dark:text-dark-base group-hover:text-[#3827C7] dark:group-hover:text-[#FDC448] transition-colors duration-500">
                    About us
                    <ArrowRight
                      size={22}
                      className="inline-block group-hover:translate-x-1 transition-transform duration-500"
                    />
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
