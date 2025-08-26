'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="home" className="pt-32 mt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-[500] text-gray-900 mb-6 leading-tight"
          >
            Your trusted creative partner
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-900 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We deliver creative branding, web design, and UI/UX solutions to make the most impact.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <motion.button
              onClick={scrollToAbout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
            >
              Request a quote ✨
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <motion.div
              className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto cursor-pointer hover:bg-gray-800 transition-colors duration-200"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={24} className="text-white" />
            </motion.div>
          </motion.div>

          {/* Bottom Section with Phrases - No Background */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative overflow-hidden"
          >
            <div className="flex items-center gap-6 text-lg sm:text-xl font-normal text-gray-900">
              <motion.div
                className="flex items-center gap-6 whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span>PURPOSEFUL DESIGNS</span>
                <span className="text-gray-400">/</span>
                <span>STRATEGIC EXPERIENCES</span>
                <span className="text-gray-400">/</span>
                <span>RESULTS DRIVEN SOLUTIONS</span>
                <span className="text-gray-400">/</span>
                <span>BUSINESS VALUE</span>
                <span className="text-gray-400">/</span>
                <span>PURPOSEFUL DESIGNS</span>
                <span className="text-gray-400">/</span>
                <span>STRATEGIC EXPERIENCES</span>
                <span className="text-gray-400">/</span>
                <span>RESULTS DRIVEN SOLUTIONS</span>
                <span className="text-gray-400">/</span>
                <span>BUSINESS VALUE</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
