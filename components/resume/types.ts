import type {
  ContactInfo,
  Experience,
  Project,
  SocialLink,
  TechStackCategory,
} from "@/lib/data";

export interface ResumeContent {
  contactInfo: ContactInfo;
  experience: Experience[];
  featuredProjects: Project[];
  socialLinks: SocialLink[];
  techStack: TechStackCategory;
  totalSkillCount: number;
}
