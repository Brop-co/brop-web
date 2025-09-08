"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import { motion, useSpring, useTransform, useScroll } from "framer-motion";
import { ChevronDown, ArrowUpRight, ArrowRight } from "lucide-react";

const Need: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState(["Website Design"]);
  const [budget, setBudget] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    project: "",
  });

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Global smoothing spring for the scroll progress (controls overall "butteriness")
  const globalSmooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 42,
    mass: 1,
  });

  // Cards data
  const cards = [
    {
      image: "/images/man.gif",
      title: "127m+",
      subtitle: "Funding raised by our startup clients",
    },
    {
      image: "/images/boy.gif",
      title: "3.2x",
      subtitle: "Higher valuation achieved with our strategic branding",
    },
    {
      image: "/images/map.gif",
      title: "89%",
      subtitle:
        "Of investors say design quality influences their funding decisions",
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  // Update sizes on layout and resize
  useLayoutEffect(() => {
    const measure = () => {
      if (containerRef.current)
        setContainerWidth(containerRef.current.offsetWidth);
      if (cardRef.current) setCardWidth(cardRef.current.offsetWidth);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const maxX = containerWidth * 0.5 || 0; // how far the whole set should translate
  const gifMoveDistance = cardWidth * 0.425 || 120; // fallback distance

  // Smooth translate for the whole cards container
  const cardsXRaw = useTransform(globalSmooth, [0, 1], [0, -maxX]);
  const cardsX = useSpring(cardsXRaw, {
    stiffness: 90,
    damping: 46,
    mass: 1.2,
  });

  // Create a spring and transform for each gif so they animate sequentially.
  // We'll split the progress into equal sequential segments so each GIF starts
  // when the previous one finished.
  const segments = cards.length;

  const gifSprings = cards.map((_, i) => {
    const start = i / segments; // 0, 1/3, 2/3
    const end = (i + 1) / segments; // 1/3, 2/3, 1

    // map the global progress to a 0 -> gifMoveDistance range but only during [start,end]
    const t = useTransform(globalSmooth, [start, end], [0, gifMoveDistance], {
      clamp: true,
    });

    // then smooth that mapped value with its own spring to avoid any micro-jumps
    return useSpring(t, {
      stiffness: 120,
      damping: 38,
      mass: 0.9,
    });
  });

  return (
    <section id="need" className="py-28 px-6 sm:px-8 lg:px-16 bg-gray-200">
      <div className="max-w-[1460px] mx-auto">
        <div ref={targetRef} className="lg:h-[800vh]">
          <div className="lg:sticky top-0 h-[130vh] lg:h-[65vh] bg-gray-200">
            {/* Title and Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 pt-20"
            >
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl font-medium text-gray-900">
                  Why Startups need Brop
                </h2>
              </div>
              <div>
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-[600] text-gray-900 leading-snug sm:leading-tight px-0 md:px-8">
                  The Impact of our Design and Branding on Startup Success
                </h3>
              </div>
            </motion.div>

            {/* Cards Section */}
            <div className="h-[520px]">
              {/* Desktop (animated) */}
              <motion.div
                ref={containerRef}
                className="hidden lg:flex relative"
                style={{ x: cardsX }}
              >
                {cards.map((card, index) => (
                  <motion.div
                    key={index}
                    ref={index === 0 ? cardRef : null}
                    className="absolute bg-white rounded-2xl p-8 shadow-sm flex flex-col w-[32%] h-[480px]"
                    style={{
                      left: `${50 + index * 34}%`,
                    }}
                  >
                    <div className="relative h-[30%] overflow-hidden">
                      <motion.img
                        src={card.image}
                        alt=""
                        className="absolute left-0 h-full w-[50%] rounded-3xl object-cover"
                        // GPU-accelerate and hint for smoother transforms
                        style={{
                          x: gifSprings[index],
                          willChange: "transform",
                          transform: "translateZ(0)",
                          backfaceVisibility: "hidden",
                        }}
                      />
                    </div>
                    <div className="mt-auto">
                      <h4 className="text-5xl font-bold mb-3">{card.title}</h4>
                      <p className="text-xl text-gray-600 leading-tight pr-[30%]">
                        {card.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Mobile & Tablet (stacked, left-aligned) */}
              <div className="flex flex-col  lg:hidden gap-8">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-start text-left"
                  >
                    <div className="w-[70%] sm:w-[40%] h-40 overflow-hidden rounded-xl mb-4 self-start">
                      <img
                        src={card.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h4 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
                      {card.title}
                    </h4>
                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed pr-[30%">
                      {card.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Need;
