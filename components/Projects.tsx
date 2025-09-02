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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Left: Featured Works title */}
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <h2 className="text-2xl font-medium text-gray-900">
              Featured Works
            </h2>
          </div>

          {/* Right: Tagline */}
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight">
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
          className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg"
        >
          {/* Project Cards (no borders/shadows) */}
          <div className="space-y-16">
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
                className="border-b border-gray-100 last:border-b-0 pb-16 last:pb-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                  {/* Left Column - Project Details */}
                  <div
                    className={`space-y-8 ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    {/* Category and Title */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span className="text-lg text-gray-600">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-4xl sm:text-5xl font-medium text-gray-900 underline decoration-2 underline-offset-4">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags and Number */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-4xl font-bold text-gray-900">
                        {project.number}
                      </span>
                    </div>
                  </div>

                  {/* Right Column - Project Screenshot */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="bg-gray-200 rounded-2xl p-4 shadow-inner">
                      <div className="bg-white rounded-xl p-6 shadow-sm">
                        {/* Placeholder for actual screenshot */}
                        <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
                          <div className="text-center text-gray-500">
                            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4 mx-auto">
                              <span className="text-2xl">📱</span>
                            </div>
                            <p className="text-sm">
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
          <div className="text-center mt-16">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="relative overflow-hidden group font-medium py-3 px-6 rounded-full text-sm cursor-pointer bg-gray-900 flex items-center space-x-2 mx-auto
             group-hover:bg-gray-100 transition-colors duration-500"
            >
              {/* Sliding background from bottom to top */}
              <span className="absolute inset-0 bg-gray-100  translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

              {/* Button content */}
              <span className="relative z-10 flex items-center gap-2 text-white group-hover:text-gray-900 transition-colors duration-500">
                <span>See all projects</span>
                <ArrowRight
                  size={16}
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
