import type {
  ContactInfo,
  Experience,
  Project,
  SocialLink,
  TechStackCategory,
} from "@/lib/data";

export type PortfolioTrack = "web2" | "web3";

export interface PortfolioContent {
  track: PortfolioTrack;
  contactInfo: ContactInfo;
  techStack: TechStackCategory;
  projects: Project[];
  experience: Experience[];
  socialLinks: SocialLink[];
}
