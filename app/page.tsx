import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";


function ProjectsSection() {
  return <section id="projects" className="min-h-screen pt-20 px-6">Projects Section</section>;
}

function BlogSection() {
  return <section id="blog" className="min-h-screen pt-20 px-6">Blog Section</section>;
}

function ContactSection() {
  return <section id="contact" className="min-h-screen pt-20 px-6">Contact Section</section>;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[color:var(--bg-900)]">
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
