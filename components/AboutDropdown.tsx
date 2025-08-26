'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Building2, Users, Briefcase, Award, Globe, Heart, Zap } from 'lucide-react'

interface AboutDropdownProps {
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const AboutDropdown = ({ onMouseEnter, onMouseLeave }: AboutDropdownProps) => {
  const companyInfo = [
    { icon: Building2, title: 'Company', description: 'Learn more about who we are' },
    { icon: Users, title: 'Our Team', description: 'Meet the people behind' },
    { icon: Briefcase, title: 'Careers', description: 'Join and grow with us' },
  ]

  const values = [
    { icon: Award, title: 'Excellence', description: 'Delivering quality in everything we do' },
    { icon: Globe, title: 'Innovation', description: 'Pushing creative boundaries' },
    { icon: Heart, title: 'Passion', description: 'Love for design and creativity' },
    { icon: Zap, title: 'Impact', description: 'Creating meaningful change' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg rounded-b-lg py-8 z-40"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <div className="bg-[#F5F5F7] px-4 py-2 rounded-lg mb-6">
              <div className="flex items-center justify-between">
                <span className="text-[#02021E] font-semibold">Company</span>
                <ArrowRight size={16} className="text-[#3827C7]" />
              </div>
            </div>
            <div className="space-y-4">
              {companyInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#F5F5F7] rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-[#3827C7]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#02021E] text-sm">{item.title}</h4>
                    <p className="text-[#D7D7DF] text-xs">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Values */}
          <div>
            <div className="bg-[#FDC448] px-4 py-2 rounded-lg mb-6">
              <div className="flex items-center justify-between">
                <span className="text-[#02021E] font-semibold">Our Values</span>
                <ArrowRight size={16} className="text-[#02021E]" />
              </div>
            </div>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#F5F5F7] rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon size={16} className="text-[#3827C7]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#02021E] text-sm">{value.title}</h4>
                    <p className="text-[#D7D7DF] text-xs">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutDropdown
