"use client";

import { motion } from "framer-motion";

// Comparison data - easily updatable
const comparisonData = {
  sectionTitle: "Comparison",
  mainHeading: "What makes us different from others",

  leftCard: {
    title: "Other Design Agencies",
    description:
      "Other agencies often provide generic solutions with higher costs and limited flexibility, making them less adaptable to unique needs.",
    sectionLabel: "Offerings",
    items: [
      "Generic, limited flexibility",
      "Generic templates, minimal innovation",
      "Delays due to complex processes",
      "High, often with hidden fees",
      "Limited, slow response time",
    ],
    cardColor: "white",
    textColor: "gray",
  },

  rightCard: {
    title: "Brop",
    logo: {
      type: true, // or "icon"
      color: "gray-900",
    },
    description:
      "We strike the perfect balance between high-quality outcomes, reliable timelines, and transparent pricing, delivering results that exceed expectations.",
    sectionLabel: "Key benefits",
    items: [
      "Customized, tailored to your needs",
      "Premium quality, attention to detail",
      "Clear deadlines, always on time",
      "Transparent, no hidden costs",
      "Dedicated team with responsive support",
    ],
    cardColor: "dark",
    textColor: "white",
    cta: {
      text: "Let's Talk",
      emoji: "✋",
    },
  },
};

const Comparison = () => {
  const { leftCard, rightCard } = comparisonData;

  return (
    <section
      id="comparison"
      className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-16 bg-gray-200"
    >
      <div className="max-w-[1460px] mx-auto">
        {/* Main container card with an initial animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-10 sm:mb-12 lg:mb-16">
            {/* Left: Section title */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-3 h-3 bg-black rounded-full"
              />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900">
                Comparison
              </h2>
            </div>

            {/* Right: Main heading */}
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-snug sm:leading-snug md:leading-tight">
                What makes us different from others
              </h3>
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 bg-white p-4 sm:p-8 md:p-12 lg:p-16 rounded-3xl">
            {/* Left Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`${
                leftCard.cardColor === "white" ? "bg-gray-200" : "bg-gray-900"
              } rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm`}
            >
              <h3
                className={`text-xl sm:text-2xl lg:text-3xl font-medium ${
                  leftCard.textColor === "gray" ? "text-gray-900" : "text-white"
                } mb-4 sm:mb-6`}
              >
                {leftCard.title}
              </h3>

              <p
                className={`${
                  leftCard.textColor === "gray" ? "text-gray-900" : "text-white"
                } mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg`}
              >
                {leftCard.description}
              </p>

              <div className="space-y-1">
                <h4
                  className={`${
                    leftCard.textColor === "gray"
                      ? "text-gray-500"
                      : "text-gray-400"
                  } font-medium mb-3 sm:mb-4 text-lg sm:text-xl`}
                >
                  {leftCard.sectionLabel}
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  {leftCard.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-2 sm:space-x-3"
                    >
                      <div
                        className={`w-2 h-2 ${
                          leftCard.textColor === "gray"
                            ? "bg-gray-900"
                            : "bg-white"
                        } rounded-full mt-2 flex-shrink-0`}
                      />
                      <span
                        className={`${
                          leftCard.textColor === "gray"
                            ? "text-gray-700"
                            : "text-white"
                        } text-base sm:text-lg md:text-xl`}
                      >
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`${
                rightCard.cardColor === "dark" ? "bg-gray-900" : "bg-white"
              } rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 ${
                rightCard.textColor === "white" ? "text-white" : "text-gray-900"
              }`}
            >
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                {rightCard.logo && (
                  <img
                    src="/logo.svg"
                    alt="Logo"
                    className="w-7 h-7 sm:w-8 sm:h-8"
                  />
                )}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium">
                  {rightCard.title}
                </h3>
              </div>

              <p
                className={`${
                  rightCard.textColor === "white"
                    ? "text-gray-300"
                    : "text-gray-600"
                } mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg`}
              >
                {rightCard.description}
              </p>

              <div className="space-y-1">
                <h4
                  className={`${
                    rightCard.textColor === "white"
                      ? "text-gray-400"
                      : "text-gray-500"
                  } font-medium mb-3 sm:mb-4 text-lg sm:text-xl`}
                >
                  {rightCard.sectionLabel}
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  {rightCard.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-2 sm:space-x-3"
                    >
                      <div
                        className={`w-2 h-2 ${
                          rightCard.textColor === "white"
                            ? "bg-white"
                            : "bg-gray-900"
                        } rounded-full mt-2 flex-shrink-0`}
                      />
                      <span
                        className={`${
                          rightCard.textColor === "white"
                            ? "text-white"
                            : "text-gray-900"
                        } text-base sm:text-lg md:text-xl`}
                      >
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              {rightCard.cta && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full ${
                    rightCard.textColor === "white"
                      ? "bg-white text-gray-900 hover:bg-gray-100"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  } font-medium py-3 sm:py-4 px-5 sm:px-6 rounded-full mt-6 sm:mt-8 transition-all duration-200`}
                >
                  {rightCard.cta.text} {rightCard.cta.emoji}
                </motion.button>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
