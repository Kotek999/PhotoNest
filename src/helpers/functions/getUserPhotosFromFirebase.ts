import textData from "../../../textData.json";
import { db } from "../../../FirebaseConfig";
import { ref, DataSnapshot, get } from "firebase/database";
import {
  OptionalString,
  SetState,
  StateBoolean,
  UserPhotosData,
} from "../../types";

export const getUserPhotosFromFirebase = async (
  setContent: SetState<UserPhotosData[]>,
  setContentLoaded: StateBoolean,
  setIsPhotosNotExist: StateBoolean,
  userUid: OptionalString
) => {
  try {
    const roomRef = ref(
      db,
      `${textData.value.firebase.usersPath}${userUid}${textData.value.firebase.photoPath}`
    );
    const roomSnapshot = await get(roomRef);

    if (roomSnapshot.exists()) {
      const roomData: DataSnapshot = roomSnapshot.val();
      const contentPromises: UserPhotosData[] = [];

      for (const key in roomData) {
        const contentRef = ref(
          db,
          `${textData.value.firebase.usersPath}${userUid}${textData.value.firebase.photoPathRef}${key}`
        );
        const contentPromise = get(contentRef);
        contentPromises.push(contentPromise as any);
      }

      const contentSnapshots = await Promise.all(contentPromises);

      const contentsArray: UserPhotosData[] = contentSnapshots
        .map((snapshot) => snapshot as unknown)
        .filter(
          (snapshot): snapshot is { exists: () => boolean; val: () => any } =>
            typeof snapshot === "object"
        )
        .filter((snapshot) => snapshot.exists())
        .map((snapshot) => snapshot.val());

      setContent(contentsArray);
    } else {
      setContent([]);
      setIsPhotosNotExist(true);
    }

    setContentLoaded(true);
  } catch (error) {
    console.error(textData.value.firebase.error.readingData, error);
    setContentLoaded(true);
  }
};
