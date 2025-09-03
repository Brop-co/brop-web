"use client";

import { motion } from "framer-motion";

const commitmentsData = [
  {
    id: "01",
    title: "Trust",
    description:
      "Trust forms the bedrock of our relationships. We prioritize transparency, reliability, and integrity in all our interactions, fostering trust with our clients and partners alike.",
  },
  {
    id: "02",
    title: "Communication",
    description:
      "Effective communication is key to our process. We believe in open dialogue, active listening, and clear, concise messaging to ensure that everyone is on the same page and that ideas are understood and valued.",
  },
  {
    id: "03",
    title: "Integrity",
    description:
      "We hold your authenticity in high regard and appreciate honesty. Our commitment to transparency stems from our deep respect for our stakeholders and the highest working standards. Isn’t the integrity the foundation of prosperous relationships.",
  },
  {
    id: "04",
    title: "Building lasting relationships",
    description:
      "Through trust, communication, and integrity, we ensure that every project is a successful and rewarding experience for all involved.",
  },
];

const Commitments = () => {
  return (
    <section
      id="commitments"
      className="py-24 sm:py-28 px-6 sm:px-8 lg:px-16 bg-gray-200"
    >
      <div className="max-w-[1460px] mx-auto">
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
              Our mission
            </h2>
          </div>

          {/* Right: Tagline */}
          <div className="pr-0 md:pr-20 lg:pr-52">
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-[600] text-gray-900 leading-snug sm:leading-tight">
              To create a world made of thoughtful designs and experiences.
            </h3>
          </div>
        </motion.div>

        {/* Commitments List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
          className="flex flex-col gap-y-14 bg-white p-4 sm:p-12 rounded-3xl"
        >
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-[600] text-gray-900 leading-snug sm:leading-tight w-full md:w-[30%] mb-8">
            Our values and commitments
          </h3>

          {commitmentsData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row items-start gap-4 lg:gap-0"
            >
              {/* ID + Title */}
              <div className="flex items-center gap-3 lg:w-[50%]">
                <span className="flex-none text-xl text-gray-900 pt-1 lg:w-[5%] font-semibold lg:font-normal">
                  {item.id}
                </span>
                <p className="text-xl font-semibold lg:font-normal sm:text-3xl text-gray-900 lg:w-[90%]">
                  {item.title}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-900 text-lg sm:text-xl lg:text-3xl leading-relaxed lg:flex-1">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Commitments;
