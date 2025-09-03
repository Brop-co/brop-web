"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      category: "Investment Firm, UZ",
      title: "UzOman",
      description:
        "Where others see industries, UzOman sees opportunity. This private equity firm moves with precision — backing bold ideas, scaling smart growth, and driving innovation across sectors with quiet confidence and serious impact.",
      tags: ["Landing Page", "Web Design", "Branding"],
      number: "35",
      image: "/uzoman-screenshot.jpg",
    },
    {
      id: 2,
      category: "Maritime Shipping Platform, TR",
      title: "Fractalized",
      description:
        "Fractalized is reshaping maritime investing — giving everyday investors the chance to own a slice of shipping vessels through secure, blockchain-backed technology. It's where fractional ownership meets a sea of opportunity.",
      tags: ["Branding", "Web Design", "UX/UI"],
      number: "24",
      image: "/fractalized-screenshot.jpg",
    },
  ];

  return (
    <section id="projects" className="py-28 px-6 sm:px-8 lg:px-16 bg-gray-200">
      <div className="max-w-[1500px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20"
        >
          {/* Left: Featured Works title */}
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900">
              Featured Works
            </h2>
          </div>

          {/* Right: Tagline */}
          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
              We create solutions but most importantly we identify problems.
            </h3>
          </div>
        </motion.div>

        {/* Big White Card containing all projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-white rounded-3xl p-10 sm:p-16 lg:p-20 shadow-lg"
        >
          {/* Project Cards */}
          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1,
                  ease: "easeOut",
                }}
                className="border-b border-gray-100 last:border-b-0 pb-20 last:pb-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                  {/* Left Column - Project Details */}
                  <div
                    className={`space-y-10 ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    {/* Category and Title */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-3 h-3 bg-black rounded-full"></div>
                        <span className="text-xl text-gray-600">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-5xl sm:text-6xl font-medium text-gray-900 underline decoration-2 underline-offset-4">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags and Number */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-5 py-3 bg-gray-200 text-gray-700 rounded-full text-base sm:text-lg font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-xl sm:text-3xl font-bold text-gray-900">
                        {project.number}
                      </span>
                    </div>
                  </div>

                  {/* Right Column - Project Screenshot */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="bg-gray-200 rounded-2xl p-6 shadow-inner">
                      <div className="bg-white rounded-xl p-8 shadow-sm">
                        {/* Placeholder for actual screenshot */}
                        <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                          <div className="text-center text-gray-500">
                            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-5 mx-auto">
                              <span className="text-3xl">📱</span>
                            </div>
                            <p className="text-base sm:text-lg">
                              {project.title} Screenshot
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Small Center Button */}
          <div className="text-center mt-20">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="relative overflow-hidden group font-medium py-4 px-10 rounded-full text-lg sm:text-xl cursor-pointer bg-gray-900 flex items-center space-x-3 mx-auto group-hover:bg-gray-100 transition-colors duration-500"
            >
              <span className="absolute inset-0 bg-gray-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
              <span className="relative z-10 flex items-center gap-3 text-white group-hover:text-gray-900 transition-colors duration-500">
                <span>See all projects</span>
                <ArrowRight
                  size={20}
                  className="inline-block group-hover:translate-x-1 transition-transform duration-500"
                />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
