import { BoardWithUsersProps } from "../../../types";
import { getUsersPoints } from "../../../helpers/functions/getUsersPoints";
import { FilteredBoardRowContent } from "../FilteredBoardRowContent";

export const BoardWithUsers = (props: BoardWithUsersProps) => {
  const usersPoints = getUsersPoints(props.allUsersData);
  return FilteredBoardRowContent({
    usersWithMoreThanZeroPoints: usersPoints.moreThanZero,
    usersWithZeroPoints: usersPoints.withZero,
    isContentLoaded: props.isContentLoaded,
  });
};
