import type { TechStackCategory } from "@/lib/data";
import { skillCategoryLabels } from "./constants";
import { PrintSection } from "./PrintSection";

interface PrintSkillsSectionProps {
  techStack: TechStackCategory;
}

export function PrintSkillsSection({ techStack }: PrintSkillsSectionProps) {
  return (
    <PrintSection title="SKILLS" bordered={false}>
      <div className="mt-4 space-y-2 text-[12px] leading-[1.7] text-[#4b5563]">
        {Object.entries(techStack).map(([category, items]) => (
          <p key={category} className="resume-print-item">
            <span className="font-semibold text-[#1f2937]">
              {skillCategoryLabels[category] ?? category}:
            </span>{" "}
            {items.map((skill) => skill.name).join(", ")}
          </p>
        ))}
      </div>
    </PrintSection>
  );
}
