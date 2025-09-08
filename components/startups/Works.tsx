"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Works = () => {
  const services = [
    {
      id: "01",
      name: "Vision",
      description:
        "We start by understanding your vision, goals, problems and audience. Together, we align on how services can elevate your startup and ensure your expectations are crystal clear.",
    },
    {
      id: "02",
      name: "Solutions",
      description:
        "We craft cohesive solutions designed to grow with your startup, ensuring every element aligns seamlessly with your vision and goals.",
    },
    {
      id: "03",
      name: "Refinement",
      description:
        "We collaborate closely during the review process, incorporating your feedback into precise adjustments until everything looks and feels just right.",
    },
    {
      id: "04",
      name: "Hand Over",
      description:
        "With polished deliverables, we equip you with everything needed to launch and scale successfully.",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Use lg breakpoint as the threshold for touch devices
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Variants for the container to orchestrate staggered animations
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each child animation
      },
    },
  };

  // Variants for each individual service card
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="services"
      className="py-20 md:py-28 px-4 sm:px-8 lg:px-16 bg-gray-200"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-12 lg:mb-16">
            {/* Left: "Our services" title */}
            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-3 h-3 bg-black rounded-full"
              ></motion.div>
              <h2 className="text-3xl sm:text-4xl font-medium text-gray-900">
                How it works
              </h2>
            </div>

            {/* Right: Tagline */}
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
                Our Simple 4-Step Collaboration Proces
              </h3>
            </div>
          </div>

          {/* Services Grid with Staggered Animation */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }} // Start animation when 10% of the grid is visible
          >
            {services.map((service) => (
              // Each card is a motion component with its own variants
              <motion.div
                key={service.id}
                className="relative h-[300px] md:h-[360px] rounded-3xl group cursor-pointer"
                style={{ perspective: "1000px" }}
                variants={cardVariants}
              >
                <motion.div
                  className="relative w-full h-full"
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={!isMobile ? { rotateY: -180 } : {}}
                  animate={{
                    rotateY:
                      isMobile && flippedCardId === service.id ? -180 : 0,
                  }}
                  onTap={() => {
                    if (isMobile) {
                      setFlippedCardId(
                        flippedCardId === service.id ? null : service.id
                      );
                    }
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {/* Front Face */}
                  <div
                    className="absolute inset-0 bg-white flex flex-col justify-between p-4 sm:p-6 text-gray-900 rounded-2xl"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    <span className="text-lg sm:text-xl font-medium text-gray-500">
                      {service.id}
                    </span>
                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-medium">
                      {service.name}
                    </h4>
                  </div>

                  {/* Back Face */}
                  <div
                    className="absolute inset-0 bg-gray-900 flex flex-col justify-between p-4 sm:p-6 text-white rounded-2xl"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-medium">
                      {service.name}
                    </h4>
                    <p className="text-sm sm:text-base leading-tight">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
