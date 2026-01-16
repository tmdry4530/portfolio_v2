"use client";

import Image from "next/image";
import { TechStackCategory, TechStack } from "@/lib/data";
import { useTheme } from "next-themes";
import { useMemo, useState, useEffect } from "react";

interface TechStackSectionProps {
  techStack: TechStackCategory;
}

// 개별 스킬 카드 컴포넌트
const TechCard = ({ tech }: { tech: TechStack }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const darkMode = theme === "dark";

  // Hydration mismatch 방지
  useEffect(() => {
    setMounted(true);
  }, []);

  // 아이콘 클래스 결정 (Next.js의 경우 다크모드에 따라 다름)
  const iconClass = useMemo(() => {
    if (!mounted) return tech.icon;
    if (tech.dynamicColor) {
      return darkMode ? tech.icon : `${tech.icon} colored`;
    }
    return tech.icon;
  }, [tech, darkMode, mounted]);

  return (
    <div
      className="group bg-secondary/60 backdrop-blur-xl p-6 border border-white/10 rounded-lg hover:border-accent/50 focus-within:border-accent/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 hover:scale-[1.02] focus-within:shadow-glow focus-within:-translate-y-2 relative overflow-hidden"
      tabIndex={0}
      role="article"
      aria-label={`${tech.name}: ${tech.description}`}
    >
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="text-4xl mb-4 text-center flex items-center justify-center h-[48px]">
          {tech.useCustomIcon && tech.customIcon ? (
            <Image
              src={tech.customIcon}
              alt={tech.name}
              width={tech.width || 40}
              height={tech.height || 40}
              className={`transition-all duration-300 group-hover:scale-110 ${mounted && !darkMode ? "brightness-[0.8]" : "brightness-100"}`}
            />
          ) : (
            <i
              className={`${iconClass} text-4xl transition-all duration-300 group-hover:scale-110`}
              style={{ fontSize: "2rem" }}
              aria-hidden="true"
            ></i>
          )}
        </div>
        <h3 className="text-center font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
          {tech.name}
        </h3>
      </div>

    </div>
  );
};

// 스킬 카테고리 컴포넌트
const TechCategory = ({ title, techs }: { title: string; techs: TechStack[] }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold mb-6 text-accent">{title}</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
      {techs.map((tech) => (
        <TechCard key={tech.name} tech={tech} />
      ))}
    </div>
  </div>
);

export default function TechStackSection({ techStack }: TechStackSectionProps) {
  // 카테고리 이름 포맷팅 함수
  const formatCategoryName = (category: string) =>
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <section id="tech-stack" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-fluid-3xl font-bold mb-16 tracking-wide">
          <span className="text-accent">02.</span> 기술 스택
        </h2>

        {Object.entries(techStack).map(([category, techs]) => (
          <TechCategory
            key={category}
            title={formatCategoryName(category)}
            techs={techs}
          />
        ))}
      </div>
    </section>
  );
}
