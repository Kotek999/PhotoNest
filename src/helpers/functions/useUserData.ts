import { ImageAssetsData, UserDataFirebase, UserPathData } from "../../types";
import { auth } from "../../../FirebaseConfig";

export const useUserData = (
  photoData: ImageAssetsData,
  data: UserDataFirebase
) => {
  const USER_PATH_DATA: UserPathData = {
    uid: photoData.userId,
    currentUid: auth.currentUser?.uid,
    createdAt: {
      time: photoData.createdAt.time,
      date: photoData.createdAt.date,
    },
    avatarPath: data?.avatar.directPath,
    role: data?.role,
    type: photoData.type,
    forPhotoData: {
      forPhoto: {
        nickname: photoData.addedBy,
        directUrl: photoData.directUrl,
        value: 1,
      },
    },
  };
  return USER_PATH_DATA;
};
