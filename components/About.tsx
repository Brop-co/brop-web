"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 lg:px-16 bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-3xl p-10 sm:p-16 lg:p-20 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 h-full">
            {/* Left Content Area */}
            <div className="space-y-10 flex flex-col">
              {/* Who we are title */}
              <div className="flex items-center space-x-4">
                <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900">
                  Who we are
                </h3>
              </div>

              {/* Video placeholder */}
              <div className="bg-gray-100 rounded-2xl p-10 flex items-center justify-center flex-1">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-5 mx-auto">
                    <Play size={28} className="text-gray-600 ml-1" />
                  </div>
                </div>
              </div>

              {/* Logo and brand name */}
              <div className="flex items-center space-x-6">
                <img src="/logo.svg" alt="Brop Logo" className="w-20 h-20" />
                <span className="text-4xl sm:text-5xl font-medium text-gray-900">
                  brop
                </span>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="space-y-10">
              {/* Main headline */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight"
              >
                We are design-first creative studio
              </motion.h2>

              {/* Body text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="space-y-6 text-xl sm:text-2xl lg:text-3xl text-gray-700 leading-relaxed"
              >
                <p>
                  We believe in the power of purposeful design to solve real
                  business challenges. Every line, color, and interaction is
                  crafted with intent, creating experiences that connect and
                  drive impact.
                </p>
                <p>
                  Our mission is to turn ideas into strategic, visual solutions
                  that resonate deeply and support our clients' goals.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <motion.button className="relative overflow-hidden group font-medium py-4 px-10 sm:py-5 sm:px-12 rounded-full text-xl cursor-pointer bg-gray-900">
                  <span className="absolute inset-0 bg-gray-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                  <span className="relative z-10 flex items-center gap-3 font-[550] text-white group-hover:text-gray-900 transition-colors duration-500">
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
