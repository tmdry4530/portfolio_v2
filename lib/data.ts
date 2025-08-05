import techStackData from "@/data/techStack.json";
import projectsData from "@/data/projects.json";
import experiencesData from "@/data/experiences.json";
import socialLinksData from "@/data/socialLinks.json";
import contactInfoData from "@/data/contactInfo.json";

// 타입 정의
export interface TechStack {
  name: string;
  icon: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
}

export interface Experience {
  period: string;
  position: string;
  company: string;
  responsibilities: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  name: string;
  title: string;
  description: string;
}

// 데이터 export
export const techStack: TechStack[] = techStackData;
export const projects: Project[] = projectsData;
export const experience: Experience[] = experiencesData;
export const socialLinks: SocialLink[] = socialLinksData;
export const contactInfo: ContactInfo = contactInfoData;
