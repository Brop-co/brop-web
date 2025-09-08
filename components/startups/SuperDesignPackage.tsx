"use client";

import { motion } from "framer-motion";

const offersData = [
  {
    id: "01",
    title: "Ideation & Goal Setting",
    description: "We align with your vision and audience.",
    image:
      "https://cdn.prod.website-files.com/673786754d248974527e65b5/687016c70a837bb7efad412a_An%20image%20for%20a%20people%20discussing%20something%20on%20the%20table.jpg",
  },
  {
    id: "02",
    title: "Web Design & Dev",
    description: "We adapt a premium template to match your brand and goals.",
    image:
      "https://cdn.prod.website-files.com/673786754d248974527e65b5/687016c75e84dec1e0152c27_Web%20designer%20working%20on%20his%20Imac.jpg",
  },
  {
    id: "03",
    title: "QA & Launch",
    description: "We make it pixel-perfect and assist with the launch.",
    image:
      "https://cdn.prod.website-files.com/673786754d248974527e65b5/687016c757c115aa859b1ff0_Blocked%20due%20to%20copyrighted%20content.jpg",
  },
];

const SuperDesignPackage = () => {
  return (
    <section
      id="super-offers"
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
              Super Design Package
            </h2>
          </div>

          {/* Right: Tagline */}
          <div className="pl-0 md:pl-20 lg:pl-52">
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-[600] text-gray-900 leading-snug sm:leading-tight text-right">
              A special package for amazing website ready in 10 days.
            </h3>
          </div>
        </motion.div>

        {/* Offers List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
          className="flex flex-col gap-y-14 bg-white p-4 sm:p-12 rounded-3xl"
        >
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-[600] text-gray-900 leading-snug sm:leading-tight w-full md:w-[40%] ">
            Transform Your Online Presence
          </h3>

          {offersData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row items-start justify-between gap-6"
            >
              {/* Left Side: ID + Title */}
              <div className="flex items-center gap-2 lg:gap-10 w-full">
                <span className="flex-none text-xl sm:text-2xl lg:text-3xl text-gray-900 font-semibold lg:block">
                  {item.id}
                </span>
                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
                  {item.title}
                </p>
              </div>

              {/* Middle: Description (hidden on small screens) */}
              <p className="hidden lg:block text-gray-900 text-xl sm:text-2xl lg:text-3xl w-full">
                {item.description}
              </p>

              {/* Right: Image */}
              <div className="w-full h-48 sm:h-56 lg:w-44 lg:h-28 overflow-hidden rounded-xl flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SuperDesignPackage;
