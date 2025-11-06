"use client";

import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Loading from "@/components/Loading";
import { useState, useEffect } from "react";
import { ThemeProvider } from "./ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="google-site-verification" content="0y9BnL5MJ5zI3MpTTe9oXe6L4ePQGhq4VvOQxeQ7CVE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://shahidafridi.vercel.app" />
        <meta name="theme-color" content="#0066cc" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <title>Shahid Afridi - Full Stack Engineer & AI/ML Specialist</title>
        <meta name="description" content="Full Stack Engineer specializing in React, Next.js, Python, and AI/ML. Building scalable web applications and enterprise solutions." />
      </head>
      <body className="font-sans theme-transition">
        <ThemeProvider>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <Navigation />
              {children}
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}