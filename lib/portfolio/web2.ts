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

const mainDescription =
  "실시간 웹 앱, Web3 데이터 인프라, AI 에이전트 시스템을 TypeScript와 React/Next.js, Node.js/NestJS, PostgreSQL, WebSocket, 온체인 연동으로 구현하는 Chamdom의 풀스택 포트폴리오입니다.";

const mainContactInfo: ContactInfo = {
  ...baseContactInfo,
  title: "Full Stack Developer | Web3-capable",
  description:
    "TypeScript와 React/Next.js를 중심으로 제품 UI부터 백엔드 API, 데이터 파이프라인, 실시간 협업, Web3 온체인 연동까지 끝까지 연결해 만드는 풀스택 개발자입니다. 사용자에게 바로 쓰이는 서비스와 AI 에이전트·Web3 인프라를 함께 다룹니다.",
};

const mainExperience: Experience[] = [
  ...baseExperience.filter((item) => !isWeb3HackathonExperience(item)),
  ...baseExperience.filter(isWeb3HackathonExperience),
];

const mainProjectTitles = [
  "SyncSpace",
  "x402-indexer",
  "agent-poker",
  "Job Application Tracker",
  "Whale-move",
];

const pickProjectsByTitle = (titles: string[]): Project[] =>
  titles
    .map((title) => baseProjects.find((project) => project.title === title))
    .filter((project): project is Project => Boolean(project));

export const web2Metadata: Metadata = {
  title: "Chamdom Portfolio | Full Stack & Web3-capable Developer",
  description: mainDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chamdom Portfolio | Full Stack & Web3-capable Developer",
    description: mainDescription,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chamdom Portfolio | Full Stack & Web3-capable Developer",
    description: mainDescription,
  },
};

export const web2Portfolio: PortfolioContent = {
  track: "web2",
  contactInfo: mainContactInfo,
  techStack: pickTechStack(["frontend", "backend", "blockchain", "tools", "ai"]),
  projects: pickProjectsByTitle(mainProjectTitles),
  experience: mainExperience,
  socialLinks,
};
