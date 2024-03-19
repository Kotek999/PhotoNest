import React from "react";
import { JSX, FilteredBoardRowContentProps } from "../../../types";
import { renderBoardWithUsers } from "../../../helpers/functions/renderBoardWithUsers";

export const UsersMoreThanZeroPoints = (
  props: FilteredBoardRowContentProps
): JSX => {
  return (
    <>
      {props.usersWithMoreThanZeroPoints &&
        renderBoardWithUsers(
          props.usersWithMoreThanZeroPoints,
          props.isContentLoaded
        )}
    </>
  );
};
