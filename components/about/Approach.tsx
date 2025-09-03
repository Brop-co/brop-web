"use client";

import { motion } from "framer-motion";

const approachSteps = [
  {
    id: 1,
    title: "Deep Dive",
    description: "In-depth exploration of business and the product.",
  },
  {
    id: 2,
    title: "Pre-Production",
    description:
      "Identification of the core problems, pain points, and art direction.",
  },
  {
    id: 3,
    title: "Design Proposition",
    description: "Presenting concept solutions.",
  },
  {
    id: 4,
    title: "Design Development",
    description: "Further development of the concept to final product.",
  },
  {
    id: 5,
    title: "Delivery and Testing",
    description: "Design finalization, testing, delivery and handover.",
  },
];

const Approach = () => {
  return (
    <section className="py-24 sm:py-28 px-6 sm:px-8 lg:px-16 bg-gray-200">
      <div className="mx-auto max-w-[1500px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20"
        >
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900">
              Our Approach
            </h2>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 leading-snug sm:leading-tight">
              First step to solving a problem is recognizing there is one.
            </h3>
          </div>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full mx-auto"
        >
          {approachSteps.map((step) => (
            <motion.div
              key={step.id}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="bg-white rounded-3xl overflow-hidden p-6 sm:p-8"
              style={{
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
              }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  <h4 className="text-xl sm:text-xl font-medium text-gray-900">
                    {step.title}
                  </h4>
                </div>
                <div className="flex-grow flex flex-col justify-end mt-auto">
                  <div className="mb-4">
                    <span className="text-xl sm:text-xl font-medium text-gray-300 ml-auto">
                      {`0${step.id}`}
                    </span>
                    <hr className="border-t border-gray-200 my-4" />
                    <p className="text-gray-500 text-base sm:text-base leading-snug">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;
