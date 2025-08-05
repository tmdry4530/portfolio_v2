import { Project } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-wide text-right">
          <span className="text-accent">03.</span> 프로젝트
        </h2>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="group relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <div className="bg-secondary/80 p-6 backdrop-blur-sm">
                  <p className="text-secondary-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/20 text-accent text-sm border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-foreground hover:text-accent transition-colors"
                    title="GitHub 저장소 보기"
                  >
                    <Github size={24} />
                  </a>
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-foreground hover:text-accent transition-colors"
                      title="라이브 데모 보기"
                    >
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
