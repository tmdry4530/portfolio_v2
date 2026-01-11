"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { ContactInfo } from "@/lib/data";

interface IntroSectionProps {
  contactInfo: ContactInfo;
}

export default function IntroSection({ contactInfo }: IntroSectionProps) {
  const [typewriterText, setTypewriterText] = useState("");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    if (mediaQuery.matches) {
      // Show full text immediately if reduced motion is preferred
      setTypewriterText(contactInfo.title);
    }

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) {
        setTypewriterText(contactInfo.title);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [contactInfo.title]);

  // Typewriter effect
  useEffect(() => {
    if (prefersReducedMotion) return;

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
  }, [contactInfo.title, prefersReducedMotion]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToNext = () => {
    document.getElementById("tech-stack")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="intro"
      className="min-h-screen flex flex-col items-center justify-center relative z-10"
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-accent mb-4 text-lg animate-fade-in">안녕하세요, 저는</p>

        {/* Gradient text name */}
        <h1 className="text-fluid-5xl font-bold mb-4 tracking-wide animate-slide-up">
          <span className="bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent bg-[length:200%_auto] hover:animate-pulse">
            {contactInfo.name}
          </span>
        </h1>

        <div className="text-fluid-2xl text-secondary-foreground mb-8 min-h-[3rem] animate-fade-in">
          <span className={`border-r-2 border-accent ${prefersReducedMotion ? "" : "animate-pulse"}`}>
            {typewriterText}
          </span>
        </div>

        <p className="text-fluid-base text-secondary-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          {contactInfo.description}
        </p>

        <button
          onClick={scrollToProjects}
          aria-label="프로젝트 섹션으로 이동"
          className="group relative border-2 border-accent text-accent px-8 py-4 font-mono overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {/* Hover background effect */}
          <span className="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
          <span className="relative z-10 group-hover:text-background transition-colors duration-300">
            프로젝트 보기
          </span>
        </button>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce-slow"
        onClick={scrollToNext}
        role="button"
        aria-label="아래로 스크롤"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && scrollToNext()}
      >
        <div className="flex flex-col items-center gap-2 text-secondary-foreground hover:text-accent transition-colors">
          <span className="text-xs font-mono tracking-wider">SCROLL</span>
          <ChevronDown size={20} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
