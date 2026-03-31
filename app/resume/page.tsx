import type { Metadata } from "next";
import {
  BriefcaseBusiness,
  FolderOpen,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Sparkles,
  Twitter,
  Wrench,
} from "lucide-react";
import {
  contactInfo,
  experience,
  projects,
  socialLinks,
  techStack,
} from "@/lib/data";

export const metadata: Metadata = {
  title: `${contactInfo.name} Resume | Chamdom Portfolio`,
  description: `${contactInfo.name}의 이력서 페이지입니다. 경력, 프로젝트, 기술 스택을 한 페이지에서 확인할 수 있습니다.`,
  robots: {
    index: false,
    follow: false,
  },
};

const skillCategoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  blockchain: "Blockchain",
  tools: "Tools",
};

const socialIconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter,
};

const featuredProjects = projects.filter((project) => project.featured);
const totalSkillCount = Object.values(techStack).reduce(
  (count, items) => count + items.length,
  0,
);

const compactUrl = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const splitSentences = (text: string) =>
  text
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

const summaryParagraphs = [
  contactInfo.description,
  "프론트엔드를 중심으로 서비스를 설계하지만, 필요 시 백엔드·인증·데이터 계층까지 직접 연결하며 끝까지 완성합니다.",
  "Web3 프로젝트와 해커톤 경험을 바탕으로 빠르게 제품을 만들고, 사용자에게 실제 가치를 주는 결과물에 집중합니다.",
];

