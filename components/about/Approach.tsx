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
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 xl:px-16 bg-gray-200">
      <div className="mx-auto max-w-[1460px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-12 md:mb-20"
        >
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full"></div>
            <h2 className="text-2xl sm:text-3xlfont-medium text-gray-900">
              Our Approach
            </h2>
          </div>
          <div className="pr-0 md:pr-12 lg:pr-36">
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-[600] text-gray-900 leading-snug sm:leading-tight">
              First step to solving a problem is recognizing there is one.
            </h3>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 w-full mx-auto"
        >
          {approachSteps.map((step) => (
            <motion.div
              key={step.id}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden p-3 sm:p-4"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6 sm:mb-12 md:mb-20">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full mr-2 sm:mr-3"></span>
                  <h4 className="text-sm sm:text-base md:text-xl lg:text-2xl font-medium text-gray-900">
                    {step.title}
                  </h4>
                </div>

                <div className="flex-grow flex flex-col justify-end mt-auto">
                  <div className="flex flex-col items-end">
                    <span className="text-base sm:text-lg lg:text-xl font-medium text-gray-300">
                      {`0${step.id}`}
                    </span>

                    <hr className="w-full border-t border-gray-200 mb-2 sm:mb-3" />

                    <p className="text-gray-500 leading-snug text-xs sm:text-sm lg:text-base text-right">
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
