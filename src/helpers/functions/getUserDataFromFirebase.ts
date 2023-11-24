import { UserDataFirebase } from "../../types";

export const getUserDataFromFirebase = (userDataFirebase: UserDataFirebase) => {
  const USER_DATA_FIREBASE: UserDataFirebase = userDataFirebase && {
    email: userDataFirebase.email,
    id: userDataFirebase.id,
    nickname: userDataFirebase.nickname,
    role: userDataFirebase.role,
  };
  return USER_DATA_FIREBASE;
};
