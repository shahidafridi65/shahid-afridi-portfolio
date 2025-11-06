export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shahid Afridi",
    "jobTitle": "Full Stack Engineer & AI/ML Specialist",
    "url": "https://shahidafridi.vercel.app",
    "sameAs": [
      // Add your social media profiles here
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername",
      "https://twitter.com/yourusername"
    ],
    "knowsAbout": [
      "React",
      "Next.js", 
      "Python",
      "AI/ML",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Web Development"
    ],
    "description": "Full Stack Engineer specializing in React, Next.js, Python, and AI/ML. Building scalable web applications and enterprise solutions."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}