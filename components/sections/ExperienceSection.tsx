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
        <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-wide">
          <span className="text-accent">04.</span> 경력 및 교육
        </h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-accent/30" />
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-background rounded-full" />
                </div>
                <div className="space-y-2">
                  <p className="text-secondary-foreground text-sm">
                    {exp.period}
                  </p>
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <p className="text-accent">@{exp.company}</p>
                  <ul className="space-y-2 text-secondary-foreground">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent mr-2 mt-2">▸</span>
                        <span>{resp}</span>
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
