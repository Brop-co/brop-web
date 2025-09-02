"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 h-full">
            {/* Left Content Area */}
            <div className="space-y-8 flex flex-col">
              {/* Who we are title */}
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <h3 className="text-lg font-medium text-gray-900">
                  Who we are
                </h3>
              </div>

              {/* Video placeholder */}
              <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center flex-1">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Play size={24} className="text-gray-600 ml-1" />
                  </div>
                </div>
              </div>

              {/* Logo and brand name */}
              <div className="flex items-center space-x-4">
                <img src="/logo.svg" alt="Brop Logo" className="w-16 h-16" />
                <span className="text-3xl font-medium text-gray-900">brop</span>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="space-y-8">
              {/* Main headline */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight"
              >
                We are design-first creative studio
              </motion.h2>

              {/* Body text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="space-y-6 text-lg text-gray-700 leading-relaxed"
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
                <motion.button className="relative overflow-hidden group font-medium py-2 px-8 rounded-full text-lg cursor-pointer bg-gray-900">
                  {/* Sliding background from bottom to top */}
                  <span className="absolute inset-0  bg-gray-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

                  {/* Button content */}
                  <span className="relative z-10 flex items-center gap-2 font-[550] text-white group-hover:text-gray-900 transition-colors duration-500">
                    About us
                    <ArrowRight
                      size={20}
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
