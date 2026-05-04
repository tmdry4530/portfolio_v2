import type { Metadata } from "next";
import type { ContactInfo, Experience, Project } from "@/lib/data";
import {
  contactInfo as baseContactInfo,
  experience as baseExperience,
  projects as baseProjects,
  socialLinks,
} from "@/lib/data";
import type { PortfolioContent } from "@/lib/portfolio/types";
import { isWeb3HackathonExperience, pickTechStack } from "@/lib/portfolio/utils";

const web3Description =
  "x402 결제 인덱싱, 온체인 데이터 분석, AI 에이전트 시스템, 스마트 컨트랙트 연동을 중심으로 정리한 Chamdom의 Web3 풀스택 포트폴리오입니다.";

const web3ContactInfo: ContactInfo = {
  ...baseContactInfo,
  title: "Web3 Full Stack Developer",
  description:
    "Web3를 단순한 UI 연동이 아니라 결제 프로토콜, 온체인 데이터 인덱싱, AI 에이전트 워크플로우, 실시간 백엔드 시스템까지 제품으로 연결하는 풀스택 개발자입니다. Base, x402, viem, Solidity와 TypeScript 기반 서버·프론트엔드를 함께 다룹니다.",
};

const web3Experience: Experience[] = [
  ...baseExperience.filter(isWeb3HackathonExperience),
  ...baseExperience.filter((item) => !isWeb3HackathonExperience(item)),
];

const web3ProjectTitles = [
  "x402-indexer",
  "agent-poker",
  "AgentAlpha",
  "Proof of Prompt",
  "Whale-move",
];

const web3Categories = new Set([
  "Web3 Infrastructure",
  "Web3 AI Prototype",
  "Blockchain Project",
  "Data Analytics",
  "AI Agent System",
]);

const pickWeb3Projects = (): Project[] => {
  const prioritized = web3ProjectTitles
    .map((title) => baseProjects.find((project) => project.title === title))
    .filter((project): project is Project => Boolean(project));

  const prioritizedTitles = new Set(prioritized.map((project) => project.title));
  const additionalWeb3Projects = baseProjects.filter(
    (project) =>
      !prioritizedTitles.has(project.title) &&
      Boolean(project.category && web3Categories.has(project.category)),
  );

  return [...prioritized, ...additionalWeb3Projects];
};

export const web3Metadata: Metadata = {
  title: "Chamdom Portfolio | Web3 Full Stack Developer",
  description: web3Description,
  alternates: {
    canonical: "/web3",
  },
  openGraph: {
    title: "Chamdom Portfolio | Web3 Full Stack Developer",
    description: web3Description,
    url: "/web3",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chamdom Portfolio | Web3 Full Stack Developer",
    description: web3Description,
  },
};

export const web3Portfolio: PortfolioContent = {
  track: "web3",
  contactInfo: web3ContactInfo,
  techStack: pickTechStack(["blockchain", "backend", "frontend", "tools", "ai"]),
  projects: pickWeb3Projects(),
  experience: web3Experience,
  socialLinks,
};
