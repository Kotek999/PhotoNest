import { UserPointsProps, OptionalUserDataFirebase } from "../../types";
import { filterAndSortBoardUserData } from "./filterAndSortBoardUserData";

export const getUsersPoints = (
  userData: OptionalUserDataFirebase
): UserPointsProps => {
  const moreThanZero: OptionalUserDataFirebase = filterAndSortBoardUserData(
    userData,
    (points) => points > 0
  );
  const withZero: OptionalUserDataFirebase = filterAndSortBoardUserData(
    userData,
    (points) => points === 0
  );

  return { moreThanZero, withZero };
};
