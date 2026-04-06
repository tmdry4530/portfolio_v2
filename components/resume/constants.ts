import type { LucideIcon } from "lucide-react";
import { BookText, Github, Linkedin } from "lucide-react";

export const skillCategoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  blockchain: "Blockchain",
  tools: "Tools",
};

export const socialIconMap: Record<string, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Blog: BookText,
};

export const buildSummaryParagraphs = (description: string) => [
  description,
  "프론트엔드를 중심으로 서비스를 설계하지만, 필요 시 백엔드·인증·데이터 계층까지 직접 연결하며 끝까지 완성합니다.",
  "Web3 프로젝트와 해커톤 경험을 바탕으로 빠르게 제품을 만들고, 사용자에게 실제 가치를 주는 결과물에 집중합니다.",
];
