'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowUp, Linkedin, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Column 1: Company */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="space-y-4 text-center md:text-left"
                    >
                        <h3 className="text-lg font-bold text-gray-900">Company:</h3>
                        <nav className="space-y-2">
                            {['Home', 'About', 'Services', 'Projects', 'For startups', 'Lab', 'Blog', 'Contacts', 'Careers'].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                                    className="block text-gray-700 hover:text-gray-900 transition-colors duration-200"
                                >
                                    {link}
                                </a>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Column 2: Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="space-y-4 text-center md:text-left"
                    >
                        <h3 className="text-lg font-bold text-gray-900">Services:</h3>
                        <nav className="space-y-2">
                            {['Web Design', 'Branding', 'UX/UI', 'Motion', 'SEO', 'Content Creation', 'Landing Page', 'Webflow Dev'].map((service) => (
                                <a
                                    key={service}
                                    href={`#${service.toLowerCase().replace(' ', '-')}`}
                                    className="block text-gray-700 hover:text-gray-900 transition-colors duration-200"
                                >
                                    {service}
                                </a>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Column 3: Industries */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="space-y-4 text-center md:text-left"
                    >
                        <h3 className="text-lg font-bold text-gray-900">Industries:</h3>
                        <nav className="space-y-2">
                            {['Healthcare', 'Fintech', 'Web3', 'Technology', 'Corporate', 'AI', 'Real Estate', 'E-commerce', 'FMCG', 'Hospitality'].map((industry) => (
                                <a
                                    key={industry}
                                    href={`#${industry.toLowerCase().replace(' ', '-')}`}
                                    className="block text-gray-700 hover:text-gray-900 transition-colors duration-200"
                                >
                                    {industry}
                                </a>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Column 4: Subscribe */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="space-y-4 text-center md:text-left"
                    >
                        <h3 className="text-lg font-bold text-gray-900">Subscribe:</h3>
                        <div className="space-y-4">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your email here"
                                    className="w-full border-b border-gray-400 py-2 px-0 bg-transparent focus:outline-none focus:border-gray-900 transition-colors duration-200 text-center md:text-left"
                                />
                                <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-900 hover:text-gray-700 transition-colors duration-200">
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                By signing up, you agree to our{' '}
                                <a href="#privacy-policy" className="underline hover:text-gray-700 transition-colors duration-200">
                                    Privacy Policy
                                </a>
                                . We respect your data. Unsubscribe anytime.
                            </p>
                        </div>
                    </motion.div>

                    {/* Column 5: Follow us */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        className="space-y-4 text-center md:text-left"
                    >
                        <div className="flex items-center justify-center md:justify-start space-x-3">
                            <h3 className="text-lg font-bold text-gray-900">Follow us on:</h3>
                        </div>
                        <div className="flex justify-center md:justify-start space-x-3">

                            {/* Behance */}
                            <motion.a
                                href="#behance"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors duration-200"
                            >
                                <span className="text-xs font-bold">Bē</span>
                            </motion.a>

                            {/* Instagram */}
                            <motion.a
                                href="#instagram"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors duration-200"
                            >
                                <Instagram size={16} />
                            </motion.a>

                            {/* LinkedIn */}
                            <motion.a
                                href="#linkedin"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors duration-200"
                            >
                                <Linkedin size={16} />
                            </motion.a>

                            {/* Twitter/X */}
                            <motion.a
                                href="#twitter"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors duration-200"
                            >
                                <span className="text-sm font-bold">X</span>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="border-t border-gray-200 py-6"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                        {/* Left: Logo */}
                        <div className="flex items-center space-x-2">
                            <img src="/logo.svg" alt="Brop Logo" className="w-8 h-8" />
                            <span className="text-xl font-bold text-gray-600">brop</span>
                        </div>

                        {/* Center: Copyright and Privacy */}
                        <div className="flex items-center space-x-3 text-sm text-gray-500">
                            <span>© 2025 Brop. All rights reserved</span>
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <a href="#privacy-policy" className="font-bold hover:text-gray-700 transition-colors duration-200">
                                Privacy Policy
                            </a>
                        </div>

                        {/* Right: Scroll to top */}
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors duration-200"
                        >
                            <ArrowUp size={20} />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </footer>
    )
}

export default Footer
