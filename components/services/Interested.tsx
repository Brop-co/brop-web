"use client";

import { motion } from "framer-motion";

const Interested = () => {
  return (
    <section className="py-16 px-4 sm:py-20 sm:px-6 lg:py-24 lg:px-16 bg-gray-200">
      <div className="max-w-[1460px] mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-16 relative overflow-hidden">
          {/* Decorative dots */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 mb-12 lg:mb-20"
          >
            {/* Left: Title */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-black rounded-full"></div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900">
                Interested?
              </h2>
            </div>
          </motion.div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2   items-center mt-10 lg:mt-8">
            {/* Left column - Heading */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight">
                Let's work
                <br />
                together!
              </h2>
            </motion.div>

            {/* Right column - Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="space-y-6 sm:space-y-8"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-4xl text-gray-900 leading-relaxed">
                Let's bring your vision to life and transform your ideas into a
                powerful, unforgettable brand that drives growth and success!
              </p>
            </motion.div>
          </div>

          {/* Action buttons */}
          <div className="flex justify-center lg:justify-end mt-10 md:mt-12">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto lg:w-[50%]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden group font-medium py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg cursor-pointer bg-gray-200 w-full sm:w-auto"
                >
                  <span className="absolute inset-0 bg-gray-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 font-[550] text-lg sm:text-xl text-gray-900 group-hover:text-white transition-colors duration-500">
                    Schedule a call
                    <span className="inline-block group-hover:-rotate-45 transition-transform duration-500">
                      👋
                    </span>
                  </span>
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden group font-medium py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg cursor-pointer bg-gray-200 w-full sm:w-auto"
                >
                  <span className="absolute inset-0 bg-gray-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 font-[550] text-lg sm:text-xl text-gray-900 group-hover:text-white transition-colors duration-500">
                    Get pricing info
                    <span className="inline-block group-hover:-rotate-45 transition-transform duration-500">
                      💸
                    </span>
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interested;
