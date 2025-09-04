"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "Do you offer revisions?",
    answer:
      "Yes, we provide revisions to ensure the final content meets your expectations and goals. We believe in a collaborative process to get the best results.",
  },
  {
    question: "How long does branding take?",
    answer:
      "The timeline for a branding project can vary depending on the scope and complexity. Typically, it can take anywhere from 4 to 12 weeks. We'll provide a detailed timeline after our initial consultation.",
  },
  {
    question: "What do you need from me to start the project?",
    answer:
      "To start a project, we typically need a clear brief, your brand guidelines (if any), target audience information, and any specific goals you want to achieve. A discovery call is usually the first step.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We have experience working with a wide range of industries, including technology, e-commerce, lifestyle, and professional services. We are adaptable and love tackling new challenges.",
  },
  {
    question: "How long does it take to design a website?",
    answer:
      "A typical website design project takes between 6 to 14 weeks from start to launch. This includes discovery, design, development, and content integration. The exact timeline depends on the project's complexity.",
  },
  {
    question: "How can my website enhance my branding?",
    answer:
      "Your website is a crucial touchpoint for your brand. Consistent visual design, messaging, and user experience on your site can significantly strengthen brand identity, recognition, and trust.",
  },
  {
    question: "What is user experience (UX) design?",
    answer:
      "UX design is the process of creating products that provide meaningful and relevant experiences to users. This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability, and function.",
  },
  {
    question: "What is a content management system (CMS)?",
    answer:
      "A CMS is a software application that allows users to create, manage, and modify content on a website without the need for specialized technical knowledge. Popular examples include WordPress, Shopify, and Webflow.",
  },
  {
    question: "How can I optimize my website's speed?",
    answer:
      "Optimizing website speed involves several techniques, such as compressing images, minifying CSS and JavaScript files, leveraging browser caching, and using a content delivery network (CDN). A faster site improves user experience and SEO.",
  },
  {
    question: "Why is website design important?",
    answer:
      "Good website design is crucial because it creates the first impression, builds trust, improves user experience, and helps in converting visitors into customers. It's a key element of a successful online presence.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-[1460px] mx-auto">
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
              FAQ
            </h2>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight mb-16">
            Frequently
            <br />
            Asked Questions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.1 + (index % 2) * 0.1,
              }}
              className=" border-gray-200"
            >
              <hr />
              <div
                className={`transition-all duration-500 ease-in-out rounded-2xl ${
                  openIndex === index
                    ? "bg-gray-200 text-gray-900 p-6 my-6"
                    : "bg-white text-gray-900 p-6"
                }`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg sm:text-3xl font-medium">
                    {item.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center ${
                      openIndex === index ? "bg-gray-900" : "bg-white"
                    }`}
                  >
                    <span
                      className={`text-2xl transition-transform duration-300 ${
                        openIndex === index
                          ? "transform -rotate-180 text-gray-100"
                          : ""
                      }`}
                    >
                      {openIndex === index ? (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 12H18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-gray-900"
                        >
                          <path
                            d="M12 6V18M6 12H18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                  </div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        marginTop: "16px",
                      }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-900 text-base sm:text-lg leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
