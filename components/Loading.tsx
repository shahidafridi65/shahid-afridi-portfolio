"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[color:var(--bg-900)] flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo/Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-[color:var(--text)]">Shahid</span>
            <span className="text-[color:var(--color-primary)]">.</span>
          </h1>
        </motion.div>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] rounded-full"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Subtle Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-primary)]/10 to-[color:var(--color-secondary)]/10 blur-xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Loading Text */}
        <motion.p
          className="mt-6 text-[color:var(--muted)] text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Crafting digital experiences...
        </motion.p>
      </div>
    </div>
  );
}