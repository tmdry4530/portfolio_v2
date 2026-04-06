import type { Metadata } from "next";
import { PrintResume } from "@/components/resume/PrintResume";
import { ScreenResume } from "@/components/resume/ScreenResume";
import {
  resumeContent,
  summaryParagraphs,
} from "@/components/resume/resume-content";

export const metadata: Metadata = {
  title: `${resumeContent.contactInfo.name} Resume | Chamdom Portfolio`,
  description: `${resumeContent.contactInfo.name}의 이력서 페이지입니다. 경력, 프로젝트, 기술 스택을 한 페이지에서 확인할 수 있습니다.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function ResumePage() {
  return (
    <main className="resume-print-root min-h-screen bg-background text-foreground print:min-h-0 print:bg-white print:text-black">
      <ScreenResume content={resumeContent} />
      <PrintResume content={resumeContent} summaryParagraphs={summaryParagraphs} />
    </main>
  );
}
