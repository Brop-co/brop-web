"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Linur Chubaev",
    description: "Worked for the Rwanda Information Society Authority (RISA).",
    image: "https://placehold.co/800",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Mirhayot Yunusov",
    description: "Worked for the Rwanda TVET Board (RTB).",
    image: "https://placehold.co/800",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Arseny Khorev",
    description: "Worked for the Ministry of ICT and Innovation (Rwanda).",
    image: "https://placehold.co/800",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Sofia Petrova",
    description: "Worked for the Rwanda Utilities Regulatory Authority (RURA).",
    image: "https://placehold.co/800",
    linkedin: "#",
  },
  {
    id: 5,
    name: "Dmitry Ivanov",
    description: "Worked for the Rwanda Revenue Authority (RRA).",
    image: "https://placehold.co/800",
    linkedin: "#",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 sm:py-28 px-4 sm:px-6 lg:px-10 bg-gray-200"
    >
      <div className="max-w-[1720px] mx-auto">
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
            <h2 className="text-xl sm:text-2xl font-medium text-gray-900">
              Who we are
            </h2>
          </div>

          {/* Right: Tagline */}
          <div>
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-[600] text-gray-900 leading-snug sm:leading-tight">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 w-full mx-auto"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm p-4 sm:p-5 group flex flex-col h-full"
            >
              {/* Image container */}
              <motion.div
                className="w-full aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden rounded-[24px]"
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-[24px]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </motion.div>

              {/* Text + LinkedIn */}
              <div className="pt-5 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="text-lg sm:text-xl font-[600] text-gray-900 mb-1 leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-gray-500 text-sm sm:text-base mb-4">
                    {member.description}
                  </p>
                </div>
                <div className="flex justify-end">
                  <motion.a
                    href={member.linkedin}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 150 }}
                    className="p-1"
                    data-cursor="hover"
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded-lg items-center justify-center flex shadow-sm">
                      <Linkedin
                        className="w-4 h-4 text-white"
                        fill="white"
                      />
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
