import { techStack as baseTechStack, type TechStackCategory } from "@/lib/data";

export const pickTechStack = (categories: string[]): TechStackCategory =>
  categories.reduce<TechStackCategory>((acc, category) => {
    const techs = baseTechStack[category];

    if (techs) {
      acc[category] = techs;
    }

    return acc;
  }, {});
