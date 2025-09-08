"use client";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useScroll,
} from "framer-motion";
import { useState, useRef } from "react";
import { useLayoutEffect } from "react";
import { ChevronDown, ArrowUpRight, ArrowRight } from "lucide-react";

const Need = () => {
  const [selectedServices, setSelectedServices] = useState(["Website Design"]);
  const [budget, setBudget] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    project: "",
  });

  const freeChipRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isFreeChipMoved, setIsFreeChipMoved] = useState(false);

  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(
    useTransform(mouseX, [-100, 100], [-300, 300]),
    springConfig
  );
  const y = useSpring(
    useTransform(mouseY, [-100, 100], [-300, 300]),
    springConfig
  );

  const services = [
    "Website Design",
    "UX/UI",
    "Motion Design",
    "Landing page",
    "Content Creation",
    "SEO",
    "Branding",
    "Webflow Development",
  ];

  const budgets = ["Free", "< $10k", "> $10k"];

  const handleServiceToggle = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleBudgetSelect = (budgetOption: string) => {
    if (budgetOption === "Free") return; // Prevent selecting Free
    setBudget(budgetOption);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (freeChipRef.current) {
      const rect = freeChipRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      if (Math.abs(distanceX) < 100 && Math.abs(distanceY) < 100) {
        if (!isFreeChipMoved) {
          mouseX.set(-distanceX * 3);
          mouseY.set(-distanceY * 3);
          setIsFreeChipMoved(true);
        } else {
          mouseX.set(0);
          mouseY.set(0);
          setIsFreeChipMoved(false);
        }
      }
    }
  };

  const handleFreeChipClick = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsFreeChipMoved(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, selectedServices, budget });
  };

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // --- SMOOTHING LAYER: make the scroll progress extremely smooth ---
  // We create a smoothed spring version of scrollYProgress and use that
  // in all transforms below. This reduces jitter and produces an "extremely"
  // smooth feel without changing other logic.
  const smoothScroll = useSpring(scrollYProgress, {
    damping: 35,
    stiffness: 60,
    mass: 0.6,
  });

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

  const cardRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  useLayoutEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
    }
  }, []);

  const maxX = Math.max(0, cardWidth * 0.425);

  // Left positions for cards (as percentages)
  const card1Left = useTransform(
    smoothScroll,
    [0, 0.2, 0.2, 0.4, 0.4, 0.6, 0.6, 0.8, 0.8, 1],
    [35, 35, 35, 17.5, 17.5, 17.5, 17.5, 0, 0, 0]
  );
  const card2Left = useTransform(
    smoothScroll,
    [0, 0.2, 0.2, 0.4, 0.4, 0.6, 0.6, 0.8, 0.8, 1],
    [100, 100, 100, 52.5, 52.5, 52.5, 52.5, 35, 35, 35]
  );
  const card3Left = useTransform(
    smoothScroll,
    [0, 0.2, 0.2, 0.4, 0.4, 0.6, 0.6, 0.8, 0.8, 1],
    [100, 100, 100, 100, 100, 100, 100, 70, 70, 70]
  );

  const lefts = [card1Left, card2Left, card3Left];

  // Gif positions (x translate in px) - Fixed to stay within bounds
  const gif1X = useTransform(
    smoothScroll,
    [0, 0.2, 0.2, 1],
    [0, maxX, maxX, maxX]
  );
  const gif2X = useTransform(
    smoothScroll,
    [0, 0.4, 0.4, 0.6, 0.6, 1],
    [0, 0, 0, maxX, maxX, maxX]
  );
  const gif3X = useTransform(smoothScroll, [0, 0.8, 0.8, 1], [0, 0, 0, maxX]);

  const gifXs = [gif1X, gif2X, gif3X];

  return (
    <section id="need" className="py-28 px-6 sm:px-8 lg:px-16 bg-gray-200">
      <div className="max-w-[1460px] mx-auto">
        <div ref={targetRef} className="h-[300vh]">
          <div className="sticky top-0 h-[100vh] bg-gray-200">
            {/* Title and Tagline - Now inside sticky container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 pt-20"
            >
              {/* Left: Title */}
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl font-medium text-gray-900">
                  Why Startups need Brop
                </h2>
              </div>
              {/* Right: Tagline */}
              <div className="">
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-[600] text-gray-900 leading-snug sm:leading-tight px-0 md:px-8">
                  The Impact of our Design and Branding on Startup Success
                </h3>
              </div>
            </motion.div>

            {/* Cards Animation - UPDATED HEIGHT HERE */}
            <div className="flex items-center justify-center overflow-hidden h-[520px]">
              <div className="relative w-full h-[520px]">
                {cards.map((card, index) => (
                  <motion.div
                    key={index}
                    ref={index === 0 ? cardRef : null}
                    className="absolute bg-white rounded-2xl p-8 shadow-sm will-change-transform flex flex-col"
                    style={{
                      left: useTransform(lefts[index], (val) => `${val}%`),
                      width: "30%",
                      height: "480px",
                    }}
                  >
                    {/* Image container with overflow hidden to prevent images from going beyond */}
                    <div className="relative h-[30%] overflow-hidden">
                      <motion.img
                        src={card.image}
                        alt=""
                        className="absolute left-0 h-full w-[50%] rounded-3xl object-cover"
                        style={{
                          x: gifXs[index],
                          // Add these constraints to ensure the image doesn't go beyond bounds
                          clipPath: "inset(0 0 0 0)",
                        }}
                      />
                    </div>

                    <div className="mt-auto">
                      <h4 className="text-5xl font-bold mb-3">{card.title}</h4>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {card.subtitle}
                      </p>
                    </div>
                  </motion.div>
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
