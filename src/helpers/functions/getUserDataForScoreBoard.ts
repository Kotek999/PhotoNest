import { ScoreBoardUserData, ScoreBoardUserDataProps } from "../../types";
import { auth } from "../../../FirebaseConfig";

export const getUserDataForScoreBoard = (props: ScoreBoardUserDataProps) => {
  const USER: ScoreBoardUserData = {
    position: props.index + 1,
    uid: props.user?.id,
    isUserLogged: props.user?.id === auth.currentUser?.uid,
    avatarPath: props.user?.avatar.directPath,
    userName: props.user?.nickname,
    points: props.user?.points,
  };
  return USER;
};
