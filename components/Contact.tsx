"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";

const Contact = () => {
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

      // Only move if mouse is close enough (within 100px)
      if (Math.abs(distanceX) < 100 && Math.abs(distanceY) < 100) {
        if (!isFreeChipMoved) {
          // Move away when first approached
          mouseX.set(-distanceX * 3);
          mouseY.set(-distanceY * 3);
          setIsFreeChipMoved(true);
        } else {
          // Come back when approached in new position
          mouseX.set(0);
          mouseY.set(0);
          setIsFreeChipMoved(false);
        }
      }
    }
  };

  const handleFreeChipClick = () => {
    // Reset position when Free chip is clicked
    mouseX.set(0);
    mouseY.set(0);
    setIsFreeChipMoved(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, selectedServices, budget });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Section - Branding & Info */}
            <div className="space-y-8">
              {/* Contact us button */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Contact us
              </motion.button>

              {/* Main heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Let's make an impact
              </motion.h2>
            </div>

            {/* Right Section - Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* Personal and Company Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full border-b border-gray-300 py-2 px-0 bg-transparent focus:outline-none focus:border-gray-900 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full border-b border-gray-300 py-2 px-0 bg-transparent focus:outline-none focus:border-gray-900 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full border-b border-gray-300 py-2 px-0 bg-transparent focus:outline-none focus:border-gray-900 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Your number phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full border-b border-gray-300 py-2 px-0 bg-transparent focus:outline-none focus:border-gray-900 transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Services Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  I'm interested in...
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {services.map((service) => (
                    <motion.button
                      key={service}
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleServiceToggle(service)}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedServices.includes(service)
                          ? "bg-gray-200 border-2 border-gray-900 relative"
                          : "text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      {service}
                      {selectedServices.includes(service) && (
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-gray-600 rounded-full"></div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Budget Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Project Budget (USD)
                </label>
                <div className="flex space-x-3">
                  {budgets.map((budgetOption) => (
                    <motion.div
                      key={budgetOption}
                      ref={budgetOption === "Free" ? freeChipRef : null}
                      style={budgetOption === "Free" ? { x, y } : {}}
                      onMouseMove={
                        budgetOption === "Free" ? handleMouseMove : undefined
                      }
                      onClick={
                        budgetOption === "Free"
                          ? handleFreeChipClick
                          : undefined
                      }
                      className={`relative ${
                        budgetOption === "Free" && "border z-[9999]"
                      }`}
                    >
                      <button
                        type="button"
                        disabled={budgetOption === "Free"}
                        onClick={() => handleBudgetSelect(budgetOption)}
                        className={`py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                          budget === budgetOption
                            ? "bg-gray-200 border-2 border-gray-900"
                            : "text-gray-900 hover:bg-gray-100"
                        } ${
                          budgetOption === "Free"
                            ? "cursor-not-allowed opacity-60"
                            : ""
                        }`}
                      >
                        {budgetOption}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Tell us about your project.
                </label>
                <div className="relative">
                  <textarea
                    value={formData.project}
                    onChange={(e) =>
                      setFormData({ ...formData, project: e.target.value })
                    }
                    placeholder="Write something concise...."
                    rows={4}
                    className="w-full border-b border-gray-300 py-2 px-0 bg-transparent focus:outline-none focus:border-gray-900 transition-colors duration-200 resize-none"
                  />
                  <div className="absolute bottom-2 right-2">
                    <ArrowUpRight size={16} className="text-gray-400" />
                  </div>
                </div>
              </div>

              {/* ReCAPTCHA and Submit */}
              <div className="space-y-6">
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.9 }}
                  className="w-full bg-gray-900 text-white font-medium py-4 px-8 rounded-full transition-all duration-500
             hover:bg-transparent hover:text-gray-900 hover:border hover:border-gray-900"
                >
                  Submit
                </motion.button>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
