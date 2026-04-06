import AnimatedBackground from "@/components/animated-background";
import ErrorBoundary from "@/components/error-boundary";
import Navigation from "@/components/navigation";
import {
  ExperienceSection,
  FooterSection,
  IntroSection,
  ProjectsSection,
  TechStackSection,
} from "@/components/sections";
import type { PortfolioContent } from "@/lib/portfolio/types";

interface PortfolioPageProps {
  content: PortfolioContent;
}

export default function PortfolioPage({ content }: PortfolioPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <ErrorBoundary>
        <AnimatedBackground />
      </ErrorBoundary>
      <Navigation track={content.track} />

      <IntroSection contactInfo={content.contactInfo} />
      <TechStackSection techStack={content.techStack} />
      <ProjectsSection projects={content.projects} />
      <ExperienceSection experience={content.experience} />
      <FooterSection
        contactInfo={content.contactInfo}
        socialLinks={content.socialLinks}
      />
    </div>
  );
}
