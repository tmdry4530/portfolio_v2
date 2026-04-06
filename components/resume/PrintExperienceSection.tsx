import type { Experience } from "@/lib/data";
import { PrintSection } from "./PrintSection";

interface PrintExperienceSectionProps {
  experience: Experience[];
}

export function PrintExperienceSection({
  experience,
}: PrintExperienceSectionProps) {
  return (
    <PrintSection title="EXPERIENCE & EDUCATION">
      <div className="mt-4 space-y-4">
        {experience.map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className="resume-print-item space-y-1.5"
          >
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <h3 className="text-[15px] font-bold text-[#1f2937]">
                {item.position}
              </h3>
              <span className="text-[11px] text-[#9ca3af]">{item.period}</span>
            </div>
            <p className="text-[12px] font-medium text-[#3b82f6]">
              {item.company}
            </p>
            <ul className="space-y-1 text-[12px] leading-[1.65] text-[#4b5563]">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex gap-2">
                  <span>•</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PrintSection>
  );
}
