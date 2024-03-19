import React from "react";
import { UserDataFirebase } from "../../types";
import { getUserDataForScoreBoard } from "./getUserDataForScoreBoard";
import { BoardRowContent } from "../../components/Organisms/BoardRowContent";
import { createArrayOperation } from "./createArrayOperation";

export const renderBoardWithUsers = (
  boardRowData: UserDataFirebase[],
  isContentLoaded: boolean
): UserDataFirebase[] => {
  return createArrayOperation(boardRowData, "map", (user, index) => {
    const data = getUserDataForScoreBoard({ user, index });
    return (
      <BoardRowContent
        isContentLoaded={isContentLoaded}
        data={data}
        key={index}
      />
    );
  });
};
