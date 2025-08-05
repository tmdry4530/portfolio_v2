"use client";

import Navigation from "@/components/navigation";
import AnimatedBackground from "@/components/animated-background";
import {
  IntroSection,
  TechStackSection,
  ProjectsSection,
  ExperienceSection,
  FooterSection,
} from "@/components/sections";
import {
  techStack,
  projects,
  experience,
  socialLinks,
  contactInfo,
} from "@/lib/data";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <AnimatedBackground />
      <Navigation />

      <IntroSection contactInfo={contactInfo} />
      <TechStackSection techStack={techStack} />
      <ProjectsSection projects={projects} />
      <ExperienceSection experience={experience} />
      <FooterSection contactInfo={contactInfo} socialLinks={socialLinks} />
    </div>
  );
}
