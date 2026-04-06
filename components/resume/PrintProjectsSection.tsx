import type { Project } from "@/lib/data";
import { PrintSection } from "./PrintSection";
import { splitSentences } from "./utils";

interface PrintProjectsSectionProps {
  projects: Project[];
}

export function PrintProjectsSection({
  projects,
}: PrintProjectsSectionProps) {
  return (
    <PrintSection title="PROJECTS">
      <div className="mt-4 space-y-5">
        {projects.map((project) => {
          const sentences = splitSentences(project.description);
          const lead = sentences[0] ?? project.description;
          const details = sentences.slice(1);
          const meta = [project.year, project.role, project.category].filter(Boolean);

          return (
            <article key={project.title} className="resume-print-item space-y-2">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <h3 className="text-[18px] font-bold text-[#1f2937]">
                  {project.title}
                </h3>
                {meta.length > 0 && (
                  <div className="text-[11px] text-[#9ca3af]">
                    {meta.join(" | ")}
                  </div>
                )}
              </div>

              <p className="text-[12px] font-medium text-[#3b82f6]">{lead}</p>

              {details.length > 0 && (
                <ul className="space-y-1 text-[12px] leading-[1.65] text-[#4b5563]">
                  {details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span>•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              <p className="text-[12px] text-[#6b7280]">
                <span className="font-semibold">Tech:</span>{" "}
                {project.tech.join(", ")}
              </p>
            </article>
          );
        })}
      </div>
    </PrintSection>
  );
}
