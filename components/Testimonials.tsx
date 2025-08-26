'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react'
import { useState, useRef } from 'react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      id: 1,
      text: "Brop delivered the project ahead of schedule and met the client's expectations. The team communicated clearly and promptly, collaborated well, and provided excellent design input. Moreover, they were results-oriented and responsive to feedback.",
      client: {
        name: "Sean Bockhold",
        role: "Product Owner, Quantum Data Technologies Inc",
        avatar: "QDT",
        avatarType: "text",
        avatarColors: "from-teal-400 to-blue-500"
      }
    },
    {
      id: 2,
      text: "Brop's excellent designs received positive feedback and drew high foot traffic from walk-ins and influencers. The team was responsive and proactive, delivered on time, quickly adapted to feedback, and professionally managed the project.",
      client: {
        name: "Dani Lledo",
        role: "Founder, Amor Fati Tattoo Studio",
        avatar: "👨",
        avatarType: "emoji",
        avatarColors: "from-blue-400 to-blue-500"
      }
    },
    {
      id: 3,
      text: "Brop delivered beyond expectations—on time, on budget, and with exceptional quality. Their responsiveness made every update effortless, and their attention to detail set them apart. A top-tier team we'd highly recommend.",
      client: {
        name: "Nick Geeza",
        role: "CFO, Hennessy Capital",
        avatar: "👔",
        avatarType: "emoji",
        avatarColors: "from-gray-600 to-blue-500"
      }
    },
    {
      id: 4,
      text: "Brop delivered facing website ex at every stage. T seamless, their tu and their attentio The final result w confidently share",
      client: {
        name: "Rapho",
        role: "Co-Founder",
        avatar: "👨‍💼",
        avatarType: "emoji",
        avatarColors: "from-gray-700 to-gray-800"
      }
    },
    {
      id: 5,
      text: "Another excellent testimonial about Brop's exceptional service and design quality that exceeded all expectations.",
      client: {
        name: "Sarah Johnson",
        role: "CEO, Innovation Labs",
        avatar: "SJ",
        avatarType: "text",
        avatarColors: "from-purple-400 to-pink-500"
      }
    }
  ]

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.scrollWidth / testimonials.length
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      })
      setCurrentIndex(index)
    }
  }

  const scrollLeft = () => {
    const newIndex = Math.max(0, currentIndex - 1)
    scrollToIndex(newIndex)
  }

  const scrollRight = () => {
    const newIndex = Math.min(testimonials.length - 1, currentIndex + 1)
    scrollToIndex(newIndex)
  }

  const progressPercentage = ((currentIndex + 1) / testimonials.length) * 100

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center space-x-3 mb-12"
        >
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <h2 className="text-2xl font-medium text-gray-900">Testimonials</h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                className="flex-shrink-0 w-80 lg:w-96"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg h-full">
                  {/* Testimonial Text */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                    {testimonial.text}
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center space-x-3">
                    {/* Avatar */}
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.client.avatarColors} flex items-center justify-center text-white font-semibold text-lg`}>
                      {testimonial.client.avatarType === 'text' ? testimonial.client.avatar : testimonial.client.avatar}
                    </div>

                    {/* Client Details */}
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-sm">
                        {testimonial.client.name}
                      </h4>
                      <p className="text-gray-600 text-xs">
                        {testimonial.client.role}
                      </p>
                    </div>

                    {/* LinkedIn Icon */}
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <Linkedin size={16} className="text-gray-600" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation and Progress Bar */}
          <div className="flex items-center justify-center space-x-6 mt-8">
            {/* Progress Bar */}
            <div className="flex-1 max-w-48">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="bg-gray-800 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center space-x-2">
              <motion.button
                onClick={scrollLeft}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={currentIndex === 0}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronLeft size={20} />
              </motion.button>

              <motion.button
                onClick={scrollRight}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={currentIndex === testimonials.length - 1}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
