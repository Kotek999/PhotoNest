import textData from "../../../textData.json";
import { UserDataFirebase, UserDataInfo, SetState } from "../../types";
import { db } from "../../../FirebaseConfig";
import { ref, get } from "firebase/database";

export const getUserDataByUid = async (
  uid: UserDataInfo,
  setData: SetState<UserDataFirebase>,
  setIsContentLoaded: SetState<boolean>
) => {
  try {
    const userRef = ref(db, `${textData.value.firebase.usersPath}${uid}`);
    const snapshot = await get(userRef);

    if (snapshot.exists()) {
      const userDataFirebase: UserDataFirebase = snapshot.val();
      setData(userDataFirebase);
      setIsContentLoaded(true);
    } else {
      console.warn(textData.value.firebase.error.dataNotExist);
    }
  } catch (error) {
    console.error(textData.value.firebase.error.readingData, error);
  }
};
