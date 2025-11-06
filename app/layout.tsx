import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Shahid Afridi - Full Stack Engineer & AI/ML Specialist",
    template: "%s | Shahid Afridi"
  },
  description: "Full Stack Engineer specializing in React, Next.js, Python, and AI/ML. Building scalable web applications and enterprise solutions with modern technologies.",
  keywords: ["Shahid Afridi", "Full Stack Engineer", "React Developer", "Next.js", "Python", "AI/ML", "Web Developer", "Portfolio", "JavaScript", "TypeScript", "Node.js"],
  authors: [{ name: "Shahid Afridi" }],
  creator: "Shahid Afridi",
  publisher: "Shahid Afridi",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shahidafridi.vercel.app",
    siteName: "Shahid Afridi Portfolio",
    title: "Shahid Afridi - Full Stack Engineer & AI/ML Specialist",
    description: "Full Stack Engineer specializing in React, Next.js, Python, and AI/ML. Building scalable web applications and enterprise solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shahid Afridi - Full Stack Engineer & AI/ML Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahid Afridi - Full Stack Engineer & AI/ML Specialist",
    description: "Full Stack Engineer specializing in React, Next.js, Python, and AI/ML.",
    creator: "@shahidafridi",
    images: ["/og-image.png"],
  },
  verification: {
    google: "0y9BnL5MJ5zI3MpTTe9oXe6L4ePQGhq4VvOQxeQ7CVE",
  },
  metadataBase: new URL('https://shahidafridi.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://shahidafridi.vercel.app" />
        <meta name="theme-color" content="#0066cc" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}