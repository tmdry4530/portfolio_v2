import { Experience } from "@/lib/data";

interface ExperienceSectionProps {
  experience: Experience[];
}

export default function ExperienceSection({
  experience,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-fluid-3xl font-bold mb-16 tracking-wide">
          <span className="text-accent">04.</span> 경험 및 교육
        </h2>
        <div className="relative">
          {/* Timeline line with gradient */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-accent/30 to-accent/10" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-12 group">
                {/* Timeline dot with glow effect */}
                <div className="absolute left-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-glow transition-all duration-300 group-hover:shadow-glow-lg group-hover:scale-110">
                  <div className="w-3 h-3 bg-background rounded-full" />
                </div>

                {/* Content card with glassmorphism */}
                <div className="space-y-2 p-4 rounded-lg transition-all duration-300 group-hover:bg-secondary/30 group-hover:backdrop-blur-sm">
                  <p className="text-secondary-foreground text-sm font-mono">
                    {exp.period}
                  </p>
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">
                    {exp.position}
                  </h3>
                  <p className="text-accent font-medium">@{exp.company}</p>
                  <ul className="space-y-2 text-secondary-foreground mt-4">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start group/item">
                        <span className="text-accent mr-2 mt-1 transition-transform duration-300 group-hover/item:translate-x-1">▸</span>
                        <span className="transition-colors duration-300 group-hover/item:text-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
