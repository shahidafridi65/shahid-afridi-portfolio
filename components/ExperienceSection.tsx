"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    title: "Full Stack Engineer",
    company: "Trangla",
    period: "June 2024 - Present",
    description: [
      "Architected and developed scalable web applications using React, Next.js, Python, and Node.js",
      "Built multi-tenant ERP systems with 40+ complex modules for Sales, Purchasing, and Accounting",
      "Implemented robust security layers with RBAC and authentication systems",
      "Led AI integration projects including LLM-powered chatbots and automation platforms"
    ],
    technologies: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Docker", "Node.js", "MongoDB", "Tailwind CSS", "AWS"],
    logo: "/trangla-logo.png"
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10% 0px -10% 0px" });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('experience');
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate progress through the section (0 to 1)
      const progress = Math.max(0, Math.min(1,
        (scrollPosition - sectionTop + windowHeight * 0.3) / (sectionHeight - windowHeight * 0.4)
      ));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="min-h-screen py-16 md:py-20 px-4 sm:px-6 bg-[color:var(--bg-900)] relative overflow-hidden">
      {/* Enhanced Background Animation with More Circles */}
      <div className="absolute inset-0">
        {/* Background Image - Larger Size */}
        <motion.div
          className="absolute top-1/2 right-0 transform translate-y-[-50%] w-1/2 h-4/5 opacity-15"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 0.15, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/animated_1.png"
            alt="Background Animation"
            width={600}
            height={600}
            className="w-full h-full object-contain"
            onError={(e) => {
              console.log("Image not found, using fallback background");
              e.currentTarget.style.display = 'none';
            }}
          />
        </motion.div>

        {/* Enhanced Animated Circles Background */}

        {/* Large Background Circles - More Added */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full border-2 border-[color:var(--color-primary)] opacity-12"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border-2 border-[color:var(--color-secondary)] opacity-12"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.1, 0.16, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Additional Large Circles */}
        <motion.div
          className="absolute top-1/6 right-1/6 w-64 h-64 rounded-full border border-[color:var(--color-primary)] opacity-10"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.15, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/6 left-1/5 w-72 h-72 rounded-full border border-[color:var(--color-secondary)] opacity-10"
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.08, 0.13, 0.08],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
        />

        {/* More Large Circles */}
        <motion.div
          className="absolute top-1/5 left-1/2 w-56 h-56 rounded-full border border-[color:var(--color-primary)] opacity-8"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div
          className="absolute bottom-1/5 right-1/3 w-60 h-60 rounded-full border border-[color:var(--color-secondary)] opacity-9"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.09, 0.14, 0.09],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Medium Circles - More Added */}
        <motion.div
          className="absolute top-3/4 left-1/3 w-40 h-40 rounded-full border border-[color:var(--color-primary)] opacity-15"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.15, 0.22, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/5 w-36 h-36 rounded-full border border-[color:var(--color-secondary)] opacity-12"
          animate={{
            scale: [1, 1.07, 1],
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-2/3 left-1/5 w-32 h-32 rounded-full border border-[color:var(--color-primary)] opacity-14"
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.14, 0.2, 0.14],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        {/* Enhanced Floating Particles - Many More Added */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${i % 3 === 0 ? 'bg-[color:var(--color-primary)]' :
                i % 3 === 1 ? 'bg-[color:var(--color-secondary)]' :
                  'bg-[color:var(--color-accent)]'
              }`}
            style={{
              top: `${20 + (i * 5) % 60}%`,
              left: `${10 + (i * 7) % 80}%`,
              opacity: 0.2 + (i * 0.03) % 0.3,
            }}
            animate={{
              y: [0, -20 - (i * 2) % 30, 0],
              x: [0, 10 + (i * 3) % 20, 0],
              opacity: [0.2 + (i * 0.03) % 0.3, 0.4 + (i * 0.02) % 0.3, 0.2 + (i * 0.03) % 0.3],
            }}
            transition={{
              duration: 3 + (i * 0.5) % 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i * 0.3) % 2,
            }}
          />
        ))}

        {/* Background Dots Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, var(--color-primary) 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, var(--color-secondary) 1px, transparent 1px)`,
            backgroundSize: '50px 50px, 30px 30px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[color:var(--text)]">Work </span>
            <span className="text-[color:var(--color-primary)]">Experience</span>
          </h2>
          <p className="text-[color:var(--muted)] text-base md:text-lg max-w-2xl mx-auto px-4">
            My professional journey and the milestones I've achieved along the way
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical Line Container */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 transform translate-x-[-1px] z-0">
            {/* Static Background Line */}
            <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-primary)] to-[color:var(--color-secondary)] opacity-30"></div>

            {/* Animated Progress Line */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[color:var(--color-primary)] to-[color:var(--color-secondary)]"
              style={{
                height: `${scrollProgress * 100}%`,
              }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            />
          </div>

          {/* Animated Circle that moves along the line - Fixed Position */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 w-6 h-6 bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] rounded-full border-4 border-[color:var(--bg-900)] transform translate-x-[-12px] z-20 shadow-lg"
            style={{
              top: `${scrollProgress * 100}%`,
            }}
            // transition={{ type: "spring", stiffness: 50, damping: 20 }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />

          {/* Experience Items */}
          <div className="space-y-8 md:space-y-12 relative z-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2
                }}
                className="relative flex flex-col md:flex-row items-start"
              >
                {/* Company Logo Circle - Fixed Position */}
                {/* Company Logo Circle - Fixed Position */}
                <div className="absolute left-4 md:left-1/2 top-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] rounded-full border-4 border-[color:var(--bg-900)] transform md:translate-x-[-32px] z-10 flex items-center justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center p-1">
                    <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={32}
                        height={32}
                        className="w-full h-full object-contain rounded-full"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-full h-full bg-[color:var(--bg-700)] rounded-full flex items-center justify-center text-xs font-bold text-[color:var(--color-primary)]">${exp.company.charAt(0)}</div>`;
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Date Badge - Fixed Position */}
                <div className="md:absolute top-14 md:top-20 left-1/2 md:left-1/2 md:pl-16 ml-16 md:ml-0">
                  <motion.div
                    className="flex items-center gap-2 bg-[color:var(--bg-700)] px-3 py-1 md:px-4 md:py-2 rounded-full border border-[color:var(--border)]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[color:var(--color-primary)]" />
                    <span className="text-xs md:text-sm text-[color:var(--muted)] whitespace-nowrap">
                      {exp.period}
                    </span>
                  </motion.div>
                </div>

                {/* Content Card - Fixed Position */}
                <motion.div
                  className="ml-16 md:ml-0 md:w-5/12 md:pl-16 mt-2 md:mt-0"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                >
                  <motion.div
                    className="card-glass p-4 md:p-6 lg:p-8 rounded-2xl glow-container hover:glow-container-hover transition-all duration-300"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {/* Header */}
                    <div className="mb-4 md:mb-6">
                      <h3 className="text-xl md:text-2xl font-bold text-[color:var(--text)] mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-[color:var(--color-primary)] font-semibold text-base md:text-lg">
                        {exp.company}
                      </p>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      {exp.description.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          className="flex items-start gap-2 md:gap-3 text-[color:var(--muted)]"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{
                            delay: index * 0.2 + 0.5 + pointIndex * 0.1,
                            duration: 0.4
                          }}
                        >
                          <span className="text-[color:var(--color-primary)] mt-1 flex-shrink-0 text-sm">▸</span>
                          <span className="text-xs md:text-sm leading-relaxed">{point}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 md:gap-2 pt-3 md:pt-4 border-t border-[color:var(--border)]">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-2 py-1 md:px-3 md:py-1 bg-[color:var(--bg-700)] text-[color:var(--color-primary)] text-xs rounded-full border border-[color:var(--border)] font-medium cursor-pointer"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{
                            delay: index * 0.2 + 0.7 + techIndex * 0.05,
                            duration: 0.3
                          }}
                          whileHover={{
                            scale: 1.1,
                            y: -2,
                            backgroundColor: "var(--color-primary)",
                            color: "white"
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}