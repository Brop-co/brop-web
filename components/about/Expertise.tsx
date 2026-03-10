"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CarouselCard = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const carouselImages = [
        "https://placehold.co/800x600/1e1e1e/FFF?text=Incipet+Platform",
        "https://placehold.co/800x600/333333/FFF?text=Fractal+Platform",
        "https://placehold.co/800x600/555555/FFF?text=Kover+Platform",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
        }, 4000); // 4 seconds per image
        return () => clearInterval(interval);
    }, [carouselImages.length]);

    return (
        <div className="w-[85vw] md:w-[45vw] lg:w-[31vw] xl:w-[27vw] h-[50vh] min-h-[400px] max-h-[550px] flex-shrink-0 bg-gray-800 rounded-[32px] sm:rounded-[40px] relative overflow-hidden shadow-sm flex flex-col justify-between">
            {/* Background Image Carousel */}
            {carouselImages.map((src, index) => (
                <motion.img
                    key={index}
                    src={src}
                    alt={`Industry ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                />
            ))}

            {/* Dark Overlay for text legibility */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 p-6 sm:p-10">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-2 drop-shadow-md">
                    15+ Industries
                </h3>
                <p className="text-white/90 text-sm sm:text-base lg:text-lg font-medium drop-shadow-sm">
                    Diverse experience across multiple sectors
                </p>
            </div>

            {/* Progress Bar Indicator */}
            <div className="relative z-10 p-6 sm:p-10 flex flex-col justify-end mt-auto h-full w-full">
                <div className="flex justify-center space-x-2 w-full mt-auto">
                    {carouselImages.map((_, index) => (
                        <div
                            key={index}
                            className="h-1 bg-white/30 rounded-full flex-1 overflow-hidden"
                        >
                            <motion.div
                                className="h-full bg-white rounded-full"
                                initial={{ width: "0%" }}
                                animate={{
                                    width: currentImageIndex === index ? "100%" : currentImageIndex > index ? "100%" : "0%",
                                }}
                                transition={{
                                    duration: currentImageIndex === index ? 4 : 0,
                                    ease: "linear",
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Expertise = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const titleContainerRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState(0);
    const [paddingX, setPaddingX] = useState(16);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        if (!titleContainerRef.current || !scrollRef.current) return;

        const scrollEl = scrollRef.current;

        const updateScrollRange = () => {
            setScrollRange(Math.max(0, scrollEl.scrollWidth - window.innerWidth));
        };

        const titleObserver = new ResizeObserver((entries) => {
            const rect = entries[0].target.getBoundingClientRect();
            // The title's left position gives us the exact padding needed to align.
            const leftPadding = rect.left;
            setPaddingX(leftPadding);
            requestAnimationFrame(updateScrollRange);
        });

        const scrollObserver = new ResizeObserver(() => {
            updateScrollRange();
        });

        titleObserver.observe(titleContainerRef.current);
        scrollObserver.observe(scrollEl);
        window.addEventListener('resize', updateScrollRange);

        return () => {
            titleObserver.disconnect();
            scrollObserver.disconnect();
            window.removeEventListener('resize', updateScrollRange);
        };
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

    return (
        <section ref={targetRef} className="relative h-[250vh] bg-gray-200">
            {/* Sticky container stays in viewport during the 250vh scroll */}
            <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-12 lg:py-24">

                {/* Section Header (Aligned to page container) */}
                <div className="w-full px-4 sm:px-6 lg:px-10 mb-8 sm:mb-12">
                    <div className="max-w-[1720px] mx-auto flex items-center space-x-4" ref={titleContainerRef}>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full"></div>
                        <h2 className="text-xl sm:text-2xl font-medium text-gray-900">
                            Our Expertise
                        </h2>
                    </div>
                </div>

                {/* Horizontal Scroll Track */}
                <motion.div
                    ref={scrollRef}
                    style={{ x, paddingLeft: paddingX, paddingRight: paddingX }}
                    className="flex gap-4 sm:gap-6 lg:gap-8 w-max items-center"
                >
                    {/* Card 1: 20+ Team */}
                    <div className="w-[85vw] md:w-[45vw] lg:w-[31vw] xl:w-[27vw] h-[50vh] min-h-[400px] max-h-[550px] flex-shrink-0 bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 relative overflow-hidden flex flex-col border border-gray-100 shadow-sm">
                        <div className="z-10 mb-8">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 mb-2">
                                20+
                            </h3>
                            <p className="text-gray-500 text-sm sm:text-base lg:text-lg font-medium">
                                Team of talented creative experts
                            </p>
                        </div>
                        {/* Concentric Circles & Avatars Placeholder */}
                        <div className="absolute inset-x-0 bottom-[-30%] h-[80%] flex items-center justify-center pointer-events-none opacity-50 sm:opacity-100">
                            <div className="absolute w-[120%] aspect-square border border-gray-200 rounded-full"></div>
                            <div className="absolute w-[80%] aspect-square border border-gray-200 rounded-full"></div>
                            <div className="absolute w-[40%] aspect-square border border-gray-200 rounded-full bg-gradient-to-tr from-blue-50 to-blue-100"></div>

                            <div className="absolute top-[20%] left-[25%] w-10 h-10 bg-gray-300 rounded-full shadow-md z-10"></div>
                            <div className="absolute top-[35%] right-[20%] w-12 h-12 bg-gray-400 rounded-full shadow-md z-10"></div>
                            <div className="absolute bottom-[40%] left-[35%] w-14 h-14 bg-gray-500 rounded-full shadow-md z-10"></div>
                            <div className="absolute bottom-[30%] right-[35%] w-8 h-8 bg-gray-300 rounded-full shadow-md z-10"></div>
                        </div>
                    </div>

                    {/* Card 2: 5+ Years */}
                    <div className="w-[85vw] md:w-[45vw] lg:w-[31vw] xl:w-[27vw] h-[50vh] min-h-[400px] max-h-[550px] flex-shrink-0 bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 relative overflow-hidden flex flex-col border border-gray-100 shadow-sm">
                        <div className="z-10 mb-8">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 mb-2">
                                5+ Years
                            </h3>
                            <p className="text-gray-500 text-sm sm:text-base lg:text-lg font-medium">
                                Experience in transforming businesses
                            </p>
                        </div>
                        {/* Phone Mockup Placeholder */}
                        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[55%] sm:w-[45%] h-[60%] bg-gray-100 rounded-[32px] border-[6px] border-b-0 border-gray-800 flex flex-col items-center justify-start pt-6 overflow-hidden shadow-2xl z-20">
                            <div className="w-12 h-3 bg-gray-800 rounded-full mb-4"></div>
                            <div className="w-10/12 h-20 bg-pink-400 rounded-xl shadow-sm mb-4"></div>
                            <div className="w-10/12 h-24 bg-white rounded-xl shadow-sm"></div>
                        </div>
                        {/* Background Graphic Placeholder */}
                        <div className="absolute bottom-[10%] left-0 w-full flex items-center justify-center opacity-10 pointer-events-none z-10">
                            {/* "plot9" background text from design */}
                            <span className="text-[120px] font-bold text-black tracking-tighter">plot9</span>
                        </div>
                    </div>

                    {/* Card 3: 100+ Projects */}
                    <div className="w-[85vw] md:w-[45vw] lg:w-[31vw] xl:w-[27vw] h-[50vh] min-h-[400px] max-h-[550px] flex-shrink-0 bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 relative overflow-hidden flex flex-col border border-gray-100 shadow-sm">
                        <div className="z-10 mb-8">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 mb-2">
                                100+
                            </h3>
                            <p className="text-gray-500 text-sm sm:text-base lg:text-lg font-medium">
                                Successfully completed projects
                            </p>
                        </div>
                        {/* Tablet Mockup Placeholder */}
                        <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[85%] h-[55%] bg-gray-100 rounded-2xl border-[6px] border-gray-800 shadow-2xl overflow-hidden p-2 sm:p-3 grid grid-cols-3 gap-2 sm:gap-3 z-10 transform rotate-[-8deg] origin-bottom-left hover:rotate-0 transition-transform duration-500">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className={`rounded-lg shadow-sm opacity-90 border border-gray-200 ${i % 2 === 0 ? 'bg-indigo-900/10' : 'bg-emerald-900/10'} w-full h-full`}></div>
                            ))}
                        </div>
                    </div>

                    {/* Card 4: 15+ Industries (Carousel) */}
                    <CarouselCard />

                </motion.div>
            </div>
        </section>
    );
};

export default Expertise;
