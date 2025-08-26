'use client'

import { useEffect, useRef } from 'react'

const SmoothScroll = () => {
    const isScrolling = useRef(false)
    const targetScrollY = useRef(0)
    const animationFrameId = useRef<number>()

    useEffect(() => {
        let lastScrollY = window.scrollY
        let scrollTimeout: NodeJS.Timeout

        const handleWheel = (e: WheelEvent) => {
            // Don't prevent default - let natural scroll happen
            // Just track the scroll for our smooth effect

            if (scrollTimeout) {
                clearTimeout(scrollTimeout)
            }

            // Set a small delay to detect when scrolling stops
            scrollTimeout = setTimeout(() => {
                if (!isScrolling.current) {
                    isScrolling.current = true
                    targetScrollY.current = window.scrollY
                    smoothScroll()
                }
            }, 50)
        }

        const smoothScroll = () => {
            const currentScrollY = window.scrollY
            const distance = targetScrollY.current - currentScrollY

            // Very subtle smoothing - only if there's a small distance
            if (Math.abs(distance) > 1 && Math.abs(distance) < 100) {
                // Gentle easing - very subtle movement
                const easing = 0.1
                const newScrollY = currentScrollY + (distance * easing)

                window.scrollTo(0, newScrollY)

                // Continue with very gentle animation
                animationFrameId.current = requestAnimationFrame(smoothScroll)
            } else {
                // Stop smoothing
                isScrolling.current = false
            }
        }

        // Add wheel event listener
        window.addEventListener('wheel', handleWheel, { passive: true })

        // Cleanup
        return () => {
            window.removeEventListener('wheel', handleWheel)
            if (scrollTimeout) {
                clearTimeout(scrollTimeout)
            }
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current)
            }
        }
    }, [])

    return null
}

export default SmoothScroll
