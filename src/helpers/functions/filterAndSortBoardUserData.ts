import { OptionalUserDataFirebase } from "../../types";
import { getUserDataForScoreBoard } from "./getUserDataForScoreBoard";
import { createArrayOperation } from "./createArrayOperation";

export const filterAndSortBoardUserData = (
  userData: OptionalUserDataFirebase,
  condition: (points: number) => boolean
) => {
  return createArrayOperation(
    userData as OptionalUserDataFirebase[],
    "filter",
    (user, index) => {
      const data = getUserDataForScoreBoard({ user, index });
      return condition(data.points ?? 0);
    }
  ).sort((a, z) => (a && z && a.points < z.points ? 1 : -1));
};
