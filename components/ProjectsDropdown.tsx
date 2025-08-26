'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Palette, Monitor, Smartphone, Video, Globe, Building, Zap, Heart } from 'lucide-react'

interface ProjectsDropdownProps {
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const ProjectsDropdown = ({ onMouseEnter, onMouseLeave }: ProjectsDropdownProps) => {
  const projectCategories = [
    { icon: Palette, title: 'Branding', description: 'Brands that make impact' },
    { icon: Monitor, title: 'Web Design', description: 'Websites that connect' },
    { icon: Smartphone, title: 'UX/UI Design', description: 'Seamless & intuitive interfaces' },
  ]

  const featuredProjects = [
    { icon: Globe, title: 'Multicard', description: 'FinTech, UZ - Unified payment platform' },
    { icon: Zap, title: 'ContinuOS', description: 'AI Operating System, US - Smart web automation' },
    { icon: Video, title: 'Brandformance', description: 'Video Ads Platform, UZ - High-impact ad space' },
    { icon: Heart, title: 'Foothills', description: 'Healthcare, US - Pharmacy fulfillment automation' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute top-full left-0 right-0  bg-white border-t border-gray-200 shadow-lg rounded-b-lg py-8 z-40"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Featured Projects */}
          <div>
            <div className="bg-[#F5F5F7] px-4 py-2 rounded-lg mb-6">
              <div className="flex items-center justify-between">
                <span className="text-[#02021E] font-semibold">Featured</span>
                <ArrowRight size={16} className="text-[#3827C7]" />
              </div>
            </div>
            <div className="space-y-4">
              {featuredProjects.map((project, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#F5F5F7] rounded-lg flex items-center justify-center flex-shrink-0">
                    <project.icon size={16} className="text-[#3827C7]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#02021E] text-sm">{project.title}</h4>
                    <p className="text-[#D7D7DF] text-xs">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Project Categories */}
          <div>
            <div className="bg-[#FDC448] px-4 py-2 rounded-lg mb-6">
              <div className="flex items-center justify-between">
                <span className="text-[#02021E] font-semibold">Categories</span>
                <ArrowRight size={16} className="text-[#02021E]" />
              </div>
            </div>
            <div className="space-y-4">
              {projectCategories.map((category, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#F5F5F7] rounded-lg flex items-center justify-center flex-shrink-0">
                    <category.icon size={16} className="text-[#3827C7]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#02021E] text-sm">{category.title}</h4>
                    <p className="text-[#D7D7DF] text-xs">{category.description}</p>
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

export default ProjectsDropdown
