"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Type definitions
interface OfferData {
  id: string;
  title: string;
  description: string;
  services: string[];
  image: string;
  cta: {
    text: string;
    link: string;
  };
}

interface CardProps {
  data: OfferData;
  index: number;
  totalCards: number;
  scrollYProgress: MotionValue<number>;
  isMobile: boolean;
}

const offersData: OfferData[] = [
  {
    id: "01",
    title: "Web Design",
    description:
      "We craft custom websites that combine unique visuals with seamless functionality, helping your startup stand out and succeed.",
    services: [
      "Custom Website Design",
      "UX/UI Design",
      "E-commerce",
      "Webflow Development",
      "CMS Implementation",
      "SEO",
    ],
    image:
      "https://cdn.prod.website-files.com/673786754d248974527e65b5/67a5f5cddd2837bd50516b4d_1784024b473aa525f365467fcb0d2955-p-2000.webp",
    cta: {
      text: "More Info",
      link: "#web-design",
    },
  },
  {
    id: "02",
    title: "Brand Identity",
    description:
      "We create compelling brand identities that resonate with your target audience and establish trust in your market.",
    services: [
      "Logo Design",
      "Brand Guidelines",
      "Color Palette",
      "Typography Selection",
      "Brand Messaging",
      "Marketing Materials",
    ],
    image:
      "https://cdn.prod.website-files.com/673786754d248974527e65b5/67a601b09b0592b6d3537821_2c2df6a2072ac4f7ce8ff5794085da37.webp",
    cta: {
      text: "More Info",
      link: "#branding",
    },
  },
  {
    id: "03",
    title: "Digital Marketing",
    description:
      "We develop strategic marketing campaigns that drive growth and maximize your online presence across all channels.",
    services: [
      "Social Media Strategy",
      "Content Creation",
      "Email Marketing",
      "PPC Advertising",
      "Analytics & Reporting",
      "Conversion Optimization",
    ],
    image:
      "https://cdn.prod.website-files.com/673786754d248974527e65b5/67a602f1ba5d761816a34cab_b1ed3dd079060f4ce655235b655a4dd0.webp",
    cta: {
      text: "More Info",
      link: "#digital-marketing",
    },
  },
  {
    id: "04",
    title: "Digital Marketing",
    description:
      "We develop strategic marketing campaigns that drive growth and maximize your online presence across all channels.",
    services: [
      "Social Media Strategy",
      "Content Creation",
      "Email Marketing",
      "PPC Advertising",
      "Analytics & Reporting",
      "Conversion Optimization",
    ],
    image:
      "https://cdn.prod.website-files.com/673786754d248974527e65b5/6870d0456e30dce1ef848ade_Web%20Developer%20working%20on%20a%20code.jpg",
    cta: {
      text: "More Info",
      link: "#digital-marketing",
    },
  },
];

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
};

const Card: React.FC<CardProps> = ({
  data,
  index,
  totalCards,
  scrollYProgress,
  isMobile,
}) => {
  if (isMobile) {
    // Mobile version (stacked, image first, text after)
    return (
      <div className="flex flex-col-reverse items-center justify-center px-6 sm:px-8 lg:px-16 py-10">
        <div className="w-full max-w-[1300px] bg-white rounded-3xl p-6 sm:p-12 lg:p-16 overflow-hidden">
          <div className="flex flex-col gap-8">
            {/* Image on top */}
            <div className="flex items-center justify-center">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            {/* Text below */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                {data.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {data.description}
              </p>
              <div className="mb-10">
                <p className="text-xl font-semibold text-gray-900 mb-4">
                  Services:
                </p>
                <div className="space-y-2">
                  {data.services.map((service: string, i: number) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                      <span className="text-gray-900 text-xl">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <button className="relative overflow-hidden group font-medium py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg cursor-pointer bg-gray-200 w-full sm:w-auto">
                  <span className="absolute inset-0 bg-gray-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 font-[550] text-lg sm:text-xl text-gray-900 group-hover:text-white transition-colors duration-500">
                    {data.cta.text}
                    <span className="inline-block">
                      <img
                        src="/logo.svg"
                        alt="Logo"
                        className="w-3 h-3 sm:w-4 sm:h-4"
                      />
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop animated version (unchanged)
  const cardStart = index / totalCards;
  const cardEnd = (index + 1) / totalCards;

  const y = useTransform(
    scrollYProgress,
    [
      Math.max(0, cardStart - 0.1),
      cardStart,
      cardEnd,
      Math.min(1, cardEnd + 0.1),
    ],
    ["85vh", "0vh", "0vh", "0vh"]
  );
  const scale = useTransform(
    scrollYProgress,
    [
      Math.max(0, cardStart - 0.1),
      cardStart,
      cardEnd,
      Math.min(1, cardEnd + 0.1),
    ],
    [1, 1, 0.85, 0.85]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, cardStart, cardEnd - 0.02, cardEnd],
    [1, 1, 1, 0]
  );
  const filter = useTransform(
    scrollYProgress,
    [cardStart, cardStart + 0.05, cardEnd + 0.02, cardEnd - 0.02],
    ["blur(0px)", "blur(0px)", "blur(8px)", "blur(20px)"]
  );

  return (
    <motion.div
      style={{ y, scale, opacity, filter }}
      className="absolute inset-0 flex items-center justify-center px-6 sm:px-8 lg:px-16"
    >
      {/* same as your original */}
      <div className="w-full max-w-[1300px] bg-white rounded-3xl p-6 sm:p-12 lg:p-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[450px] lg:min-h-[550px]">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              {data.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {data.description}
            </p>
            <div className="mb-10">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                Services:
              </p>
              <div className="space-y-2">
                {data.services.map((service: string, i: number) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    <span className="text-gray-900 text-2xl">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <button className="relative overflow-hidden group font-medium py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg cursor-pointer bg-gray-200 w-full sm:w-auto">
                <span className="absolute inset-0 bg-gray-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 font-[550] text-lg sm:text-xl text-gray-900 group-hover:text-white transition-colors duration-500">
                  {data.cta.text}
                  <span className="inline-block">
                    <img
                      src="/logo.svg"
                      alt="Logo"
                      className="w-3 h-3 sm:w-4 sm:h-4"
                    />
                  </span>
                </span>
              </button>
            </div>
          </div>
          {/* Right Image */}
          <div className="flex items-center justify-center">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Packages: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <section id="offers" className="bg-gray-200">
      {/* Header Section stays same */}
      <div className="py-24 sm:py-28 px-6 sm:px-8 lg:px-16 bg-gray-200">
        <div className="max-w-[1460px] mx-auto">
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
                Our startup packages
              </h2>
            </div>
            <div>
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-[600] text-gray-900 leading-snug sm:leading-tight">
                Empower your startup with strategic design and branding that
                attract investors and drive growth.
              </h3>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Cards */}
      {isMobile ? (
        // Normal stacked layout
        <div className="flex flex-col space-y-12">
          {offersData.map((offer: OfferData, index: number) => (
            <Card
              key={offer.id}
              data={offer}
              index={index}
              totalCards={offersData.length}
              scrollYProgress={scrollYProgress}
              isMobile={true}
            />
          ))}
        </div>
      ) : (
        // Desktop sticky scroll
        <div
          ref={containerRef}
          className="relative"
          style={{ height: `${offersData.length * 100}vh` }}
        >
          <div className="sticky top-0 h-screen overflow-hidden">
            {offersData.map((offer: OfferData, index: number) => (
              <Card
                key={offer.id}
                data={offer}
                index={index}
                totalCards={offersData.length}
                scrollYProgress={scrollYProgress}
                isMobile={false}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Packages;