function ScreenResume() {
  return (
    <div className="print:hidden">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 md:px-8 lg:py-10">
        <section className="overflow-hidden rounded-[28px] border border-white/10 bg-secondary/40 shadow-2xl backdrop-blur">
          <div className="border-b border-white/10 bg-gradient-to-r from-accent/10 via-transparent to-accent/5 px-5 py-6 sm:px-6 md:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
                    Resume
                  </p>
                  <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                      {contactInfo.name}
                    </h1>
                    <p className="text-lg text-accent md:text-2xl">
                      {contactInfo.title}
                    </p>
                  </div>
                </div>

                <p className="max-w-3xl text-sm leading-7 text-secondary-foreground md:text-base">
                  {contactInfo.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    Frontend First
                  </span>
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    Full Stack Capable
                  </span>
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    Web3 Builder
                  </span>
                </div>
              </div>

              <div className="grid gap-3 text-sm text-secondary-foreground sm:grid-cols-2 lg:min-w-[320px] lg:grid-cols-1">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-background/50 px-4 py-3 transition-colors hover:border-accent/40 hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  <div className="min-w-0">
                    <p className="font-medium text-foreground">Email</p>
                    <p className="truncate">{contactInfo.email}</p>
                  </div>
                </a>
                {socialLinks.map((link) => {
                  const Icon = socialIconMap[link.name as keyof typeof socialIconMap];

                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-background/50 px-4 py-3 transition-colors hover:border-accent/40 hover:text-foreground"
                    >
                      {Icon ? (
                        <Icon className="h-4 w-4 shrink-0 text-accent" />
                      ) : (
                        <span className="h-4 w-4 text-center text-accent">•</span>
                      )}
                      <div className="min-w-0">
                        <p className="font-medium text-foreground">{link.name}</p>
                        <p className="truncate">{compactUrl(link.url)}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-background/45 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Featured Projects
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  {featuredProjects.length}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-background/45 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Experience Entries
                </p>
                <p className="mt-2 text-2xl font-semibold">{experience.length}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-background/45 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Skills & Tools
                </p>
                <p className="mt-2 text-2xl font-semibold">{totalSkillCount}+</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 px-5 py-6 sm:px-6 md:px-8 lg:grid-cols-[1.45fr_0.95fr]">
            <div className="space-y-6">
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <BriefcaseBusiness className="h-5 w-5 text-accent" />
                  <h2 className="text-xl font-semibold">Experience & Education</h2>
                </div>
                <div className="space-y-4">
                  {experience.map((item) => {
                    const isEducation =
                      item.company.includes("대학교") ||
                      item.company.includes("아카데미");
                    const EntryIcon = isEducation
                      ? GraduationCap
                      : BriefcaseBusiness;

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

              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <FolderOpen className="h-5 w-5 text-accent" />
                  <h2 className="text-xl font-semibold">Selected Projects</h2>
                </div>
                <div className="space-y-4">
                  {featuredProjects.map((project) => (
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
            </div>

            <aside className="space-y-6">
              <section className="rounded-2xl border border-white/10 bg-background/40 p-5">
                <div className="flex items-center gap-3">
                  <Wrench className="h-5 w-5 text-accent" />
                  <h2 className="text-xl font-semibold">Skills</h2>
                </div>
                <div className="mt-5 space-y-5">
                  {Object.entries(techStack).map(([category, items]) => (
                    <div key={category} className="space-y-2">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        {skillCategoryLabels[category] ?? category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <span
                            key={skill.name}
                            className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-white/10 bg-background/40 p-5">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <h2 className="text-xl font-semibold">Quick Summary</h2>
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-secondary-foreground">
                  <li>• Next.js, React, TypeScript 중심의 프론트엔드 개발 경험</li>
                  <li>• 필요 시 백엔드, 인증, 데이터 계층까지 직접 연결하는 풀스택 대응</li>
                  <li>• Web3, Solidity, 스마트 컨트랙트 기반 프로젝트 구현 경험</li>
                  <li>• 해커톤 및 개인 프로젝트를 빠르게 제품 형태로 완성하는 실행력</li>
                </ul>
              </section>
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
}

function PrintResume() {
  return (
    <div className="hidden print:block">
      <div className="mx-auto max-w-[210mm] bg-white px-[2mm] py-0 text-[#111827]">
        <header className="border-b border-[#e5e7eb] pb-5">
          <h1 className="text-[28px] font-bold tracking-tight text-[#111827]">
            {contactInfo.name}
          </h1>
          <p className="mt-1 text-[16px] font-semibold text-[#3b82f6]">
            {contactInfo.title}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[#4b5563]">
            <a href={`mailto:${contactInfo.email}`} className="hover:underline">
              {contactInfo.email}
            </a>
            {socialLinks.map((link, index) => (
              <div key={link.name} className="flex items-center gap-3">
                {index > 0 && <span className="text-[#9ca3af]">|</span>}
                <a href={link.url} className="text-[#3b82f6] hover:underline">
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </header>

        <section className="resume-print-section border-b border-[#e5e7eb] py-4">
          <h2 className="text-[11px] font-bold tracking-[0.14em] text-[#3b82f6]">
            SUMMARY
          </h2>
          <div className="mt-3 space-y-3 text-[12px] leading-[1.7] text-[#4b5563]">
            {summaryParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="resume-print-section border-b border-[#e5e7eb] py-4">
          <h2 className="text-[11px] font-bold tracking-[0.14em] text-[#3b82f6]">
            PROJECTS
          </h2>
          <div className="mt-4 space-y-5">
            {featuredProjects.map((project) => {
              const sentences = splitSentences(project.description);
              const lead = sentences[0] ?? project.description;
              const details = sentences.slice(1);

              return (
                <article key={project.title} className="resume-print-item space-y-2">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-[18px] font-bold text-[#1f2937]">
                      {project.title}
                    </h3>
                    <div className="text-[11px] text-[#9ca3af]">
                      {project.year && <span>{project.year}</span>}
                      {project.role && <span>{project.year ? " | " : ""}{project.role}</span>}
                      {project.category && <span>{project.year || project.role ? " | " : ""}{project.category}</span>}
                    </div>
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
                    <span className="font-semibold">Tech:</span> {project.tech.join(", ")}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="resume-print-section border-b border-[#e5e7eb] py-4">
          <h2 className="text-[11px] font-bold tracking-[0.14em] text-[#3b82f6]">
            EXPERIENCE & EDUCATION
          </h2>
          <div className="mt-4 space-y-4">
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`} className="resume-print-item space-y-1.5">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h3 className="text-[15px] font-bold text-[#1f2937]">
                    {item.position}
                  </h3>
                  <span className="text-[11px] text-[#9ca3af]">
                    {item.period}
                  </span>
                </div>
                <p className="text-[12px] font-medium text-[#3b82f6]">{item.company}</p>
                <ul className="space-y-1 text-[12px] leading-[1.65] text-[#4b5563]">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-2">
                      <span>•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-print-section py-4">
          <h2 className="text-[11px] font-bold tracking-[0.14em] text-[#3b82f6]">
            SKILLS
          </h2>
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
        </section>
      </div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <main className="resume-print-root min-h-screen bg-background text-foreground print:min-h-0 print:bg-white print:text-black">
      <ScreenResume />
      <PrintResume />
    </main>
  );
}
