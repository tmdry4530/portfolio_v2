import { TechStackCategory } from "@/lib/data";
import { useTheme } from "next-themes";
import { useMemo } from "react";

interface TechStackSectionProps {
  techStack: TechStackCategory;
}

// 개별 스킬 카드 컴포넌트
const TechCard = ({ tech }: { tech: any }) => {
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  // 아이콘 클래스 결정 (Next.js의 경우 다크모드에 따라 다름)
  const iconClass = useMemo(() => {
    if (tech.dynamicColor) {
      return darkMode ? tech.icon : `${tech.icon} colored`;
    }
    return tech.icon;
  }, [tech, darkMode]);

  return (
    <div className="group bg-secondary p-6 border border-secondary hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 relative">
      <div className="text-4xl mb-4 text-center flex items-center justify-center h-[48px]">
        {tech.useCustomIcon ? (
          <img
            src={tech.customIcon}
            alt={tech.name}
            width={tech.width || 40}
            height={tech.height || 40}
            style={{
              filter: darkMode ? "brightness(1)" : "brightness(0.8)",
            }}
          />
        ) : (
          <i
            className={`${iconClass} text-4xl`}
            style={{ fontSize: "2rem" }}
          ></i>
        )}
      </div>
      <h3 className="text-center font-semibold mb-2">{tech.name}</h3>
      <div className="absolute inset-0 bg-background/90 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-sm text-center text-secondary-foreground">
          {tech.description}
        </p>
      </div>
    </div>
  );
};

// 스킬 카테고리 컴포넌트
const TechCategory = ({ title, techs }: { title: string; techs: any[] }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold mb-6 text-accent">{title}</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {techs.map((tech, index) => (
        <TechCard key={index} tech={tech} />
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
        <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-wide">
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
