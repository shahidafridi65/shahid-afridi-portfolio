"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "@/app/ThemeContext";

const navItems = [
  { id: "home", label: "Me" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[color:var(--bg-900)]/90 backdrop-blur-lg border-b border-[color:var(--border)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Left side - Portfolio name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <span className="text-xl font-bold text-[color:var(--text)]">
              Shahid's
            </span>
            <span className="text-xl font-bold text-[color:var(--color-primary)]">
              Portfolio
            </span>
          </motion.div>

          {/* Center - Navigation items */}
          <div className="hidden md:flex items-center gap-1 bg-[color:var(--bg-800)]/50 rounded-full px-2 py-1 border border-[color:var(--border)]">
            {navItems.map((item, index) => (
              <div key={item.id} className="relative">
                <motion.button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 z-10 ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-[color:var(--muted)] hover:text-[color:var(--text)]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>

                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] rounded-full shadow-lg shadow-[color:var(--color-glow)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Right side - Theme Toggle, GitHub and Contact */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-[color:var(--bg-700)] hover:bg-[color:var(--color-primary)] transition-colors duration-300 group"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[color:var(--muted)] group-hover:text-white transition-colors" />
              ) : (
                <Moon className="w-4 h-4 text-[color:var(--muted)] group-hover:text-white transition-colors" />
              )}
            </motion.button>

            <motion.a
              href="https://github.com/shahidafridi65"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[color:var(--bg-700)] hover:bg-[color:var(--color-primary)] transition-colors duration-300 group"
            >
              <Github className="w-4 h-4 text-[color:var(--muted)] group-hover:text-white" />
              <span className="text-sm text-[color:var(--muted)] group-hover:text-white hidden sm:block">
                GitHub
              </span>
            </motion.a>

            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-neon text-sm px-4 py-2"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </motion.button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="flex md:hidden items-center justify-center gap-1 mt-3 overflow-x-auto pb-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-2 py-1.5 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0 ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] text-white shadow-lg shadow-[color:var(--color-glow)]"
                  : "text-[color:var(--muted)] bg-[color:var(--bg-700)]"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}