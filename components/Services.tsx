"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    { id: "01", name: "Website Design" },
    { id: "02", name: "Branding" },
    { id: "03", name: "UX/UI" },
    { id: "04", name: "Motion Design" },
    { id: "05", name: "SEO" },
    { id: "06", name: "Content Creation" },
    { id: "07", name: "Landing Page" },
    { id: "08", name: "Webflow Development" },
  ];

  return (
    <section id="services" className="py-28 px-6 sm:px-8 lg:px-16 bg-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Services List in White Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-white rounded-3xl p-10 sm:p-16 lg:p-20 shadow-lg"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16"
          >
            {/* Left: Our services title */}
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-black rounded-full"></div>
              <h2 className="text-3xl sm:text-4xl font-medium text-gray-900">
                Our services
              </h2>
            </div>

            {/* Right: Tagline */}
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
                We create solutions but most importantly we identify problems.
              </h3>
            </div>
          </motion.div>

          {/* Services List */}
          <div className="space-y-4">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ paddingLeft: 28, paddingRight: 28 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex items-center py-6 border-b border-gray-100 last:border-b-0 group cursor-pointer relative overflow-hidden"
              >
                {/* Sliding background from bottom to top */}
                <span className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

                {/* Service Number */}
                <div className="w-20 flex-shrink-0 relative z-10">
                  <span className="text-gray-900 text-xl sm:text-2xl font-medium">
                    {service.id}
                  </span>
                </div>

                {/* Service Name and Arrow */}
                <div className="flex-1 flex items-center justify-between relative z-10 ml-6">
                  <motion.h4
                    className="text-2xl sm:text-3xl font-bold text-gray-900 text-left overflow-hidden"
                    whileHover={{ y: [-2, 0] }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {service.name}
                  </motion.h4>
                  <motion.div
                    whileHover={{ x: [0, 6, 0] }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="ml-6"
                  >
                    <ArrowRight
                      size={24}
                      className="text-gray-900 group-hover:text-blue-600 transition-colors duration-200"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
