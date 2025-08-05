import { TechStack } from "@/lib/data";

interface TechStackSectionProps {
  techStack: TechStack[];
}

export default function TechStackSection({ techStack }: TechStackSectionProps) {
  return (
    <section id="tech-stack" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-wide">
          <span className="text-accent">02.</span> 기술 스택
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group bg-secondary p-6 border border-secondary hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 relative"
            >
              <div className="text-4xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-center font-semibold mb-2">{tech.name}</h3>
              <div className="absolute inset-0 bg-background/90 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-sm text-center text-secondary-foreground">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
