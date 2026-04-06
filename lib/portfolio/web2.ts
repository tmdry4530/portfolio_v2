import type { Metadata } from "next";
import type { ContactInfo, Experience } from "@/lib/data";
import {
  contactInfo as baseContactInfo,
  experience as baseExperience,
  projects as baseProjects,
  socialLinks,
} from "@/lib/data";
import type { PortfolioContent } from "@/lib/portfolio/types";
import { pickTechStack } from "@/lib/portfolio/utils";

const web2Description =
  "프론트엔드와 풀스택 제품 개발 경험을 중심으로 정리한 Chamdom의 Web2 포트폴리오입니다.";

const web2ContactInfo: ContactInfo = {
  ...baseContactInfo,
  title: "Frontend & Full Stack Developer",
  description:
    "사용자에게 바로 가치를 주는 제품을 빠르게 설계하고 구현하는 프론트엔드 · 풀스택 개발자입니다. Next.js와 TypeScript를 중심으로 서비스 개발, UI 구현, 자동화 경험을 쌓아왔습니다.",
};

const web2Experience: Experience[] = baseExperience.filter(
  (item) => item.company !== "블록체인 해커톤",
);

const web2ProjectTitle = "Job Application Tracker";

export const web2Metadata: Metadata = {
  title: "Chamdom Portfolio | Frontend & Full Stack Developer",
  description: web2Description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chamdom Portfolio | Frontend & Full Stack Developer",
    description: web2Description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chamdom Portfolio | Frontend & Full Stack Developer",
    description: web2Description,
  },
};

export const web2Portfolio: PortfolioContent = {
  track: "web2",
  contactInfo: web2ContactInfo,
  techStack: pickTechStack(["frontend", "backend", "tools"]),
  projects: baseProjects.filter(
    (project) =>
      project.category === "Full Stack Project" &&
      project.title === web2ProjectTitle,
  ),
  experience: web2Experience,
  socialLinks,
};
