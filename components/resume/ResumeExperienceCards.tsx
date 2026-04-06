import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import type { Experience } from "@/lib/data";
import { ScreenSectionHeading } from "./ScreenSectionHeading";

interface ResumeExperienceCardsProps {
  experience: Experience[];
}

export function ResumeExperienceCards({
  experience,
}: ResumeExperienceCardsProps) {
  return (
    <section className="space-y-4">
      <ScreenSectionHeading
        icon={BriefcaseBusiness}
        title="Experience & Education"
      />

      <div className="space-y-4">
        {experience.map((item) => {
          const isEducation =
            item.company.includes("대학교") || item.company.includes("아카데미");
          const EntryIcon = isEducation ? GraduationCap : BriefcaseBusiness;

          return (
            <article
              key={`${item.company}-${item.period}`}
              className="rounded-2xl border border-white/10 bg-background/40 p-5"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-accent">
                    <EntryIcon className="h-4 w-4" />
                    <span className="text-[11px] font-medium uppercase tracking-[0.2em]">
                      {isEducation ? "Education" : "Experience"}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.position}</h3>
                    <p className="text-secondary-foreground">{item.company}</p>
                  </div>
                </div>
                <p className="text-sm font-mono text-muted-foreground">
                  {item.period}
                </p>
              </div>

              <ul className="mt-4 space-y-2 text-sm leading-6 text-secondary-foreground">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex gap-2">
                    <span className="mt-1 text-accent">▸</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
