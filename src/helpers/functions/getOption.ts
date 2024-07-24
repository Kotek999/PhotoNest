import { ContentData, OnPress, SetState } from "../../types";

export const getOption = (
  title: string,
  content: ContentData[] | string,
  setSelectedTitle: SetState<string>,
  setSelectedOption: SetState<ContentData[]>,
  openOptionModal: OnPress
) => {
  setSelectedTitle(title);
  if (Array.isArray(content)) {
    setSelectedOption(content);
  }
  openOptionModal();
};
