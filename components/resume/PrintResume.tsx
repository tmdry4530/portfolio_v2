import type { ResumeContent } from "./types";
import { PrintExperienceSection } from "./PrintExperienceSection";
import { PrintProjectsSection } from "./PrintProjectsSection";
import { PrintResumeHeader } from "./PrintResumeHeader";
import { PrintSkillsSection } from "./PrintSkillsSection";
import { PrintSummarySection } from "./PrintSummarySection";

interface PrintResumeProps {
  content: ResumeContent;
  summaryParagraphs: string[];
}

export function PrintResume({
  content,
  summaryParagraphs,
}: PrintResumeProps) {
  return (
    <div className="hidden print:block">
      <div className="mx-auto max-w-[210mm] bg-white px-[2mm] py-0 text-[#111827]">
        <PrintResumeHeader
          contactInfo={content.contactInfo}
          socialLinks={content.socialLinks}
        />
        <PrintSummarySection paragraphs={summaryParagraphs} />
        <PrintProjectsSection projects={content.featuredProjects} />
        <PrintExperienceSection experience={content.experience} />
        <PrintSkillsSection techStack={content.techStack} />
      </div>
    </div>
  );
}
