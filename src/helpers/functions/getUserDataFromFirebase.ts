import { UserDataFirebase } from "../../types";

export const getUserDataFromFirebase = (userDataFirebase: UserDataFirebase) => {
  const USER_DATA_FIREBASE: UserDataFirebase = userDataFirebase && {
    email: userDataFirebase.email,
    id: userDataFirebase.id,
    nickname: userDataFirebase.nickname,
    role: userDataFirebase.role,
    avatar: { directPath: userDataFirebase.avatar?.directPath },
    colight: {
      given: {
        forPhoto: {
          nickname: userDataFirebase.colight.given?.forPhoto?.nickname,
          forDirectUrl: userDataFirebase.colight.given?.forPhoto?.forDirectUrl,
          value: userDataFirebase.colight.given?.forPhoto?.value,
        },
      },
      received: {
        forPhoto: {
          nickname: userDataFirebase.colight.received?.forPhoto?.nickname,
          forDirectUrl:
            userDataFirebase.colight.received?.forPhoto?.forDirectUrl,
          value: userDataFirebase.colight.received?.forPhoto?.value,
        },
      },
    },
    points: userDataFirebase.points,
  };
  return USER_DATA_FIREBASE;
};
