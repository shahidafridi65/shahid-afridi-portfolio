"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Briefcase,
} from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-10% 0px -10% 0px"
  });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-14 bg-[color:var(--bg-900)] relative overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="about-bg-animation"></div>
        <div className="about-bg-pattern"></div>
      </div>

      {/* Add top padding to prevent overlap with navigation */}
      <div ref={ref} className="max-w-6xl w-full flex flex-col lg:flex-row gap-6 md:gap-8 items-start justify-center relative z-10 mt-16 md:mt-0">
        {/* Left Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/3 card-glass p-6 md:p-8 rounded-2xl glow-container flex flex-col items-center text-center"
        >
          {/* Avatar */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] p-1">
              <Image
                src="/profile_pic.jpg"
                alt="Shahid Afridi"
                width={128}
                height={128}
                className="rounded-full w-full h-full object-cover border-2 border-[color:var(--bg-800)]"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] rounded-full border-2 border-[color:var(--bg-800)] flex items-center justify-center">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-2xl md:text-3xl font-bold mb-1" style={{ fontFamily: 'var(--font-primary)' }}>
            Shahid Afridi
          </h1>
          <p className="text-[color:var(--color-primary)] font-medium mb-4 md:mb-6 text-sm md:text-md">
            Full Stack Engineer
          </p>

          {/* Contact Info */}
          <div className="space-y-3 md:space-y-4 w-full mb-4 md:mb-6">
            {/* Email Box */}
            <motion.div
              className="flex items-center gap-3 md:gap-4 p-2 md:p-3 rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] flex-shrink-0">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-xs text-[color:var(--muted)]">EMAIL</span>
                <span className="text-sm md:text-md text-[color:var(--text)] break-all">shahidafrid825@gmail.com</span>
              </div>
            </motion.div>

            {/* Location Box */}
            <motion.div
              className="flex items-center gap-3 md:gap-4 p-2 md:p-3 rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] flex-shrink-0">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs text-[color:var(--muted)]">LOCATION</span>
                <span className="text-sm md:text-md text-[color:var(--text)]">India</span>
              </div>
            </motion.div>

            {/* Status Box */}
            <motion.div
              className="flex items-center gap-3 md:gap-4 p-2 md:p-3 rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] flex-shrink-0">
                <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs text-[color:var(--muted)]">STATUS</span>
                <span className="text-sm md:text-md text-[color:var(--text)]">Open to Opportunities</span>
              </div>
            </motion.div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 md:gap-6 mt-2 md:mt-4">
            <motion.a
              href="https://github.com/shahidafridi65"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 md:p-3 rounded-full bg-[color:var(--bg-700)] hover:bg-[color:var(--color-primary)] transition-colors duration-300 group"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5 text-[color:var(--muted)] group-hover:text-white transition-colors" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/shahid--afridi/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 md:p-3 rounded-full bg-[color:var(--bg-700)] hover:bg-[color:var(--color-primary)] transition-colors duration-300 group"
            >
              <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-[color:var(--muted)] group-hover:text-white transition-colors" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-2/3 card-glass p-6 md:p-8 rounded-2xl glow-container"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[color:var(--color-primary)]" style={{ fontFamily: 'var(--font-primary)' }}>
            About Me
          </h2>

          <div className="space-y-3 md:space-y-4 text-[color:var(--muted)] leading-relaxed">
            <motion.p
              className="text-base md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              <strong className="text-[color:var(--text)]">Innovative Full Stack Engineer</strong> with 1+ years of experience developing scalable web applications using <strong>React, Next.js, Python, and Node.js</strong>, specializing in end-to-end solution architecture.
            </motion.p>

            <motion.p
              className="text-base md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              Expertise in <strong>UI/UX development</strong> with proficiency in converting Figma designs to responsive interfaces using <strong>Tailwind CSS, Bootstrap, Material Design</strong> while adhering to web accessibility standards.
            </motion.p>

            <motion.p
              className="text-base md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
            >
              Strong backend integration skills with <strong>RESTful APIs, GraphQL, WebSockets</strong> and database management using <strong>PostgreSQL, MongoDB, Firebase</strong>.
            </motion.p>

            <motion.p
              className="text-base md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
            >
              <strong>AI/ML Specialist</strong> with hands-on experience in <strong>Large Language Models (LLM), NLP, predictive analytics</strong> using Python, TensorFlow, scikit-learn, HuggingFace and data processing with Pandas, NumPy.
            </motion.p>

            <motion.div
              className="pt-3 md:pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href="/Shahid_FullStack_Engineer.pdf"
                download="Shahid_Afridi_FullStack_Engineer.pdf"
                className="btn-neon text-sm md:text-base inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}