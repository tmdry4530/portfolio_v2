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

const web3Description =
  "스마트 컨트랙트, 지갑 인증, 온체인 제품 개발 경험을 중심으로 정리한 Chamdom의 Web3 포트폴리오입니다.";

const web3ContactInfo: ContactInfo = {
  ...baseContactInfo,
  title: "Blockchain & Full Stack Developer",
  description:
    "블록체인을 중심으로 프론트엔드와 백엔드까지 경계를 넘나들며 제품을 완성하는 개발자입니다. 스마트 컨트랙트, 지갑 인증, 온체인 결제 흐름을 실제 프로젝트에 녹여낸 경험을 강조합니다.",
};

const web3Experience: Experience[] = [
  ...baseExperience.filter((item) => item.company === "블록체인 해커톤"),
  ...baseExperience.filter((item) => item.company !== "블록체인 해커톤"),
];

export const web3Metadata: Metadata = {
  title: "Chamdom Portfolio | Blockchain & Web3 Developer",
  description: web3Description,
  alternates: {
    canonical: "/web3",
  },
  openGraph: {
    title: "Chamdom Portfolio | Blockchain & Web3 Developer",
    description: web3Description,
    url: "/web3",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chamdom Portfolio | Blockchain & Web3 Developer",
    description: web3Description,
  },
};

export const web3Portfolio: PortfolioContent = {
  track: "web3",
  contactInfo: web3ContactInfo,
  techStack: pickTechStack(["blockchain", "frontend", "backend", "tools"]),
  projects: baseProjects.filter(
    (project) => project.category === "Blockchain Project",
  ),
  experience: web3Experience,
  socialLinks,
};
