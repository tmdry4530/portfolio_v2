import {
  contactInfo,
  experience,
  projects,
  socialLinks,
  techStack,
} from "@/lib/data";
import { buildSummaryParagraphs } from "./constants";
import type { ResumeContent } from "./types";

export const resumeContent: ResumeContent = {
  contactInfo,
  experience,
  featuredProjects: projects.filter((project) => project.featured),
  socialLinks,
  techStack,
  totalSkillCount: Object.values(techStack).reduce(
    (count, items) => count + items.length,
    0,
  ),
};

export const summaryParagraphs = buildSummaryParagraphs(contactInfo.description);
