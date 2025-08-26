'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import CustomCursor from '@/components/CustomCursor'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <About />
            <Projects />
            <Services />
            <CustomCursor />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    )
}
