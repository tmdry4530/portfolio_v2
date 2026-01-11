import Image from "next/image";
import { Project } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";

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
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center group`}
            >
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} 프로젝트 스크린샷 - ${project.description.slice(0, 50)}...`}
                    width={640}
                    height={360}
                    className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                    loading={index < 2 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAYH/8QAHxAAAQQCAgMAAAAAAAAAAAAAAQACAwQFERIhBjFB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEAAAAGpYIKqxif/2Q=="
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/40 via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="bg-secondary/70 backdrop-blur-md p-6 border border-accent/10 shadow-xl rounded-lg transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-glow-sm">
                  <p className="text-secondary-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm border border-accent/30 rounded transition-all duration-300 hover:bg-accent/20 hover:scale-105 hover:shadow-glow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-foreground hover:text-accent hover:scale-110 hover:drop-shadow-glow transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm p-1"
                    aria-label={`${project.title} GitHub 저장소 보기`}
                  >
                    <Github size={24} />
                  </a>
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-foreground hover:text-accent hover:scale-110 hover:drop-shadow-glow transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm p-1"
                      aria-label={`${project.title} 라이브 데모 보기`}
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
