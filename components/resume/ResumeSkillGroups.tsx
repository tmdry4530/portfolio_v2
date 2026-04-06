import { Wrench } from "lucide-react";
import type { TechStackCategory } from "@/lib/data";
import { Sparkles } from "lucide-react";
import { skillCategoryLabels } from "./constants";
import { ScreenSectionHeading } from "./ScreenSectionHeading";

interface ResumeSkillGroupsProps {
  techStack: TechStackCategory;
}

const quickSummaryItems = [
  "Next.js, React, TypeScript 중심의 프론트엔드 개발 경험",
  "필요 시 백엔드, 인증, 데이터 계층까지 직접 연결하는 풀스택 대응",
  "Web3, Solidity, 스마트 컨트랙트 기반 프로젝트 구현 경험",
  "해커톤 및 개인 프로젝트를 빠르게 제품 형태로 완성하는 실행력",
];

export function ResumeSkillGroups({ techStack }: ResumeSkillGroupsProps) {
  return (
    <aside className="space-y-6">
      <section className="rounded-2xl border border-white/10 bg-background/40 p-5">
        <ScreenSectionHeading icon={Wrench} title="Skills" />
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
        <ScreenSectionHeading icon={Sparkles} title="Quick Summary" />
        <ul className="mt-4 space-y-3 text-sm leading-6 text-secondary-foreground">
          {quickSummaryItems.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
