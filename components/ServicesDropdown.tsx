'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Monitor, PenTool, Tablet, RotateCcw, Lightbulb, FolderOpen, Search, FileText, Shield, Users, Package, BarChart3, Pencil } from 'lucide-react'

interface ServicesDropdownProps {
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const ServicesDropdown = ({ onMouseEnter, onMouseLeave }: ServicesDropdownProps) => {
  const coreServices = [
    { icon: Monitor, title: 'Web Design', description: 'Engaging assets for all platforms' },
    { icon: PenTool, title: 'Branding', description: 'Memorable & Strategic identities' },
    { icon: Tablet, title: 'UX/UI Design', description: 'Seamless & intuitive experiences' },
    { icon: RotateCcw, title: 'Motion Design', description: 'Engaging animations for brands' },
    { icon: Lightbulb, title: 'Content Creation', description: 'Compelling brand storytelling' },
    { icon: FolderOpen, title: 'Webflow Development', description: 'Functional & interactive websites' },
    { icon: Search, title: 'SEO', description: 'Boosting search rankings and traffic' },
    { icon: FileText, title: 'Landing Page', description: 'High converting landing pages' },
  ]

  const specializedServices = [
    { icon: RotateCcw, title: 'Creative Design Subscription', description: 'Web design, ux/ui, branding services' },
    { icon: Users, title: 'Content Design & Socials', description: 'Engaging assets for all platforms' },
    { icon: Shield, title: 'Website as a Service', description: 'Complete Turnkey WAAS solution' },
    { icon: Package, title: 'Marketing Content', description: 'Content creation for your marketing' },
  ]

  const readyMadeSolutions = [
    { icon: Package, title: 'Branding Pack', description: 'Customizable marketing assets' },
    { icon: Pencil, title: 'Superdesign.space', description: 'Ready to use custom websites' },
  ]

  const otherServices = [
    { icon: RotateCcw, title: 'Creative Direction', description: 'Art direction in branding, web & motion design.' },
    { icon: BarChart3, title: 'Presentation Design', description: 'Captivating decks that tell your story' },
    { icon: Package, title: 'Packaging Design', description: 'Production ready packaging designs' },
    { icon: FileText, title: 'Landing Page', description: 'Engaging assets for all platforms' },
    { icon: Pencil, title: 'Grey-Label Design', description: 'Flexible design support for agencies.' },
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
          {/* Column 1: Core Services */}
          <div>
            <div className="bg-[#F5F5F7] px-4 py-2 rounded-lg mb-6">
              <div className="flex items-center justify-between">
                <span className="text-[#02021E] font-semibold">Core Services</span>
                <ArrowRight size={16} className="text-[#3827C7]" />
              </div>
            </div>
            <div className="space-y-4">
              {coreServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#F5F5F7] rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon size={16} className="text-[#3827C7]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#02021E] text-sm">{service.title}</h4>
                    <p className="text-[#D7D7DF] text-xs">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Specialized Services */}
          <div>
            <div className="bg-[#FDC448] px-4 py-2 rounded-lg mb-6">
              <div className="flex items-center justify-between">
                <span className="text-[#02021E] font-semibold">Specialized</span>
                <ArrowRight size={16} className="text-[#02021E]" />
              </div>
            </div>
            <div className="space-y-4">
              {specializedServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#F5F5F7] rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon size={16} className="text-[#3827C7]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#02021E] text-sm">{service.title}</h4>
                    <p className="text-[#D7D7DF] text-xs">{service.description}</p>
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

export default ServicesDropdown
