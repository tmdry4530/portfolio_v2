import type { ResumeContent } from "./types";
import { ResumeExperienceCards } from "./ResumeExperienceCards";
import { ResumeProjectCards } from "./ResumeProjectCards";
import { ResumeSkillGroups } from "./ResumeSkillGroups";
import { ScreenResumeHeader } from "./ScreenResumeHeader";

interface ScreenResumeProps {
  content: ResumeContent;
}

export function ScreenResume({ content }: ScreenResumeProps) {
  return (
    <div className="print:hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 md:px-8 lg:py-10">
        <section className="overflow-hidden rounded-[28px] border border-white/10 bg-secondary/40 shadow-2xl backdrop-blur">
          <ScreenResumeHeader
            contactInfo={content.contactInfo}
            socialLinks={content.socialLinks}
            featuredProjectCount={content.featuredProjects.length}
            experienceCount={content.experience.length}
            totalSkillCount={content.totalSkillCount}
          />

          <div className="grid gap-6 px-5 py-6 sm:px-6 md:px-8 lg:grid-cols-[1.45fr_0.95fr]">
            <div className="space-y-6">
              <ResumeExperienceCards experience={content.experience} />
              <ResumeProjectCards projects={content.featuredProjects} />
            </div>

            <ResumeSkillGroups techStack={content.techStack} />
          </div>
        </section>
      </div>
    </div>
  );
}
