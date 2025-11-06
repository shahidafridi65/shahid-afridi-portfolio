import ClientLayout from "./client-layout";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Shahid Afridi - Full Stack Engineer & AI/ML Specialist. Explore my portfolio showcasing React, Next.js, Python, and AI/ML projects.",
};

export default function Home() {
  return (
    <ClientLayout>
      <main className="min-h-screen bg-[color:var(--bg-900)]">
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
    </ClientLayout>
  );
}