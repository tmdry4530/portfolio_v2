import Image from "next/image";
import { Project } from "@/lib/data";
import { Github, ExternalLink, Folder } from "lucide-react";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-fluid-3xl font-bold mb-16 tracking-wide text-right">
          <span className="text-accent">03.</span> 프로젝트
        </h2>
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center group`}
            >
              {/* Image Container */}
              <div className="lg:w-3/5 w-full">
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-secondary/30 shadow-2xl transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-glow">
                  {/* Image wrapper with fixed aspect ratio */}
                  <div className="relative aspect-video">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} 프로젝트 스크린샷`}
                      fill
                      className="object-cover object-top transition-all duration-700 group-hover:scale-105"
                      loading={index < 2 ? "eager" : "lazy"}
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    {/* Corner accent */}
                    <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-accent/20 to-transparent" />
                  </div>
                  {/* Year badge */}
                  {project.year && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-md rounded-full text-xs font-mono text-accent border border-accent/30">
                      {project.year}
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/5 w-full space-y-5">
                {/* Project type label */}
                <div className="flex items-center gap-2 text-accent font-mono text-sm">
                  <Folder size={16} />
                  <span>Blockchain Project</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description card */}
                <div className="bg-secondary/50 backdrop-blur-xl p-6 border border-white/10 rounded-xl transition-all duration-300 group-hover:border-accent/20 group-hover:bg-secondary/70 relative overflow-hidden">
                  {/* Subtle glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />
                  <p className="text-secondary-foreground leading-relaxed relative z-10">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-accent/10 text-accent text-sm font-mono border border-accent/20 rounded-lg transition-all duration-300 hover:bg-accent hover:text-background hover:border-accent hover:shadow-glow-sm cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-secondary-foreground hover:text-accent border border-white/10 rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    aria-label={`${project.title} GitHub 저장소 보기`}
                  >
                    <Github size={18} />
                    <span className="text-sm font-mono">Code</span>
                  </a>
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-accent text-background rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                      aria-label={`${project.title} 라이브 데모 보기`}
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-mono">Live Demo</span>
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
