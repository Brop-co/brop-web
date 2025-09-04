"use client";

import { motion } from "framer-motion";

const Expertise = () => {
  const scrollToContact = () => {
    const aboutSection = document.getElementById("contact");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section id="expertise" className="py-24 px-6 sm:px-8 lg:px-16 bg-gray-200">
      <div className="max-w-[1460px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-3xl p-10 sm:p-16 lg:p-20 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Content Area */}
            <div className="space-y-10">
              {/* Expertise title */}
              <div className="flex items-center space-x-4">
                <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900">
                  Expertise
                </h3>
              </div>

              {/* Main headline */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight"
              >
                We solve real problems
              </motion.h2>

              {/* Body text */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-xl sm:text-2xl text-gray-700 leading-relaxed"
              >
                We combine years of expertise in UX/UI, Motion design, Webflow
                development, and Web design to build high-performance digital
                experiences that not only look great but drive engagement and
                results for our clients.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.button
                  onClick={scrollToContact}
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
            </div>

            {/* Right Content Area (Image/Visual Placeholder) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="bg-black rounded-3xl p-4 sm:p-6 lg:p-8 flex items-center justify-center min-h-[450px] lg:min-h-full"
            >
              {/* This is a placeholder for your visual content. 
                  You can replace this with an actual image, video, or component. */}
              <img
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop"
                alt="Digital product mockups"
                className="rounded-2xl object-cover w-full h-full max-h-[500px]"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/600x400/000000/FFFFFF?text=Projects";
                  e.currentTarget.onerror = null;
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
