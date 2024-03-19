import { ScoreBoardUserData } from "../../types";

export const checkUserName = (word: string, data: ScoreBoardUserData) => {
  const userName = data.isUserLogged ? word : data.userName;
  return userName;
};
