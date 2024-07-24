import { ContentData } from "../../types";

export const contentChecker = (
  value: number,
  contentItem: ContentData
): string | undefined => {
  const { first, second, third } = contentItem.subSections;
  return { 1: first, 2: second, 3: third }[value];
};
