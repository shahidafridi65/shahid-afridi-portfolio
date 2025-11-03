"use client";

import type { Metadata } from "next";
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
        <title>Shahid Afridi - Full Stack Engineer</title>
        <meta name="description" content="Full Stack Engineer & AI/ML Specialist" />
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