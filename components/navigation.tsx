"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navItems = [
  { id: "intro", label: "01. Intro" },
  { id: "tech-stack", label: "02. Tech Stack" },
  { id: "projects", label: "03. Projects" },
  { id: "experience", label: "04. Experience" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("intro");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Throttled scroll handler for better performance
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);

          // Update active section based on scroll position
          const sections = navItems.map((item) => document.getElementById(item.id));
          const scrollPosition = window.scrollY + 100;

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(navItems[i].id);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-2xl border-b border-white/5 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-accent font-bold text-xl font-mono drop-shadow-glow">
          {"<Chamdom />"}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              aria-label={`Navigate to ${item.label} section`}
              aria-current={activeSection === item.id ? "true" : undefined}
              className={`relative font-mono text-sm transition-all duration-300 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm px-2 py-1 ${
                activeSection === item.id
                  ? "text-accent"
                  : "text-secondary-foreground"
              }`}
            >
              {item.label}
              {/* Active indicator underline */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden p-2 text-secondary-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              aria-label="Open navigation menu"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background/95 backdrop-blur-2xl border-l border-accent/20">
            <div className="flex flex-col gap-6 mt-12">
              {navItems.map((item) => (
                <SheetClose asChild key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    aria-label={`Navigate to ${item.label} section`}
                    aria-current={activeSection === item.id ? "true" : undefined}
                    className={`relative font-mono text-lg text-left transition-all duration-300 hover:text-accent hover:translate-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm px-2 py-2 ${
                      activeSection === item.id
                        ? "text-accent"
                        : "text-secondary-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
