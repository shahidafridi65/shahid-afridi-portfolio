"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="min-h-screen py-16 md:py-20 px-4 sm:px-6 bg-[color:var(--bg-900)]">
      <div className="max-w-6xl mx-auto">
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
          {/* Vertical Line - Hidden on mobile, visible on md and up */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[color:var(--color-primary)] to-[color:var(--color-secondary)] transform translate-x-[-1px]"></div>

          {/* Experience Items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex flex-col md:flex-row items-start"
              >
                {/* Company Logo Circle */}
                <div className="absolute left-4 md:left-1/2 top-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] rounded-full border-4 border-[color:var(--bg-900)] transform md:translate-x-[-32px] z-10 flex items-center justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-[color:var(--bg-700)] rounded-full flex items-center justify-center text-xs font-bold text-[color:var(--color-primary)]">
                      {exp.company.charAt(0)}
                    </div>
                  </div>
                </div>

                {/* Date Badge */}
                <div className="md:absolute top-14 md:top-20 left-1/2 md:left-1/2 md:pl-16 ml-16 md:ml-0">
                  <div className="flex items-center gap-2 bg-[color:var(--bg-700)] px-3 py-1 md:px-4 md:py-2 rounded-full border border-[color:var(--border)]">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[color:var(--color-primary)]" />
                    <span className="text-xs md:text-sm text-[color:var(--muted)] whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="ml-16 md:ml-0 md:w-5/12 md:pl-16 mt-2 md:mt-0">
                  <div className="card-glass p-4 md:p-6 lg:p-8 rounded-2xl glow-container hover:glow-container-hover transition-all duration-300">
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
                        <li key={pointIndex} className="flex items-start gap-2 md:gap-3 text-[color:var(--muted)]">
                          <span className="text-[color:var(--color-primary)] mt-1 flex-shrink-0 text-sm">▸</span>
                          <span className="text-xs md:text-sm leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 md:gap-2 pt-3 md:pt-4 border-t border-[color:var(--border)]">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 md:px-3 md:py-1 bg-[color:var(--bg-700)] text-[color:var(--color-primary)] text-xs rounded-full border border-[color:var(--border)] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}