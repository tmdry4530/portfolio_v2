"use client";

import { useState, useEffect } from "react";
import { ContactInfo } from "@/lib/data";

interface IntroSectionProps {
  contactInfo: ContactInfo;
}

export default function IntroSection({ contactInfo }: IntroSectionProps) {
  const [typewriterText, setTypewriterText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < contactInfo.title.length) {
        setTypewriterText(contactInfo.title.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [contactInfo.title]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center relative z-10"
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-accent mb-4 text-lg">안녕하세요, 저는</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wide">
          {contactInfo.name}
        </h1>
        <div className="text-2xl md:text-4xl text-secondary-foreground mb-8 h-12">
          <span className="border-r-2 border-accent animate-pulse">
            {typewriterText}
          </span>
        </div>
        <p className="text-lg text-secondary-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          {contactInfo.description}
        </p>
        <button
          onClick={scrollToProjects}
          className="border-2 border-accent text-accent px-8 py-4 hover:bg-accent hover:text-background transition-all duration-300 font-mono"
        >
          프로젝트 보기
        </button>
      </div>
    </section>
  );
}
