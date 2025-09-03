"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Linur Chubaev",
    title: "CEO, Founder",
    image: "https://placehold.co/800",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Mirhayot Yunusov",
    title: "Design Director, Co-Founder",
    image: "https://placehold.co/800",
    linkedin: "#",
  },
];

const Commitments = () => {
  return (
    <section
      id="about"
      className="py-24 sm:py-28 px-6 sm:px-8 lg:px-16 bg-gray-200"
    >
      <div className="max-w-[1500px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20"
        >
          {/* Left: Title */}
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900">
              Who we are
            </h2>
          </div>

          {/* Right: Tagline */}
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 leading-snug sm:leading-tight">
              We are explorers. We constantly seek ways to make an impact
              towards solving problems through creativity.
            </h3>
          </div>
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md p-6 sm:p-8 group"
            >
              {/* Image container */}
              <motion.div
                className="w-full aspect-[14/14] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden rounded-3xl"
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-3xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </motion.div>

              {/* Text + LinkedIn */}
              <div className="pt-4 relative flex justify-between items-start">
                <div>
                  <h4 className="text-2xl sm:text-3xl font-[600] text-gray-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-gray-500 text-lg sm:text-xl mb-4">
                    ({member.title})
                  </p>
                </div>
                <motion.a
                  href={member.linkedin}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 150 }}
                  className="absolute bottom-6 right-6"
                >
                  <div className="w-7 h-7 bg-blue-500 rounded-md  items-center justify-center flex">
                    <Linkedin
                      className="w-4 h-4 text-white"
                      fill="white"
                      size={50}
                    />
                  </div>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Commitments;
