import type { ContactInfo, SocialLink } from "@/lib/data";
import { ResumeContactCards } from "./ResumeContactCards";
import { ResumeStatGrid } from "./ResumeStatGrid";

interface ScreenResumeHeaderProps {
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
  featuredProjectCount: number;
  experienceCount: number;
  totalSkillCount: number;
}

export function ScreenResumeHeader({
  contactInfo,
  socialLinks,
  featuredProjectCount,
  experienceCount,
  totalSkillCount,
}: ScreenResumeHeaderProps) {
  return (
    <div className="border-b border-white/10 bg-gradient-to-r from-accent/10 via-transparent to-accent/5 px-5 py-6 sm:px-6 md:px-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
              Resume
            </p>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                {contactInfo.name}
              </h1>
              <p className="text-lg text-accent md:text-2xl">
                {contactInfo.title}
              </p>
            </div>
          </div>

          <p className="max-w-3xl text-sm leading-7 text-secondary-foreground md:text-base">
            {contactInfo.description}
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              Frontend First
            </span>
            <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              Full Stack Capable
            </span>
            <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              Web3 Builder
            </span>
          </div>
        </div>

        <ResumeContactCards contactInfo={contactInfo} socialLinks={socialLinks} />
      </div>

      <ResumeStatGrid
        featuredProjectCount={featuredProjectCount}
        experienceCount={experienceCount}
        totalSkillCount={totalSkillCount}
      />
    </div>
  );
}
