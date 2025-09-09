"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ✅ Define the project type
type Project = {
  id: string;
  image: string;
  title: string;
  color: string;
};

const projects: Project[] = [
  {
    id: "01",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
    title: "Green Sphere",
    color: "#90EE90",
  },
  {
    id: "02",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=300&fit=crop",
    title: "Tech Dashboard",
    color: "#4169E1",
  },
  {
    id: "03",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    title: "Analytics",
    color: "#87CEEB",
  },
  {
    id: "04",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    title: "Digital Tools",
    color: "#000000",
  },
  {
    id: "05",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    title: "3D Design",
    color: "#E6E6FA",
  },
  {
    id: "06",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop",
    title: "Creative Space",
    color: "#191970",
  },
  {
    id: "07",
    image:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=300&fit=crop",
    title: "Social Media AI",
    color: "#FFFFFF",
  },
  {
    id: "08",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop",
    title: "Dashboard UI",
    color: "#FF6B6B",
  },
  {
    id: "09",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
    title: "Urban Tech",
    color: "#708090",
  },
];

type ProjectCardProps = {
  project: Project;
  index: number;
  containerRef: React.RefObject<HTMLDivElement>;
  hasAnimated: boolean;
  minVisible?: number;
};

const ProjectCard = ({
  project,
  index,
  containerRef,
  hasAnimated,
  minVisible = 20,
}: ProjectCardProps) => {
  const [isDragging, setIsDragging] = useState(false);

  // ✅ Ref with proper element type
  const cardRef = useRef<HTMLDivElement | null>(null);

  // random positions & sizes
  const randomX = useRef(Math.random() * 120 - 60);
  const randomY = useRef(Math.random() * 140 - 70);
  const randomRotate = useRef(Math.random() * 40 - 20);

  const randomLeft = useRef(Math.random() * 80 + 5);
  const randomTop = useRef(Math.random() * 70 + 5);

  const sizes = ["small", "medium", "large"] as const;
  type Size = (typeof sizes)[number];
  const randomSize = useRef<Size>(
    sizes[Math.floor(Math.random() * sizes.length)]
  );

  const sizeClasses: Record<Size, string> = {
    small: "w-32 h-24 sm:w-40 sm:h-28 md:w-48 md:h-32",
    medium: "w-44 h-32 sm:w-56 sm:h-40 md:w-64 md:h-44",
    large: "w-56 h-40 sm:w-72 sm:h-48 md:w-80 md:h-56",
  };

  const [dragConstraints, setDragConstraints] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });

  const computeConstraints = () => {
    const container = containerRef.current;
    const card = cardRef.current;
    if (!container || !card) return;

    const offsetLeft = card.offsetLeft;
    const offsetTop = card.offsetTop;
    const cardW = card.offsetWidth;
    const cardH = card.offsetHeight;
    const containerW = container.clientWidth;
    const containerH = container.clientHeight;

    const left = minVisible - cardW - offsetLeft;
    const right = containerW - minVisible - offsetLeft;
    const top = minVisible - cardH - offsetTop;
    const bottom = containerH - minVisible - offsetTop;

    setDragConstraints({
      left: isFinite(left) ? left : 0,
      right: isFinite(right) ? right : 0,
      top: isFinite(top) ? top : 0,
      bottom: isFinite(bottom) ? bottom : 0,
    });
  };

  useEffect(() => {
    const raf = requestAnimationFrame(() => computeConstraints());
    const handleResize = () => computeConstraints();
    window.addEventListener("resize", handleResize);

    const ro = new ResizeObserver(() => computeConstraints());
    if (containerRef.current) ro.observe(containerRef.current);
    if (cardRef.current) ro.observe(cardRef.current);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      ro.disconnect();
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={`absolute ${
        sizeClasses[randomSize.current]
      } cursor-move select-none`}
      initial={
        hasAnimated
          ? false
          : {
              y: -900 - index * 80,
              x: 0,
              rotate: 0,
              opacity: 0,
            }
      }
      animate={
        hasAnimated
          ? false
          : {
              y: randomY.current,
              x: randomX.current,
              rotate: randomRotate.current,
              opacity: 1,
            }
      }
      transition={{
        type: "spring",
        damping: 12,
        stiffness: 60,
        delay: index * 0.12,
        opacity: { duration: 0.25 },
      }}
      drag
      dragConstraints={dragConstraints}
      dragElastic={0.12}
      dragMomentum={false}
      onDragStart={() => {
        computeConstraints();
        setIsDragging(true);
      }}
      onDragEnd={() => setIsDragging(false)}
      whileHover={{ scale: isDragging ? 1 : 1.03, zIndex: 50 }}
      whileDrag={{ scale: 1.04, zIndex: 200 }}
      style={{
        left: `${randomLeft.current}%`,
        top: `${randomTop.current}%`,
        touchAction: "none",
      }}
    >
      <div
        className="w-full h-full rounded-2xl overflow-hidden transform-gpu"
        style={{
          backgroundColor: project.color || "#fff",
          border: "3px solid rgba(255,255,255,0.2)",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
          draggable={false}
        />
        {project.title && (
          <div className="absolute bottom-2 left-2 bg-black/70 text-white px-3 py-1 rounded-lg text-xs font-medium">
            {project.title}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showExploreButton, setShowExploreButton] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setShowExploreButton(true);
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isInView, hasAnimated]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative bg-gradient-to-br from-gray-200 to-gray-200 overflow-hidden py-20"
    >
      <div className="max-w-[1460px] mx-auto px-8">
        {/* Decorative dots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 mb-8 lg:mb-16"
        >
          {/* Left: Title */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-black rounded-full"></div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900">
              Projects
            </h2>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 relative z-10 block lg:hidden"
        >
          <h2 className=" text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-semibold text-gray-900 mb-4">
            Discover our recent projects
          </h2>

          <Link href="/projects/#projects">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden group font-medium py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg cursor-pointer bg-gray-900 w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 font-[550] text-lg sm:text-xl text-white group-hover:text-gray-900 transition-colors duration-500">
                Explore now
                <img
                  src="/logo.svg"
                  alt="Logo"
                  className="w-5 h-5 inline-block group-hover:-rotate-45 transition-transform duration-500"
                />
              </span>
            </motion.button>
          </Link>
        </motion.div>
        <div
          ref={containerRef}
          className="relative h-[700px] mx-auto pt-8 overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 relative z-10 hidden lg:block"
          >
            <h2 className=" text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-semibold text-gray-900 mb-4">
              Discover our recent projects
            </h2>

            <Link href="/projects/#projects">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden group font-medium py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg cursor-pointer bg-gray-900 w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 font-[550] text-lg sm:text-xl text-white group-hover:text-gray-900 transition-colors duration-500">
                  Explore now
                  <img
                    src="/logo.svg"
                    alt="Logo"
                    className="w-5 h-5 inline-block group-hover:-rotate-45 transition-transform duration-500"
                  />
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              containerRef={containerRef}
              hasAnimated={hasAnimated}
              minVisible={40}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
