'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', updateMousePosition)

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
        }
    }, [])

    return (
        <motion.div
            className="fixed top-0 left-0 w-3 h-3 bg-black rounded-full pointer-events-none z-[9999]"
            animate={{
                x: mousePosition.x - 6,
                y: mousePosition.y - 6,
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5,
            }}
        />
    )
}

export default CustomCursor
