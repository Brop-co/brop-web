"use client";

import { motion } from "framer-motion";

const stats = [
  { id: "01", value: "100+", label: "Projects Completed" },
  { id: "02", value: "98%", label: "Client Satisfaction Rate" },
  { id: "03", value: "25+", label: "Experts In Our Team" },
  { id: "04", value: "8/10", label: "Clients Return For More" },
];

const Difference = () => {
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
    <section
      id="difference"
      className="py-24 px-6 sm:px-8 lg:px-16 bg-gray-200"
    >
      <div className="max-w-[1460px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-3xl p-10 sm:p-16 lg:p-20 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left Content Area */}
            <div className="space-y-10 flex flex-col justify-center">
              {/* Title */}
              <div className="flex items-center space-x-4">
                <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900">
                  What makes us different?
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
                Eloqwnt
                <br />
                In Numbers
              </motion.h2>

              {/* Body text */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-lg"
              >
                Design is more than aesthetics—it's about measurable impact.
                Here's how we make a difference.
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

            {/* Right Content Area (Stats Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.2 + index * 0.1,
                  }}
                  className="bg-gray-200/70 rounded-3xl p-5 flex flex-col justify-between relative min-h-[250px] md:min-h-[270px]"
                >
                  <div className="self-end text-lg font-medium text-gray-500">
                    {stat.id}
                  </div>
                  <div>
                    <div className="text-5xl lg:text-6xl font-medium text-gray-900">
                      {stat.value}
                    </div>
                    <p className="text-lg text-gray-600 mt-2 max-w-[150px] leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Difference;
