import {
  techStack as baseTechStack,
  type Experience,
  type TechStackCategory,
} from "@/lib/data";

export const pickTechStack = (categories: string[]): TechStackCategory =>
  categories.reduce<TechStackCategory>((acc, category) => {
    const techs = baseTechStack[category];

    if (techs) {
      acc[category] = techs;
    }

    return acc;
  }, {});

export const isWeb3HackathonExperience = (experience: Experience) => {
  const text = `${experience.position} ${experience.company}`;

  return (
    (text.includes("해커톤") || text.toLowerCase().includes("hackathon")) &&
    (text.includes("웹3") ||
      text.toLowerCase().includes("web3") ||
      text.includes("블록체인") ||
      text.toLowerCase().includes("base") ||
      text.toLowerCase().includes("eth"))
  );
};
