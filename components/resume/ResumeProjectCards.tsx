import { FolderOpen } from "lucide-react";
import type { Project } from "@/lib/data";
import { ScreenSectionHeading } from "./ScreenSectionHeading";

interface ResumeProjectCardsProps {
  projects: Project[];
}

export function ResumeProjectCards({ projects }: ResumeProjectCardsProps) {
  return (
    <section className="space-y-4">
      <ScreenSectionHeading icon={FolderOpen} title="Selected Projects" />

      <div className="space-y-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-white/10 bg-background/40 p-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  {project.category && (
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs text-accent">
                      {project.category}
                    </span>
                  )}
                </div>
                {project.role && (
                  <p className="mt-1 text-sm text-secondary-foreground">
                    {project.role}
                  </p>
                )}
              </div>
              {project.year && (
                <p className="text-sm font-mono text-muted-foreground">
                  {project.year}
                </p>
              )}
            </div>

            <p className="mt-4 text-sm leading-6 text-secondary-foreground">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-secondary/70 px-3 py-1 text-xs text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
