"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronDown, ArrowUpRight, ArrowRight } from "lucide-react";

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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

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

  const handleSubmit = async () => {
    console.log("submit called");
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          services: selectedServices,
          budget,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
        setFormData({ name: "", company: "", email: "", phone: "", project: "" });
        setSelectedServices([]);
        setBudget("");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 px-6 sm:px-8 lg:px-16 bg-gray-200 dark:bg-dark-base">
      <div className="max-w-[1460px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white dark:bg-dark-surface rounded-3xl p-10 sm:p-16 lg:p-20 shadow-lg dark:shadow-none dark:border dark:border-white/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <div className="space-y-10">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/15 text-gray-900 dark:text-white font-medium py-3 px-5 rounded-full text-base sm:text-lg transition-colors duration-200"
              >
                Contact us
              </motion.button>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-5xl sm:text-6xl lg:text-8xl font-medium text-gray-900 dark:text-white leading-tight pr-12"
              >
                Let's make an impact
              </motion.h2>
            </div>

            <form
              className="space-y-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base sm:text-lg font-medium text-gray-700 dark:text-white/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    placeholder="John"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full border-b border-gray-300 dark:border-white/20 py-2 px-0 bg-transparent focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors duration-200 text-xl sm:text-2xl text-gray-900 dark:text-white placeholder:text-[12px] dark:placeholder:text-white/30"
                  />
                </div>
                <div>
                  <label className="block text-base sm:text-lg font-medium text-gray-700 dark:text-white/70 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    placeholder="Google"
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full border-b border-gray-300 dark:border-white/20 py-2 px-0 bg-transparent focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors duration-200 text-xl sm:text-2xl text-gray-900 dark:text-white placeholder:text-[12px] dark:placeholder:text-white/30"
                  />
                </div>
                <div>
                  <label className="block text-base sm:text-lg font-medium text-gray-700 dark:text-white/70 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    placeholder="john@google.com"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full border-b border-gray-300 dark:border-white/20 py-2 px-0 bg-transparent focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors duration-200 text-xl sm:text-2xl text-gray-900 dark:text-white placeholder:text-[12px] dark:placeholder:text-white/30"
                  />
                </div>
                <div>
                  <label className="block text-base sm:text-lg font-medium text-gray-700 dark:text-white/70 mb-2">
                    Your Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full border-b border-gray-300 dark:border-white/20 py-2 px-0 bg-transparent focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors duration-200 text-xl sm:text-2xl text-gray-900 dark:text-white placeholder:text-[12px] dark:placeholder:text-white/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-base sm:text-lg font-medium text-gray-700 dark:text-white/70 mb-4">
                  I'm interested in...
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <motion.button
                      key={service}
                      type="button"
                      whileTap={{ scale: 0.98 }}
                      whileHover={{ borderColor: "#111827" }} // Tailwind gray-900
                      onClick={() => handleServiceToggle(service)}
                      className={`relative overflow-hidden inline-flex whitespace-nowrap items-center justify-center py-3 px-4 rounded-full text-base sm:text-lg font-medium cursor-pointer transition-all duration-500 border border-gray-100 dark:border-white/10`}
                    >
                      {/* Animated background for selected state */}
                      <span
                        className={`absolute inset-0 bg-[#3827C7] dark:bg-[#FDC448] transition-transform duration-500 ${
                          selectedServices.includes(service)
                            ? "translate-y-0"
                            : "translate-y-full"
                        }`}
                      ></span>

                      {/* Text on top */}
                      <span
                        className={`relative z-10 flex items-center justify-center w-full h-full transition-colors duration-500 text-lg sm:text-xl ${
                          selectedServices.includes(service)
                            ? "text-white dark:text-dark-base"
                            : "text-gray-900 dark:text-white"
                        }`}
                      >
                        {service}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-base sm:text-lg font-medium text-gray-700 dark:text-white/70 mb-4">
                  Project Budget (USD)
                </label>
                <div className="flex gap-2 flex-col sm:flex-row">
                  {" "}
                  {/* small gap between buttons */}
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
                      className={`flex-1 ${budgetOption === "Free" ? "relative z-10" : ""}`}
                    >
                      <motion.button
                        type="button"
                        disabled={budgetOption === "Free"}
                        onClick={() => handleBudgetSelect(budgetOption)}
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ borderColor: "#111827" }} // gray-900 on hover
                        className="relative overflow-hidden group font-medium py-3 px-6 rounded-full text-base sm:text-lg cursor-pointer transition-all duration-500 border border-gray-100 dark:border-white/10 w-full"
                      >
                        {/* Animated background for selected state */}
                        <span
                          className={`absolute inset-0 bg-[#3827C7] dark:bg-[#FDC448] transition-transform duration-500 ${
                            budget === budgetOption
                              ? "translate-y-0"
                              : "translate-y-full"
                          }`}
                        ></span>

                        {/* Text on top */}
                        <span
                          className={`relative z-10 flex items-center justify-center w-full h-full transition-colors duration-500 ${
                            budget === budgetOption
                              ? "text-white dark:text-dark-base"
                              : "text-gray-900 dark:text-white"
                          }`}
                        >
                          {budgetOption}
                        </span>
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-base sm:text-lg font-medium text-gray-700 dark:text-white/70 mb-4">
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
                    className="w-full border-b border-gray-300 dark:border-white/20 py-2 px-0 bg-transparent focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors duration-200 text-xl sm:text-2xl text-gray-900 dark:text-white resize-none dark:placeholder:text-white/30"
                  />
                </div>
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm font-medium">{errorMsg}</p>
              )}

              {status === "success" ? (
                <p className="text-green-600 dark:text-green-400 text-lg font-medium">
                  Message sent! We'll be in touch soon.
                </p>
              ) : (
                <div className="text-left">
                  <motion.button
                    type="button"
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                    whileTap={{ scale: 0.9 }}
                    className="relative overflow-hidden group font-medium py-4 px-16 rounded-full text-lg sm:text-xl cursor-pointer bg-[#3827C7] dark:bg-[#FDC448] flex items-center space-x-3 transition-colors duration-500 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="pointer-events-none absolute inset-0 bg-white dark:bg-dark-base translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                    <span className="relative z-10 flex items-center gap-3 text-white dark:text-dark-base group-hover:text-[#3827C7] dark:group-hover:text-[#FDC448] transition-colors duration-500">
                      <span>{status === "loading" ? "Sending..." : "Submit"}</span>
                      {status !== "loading" && (
                        <ArrowRight
                          size={20}
                          className="inline-block group-hover:translate-x-1 transition-transform duration-500"
                        />
                      )}
                    </span>
                  </motion.button>
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
