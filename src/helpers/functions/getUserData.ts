import textData from "../../../textData.json";
import { auth, db } from "../../../FirebaseConfig";
import { ref, get } from "firebase/database";
import { UserDataFirebase, SetState } from "../../types";

export const getUserData = async (
  setUserDataFirebase: SetState<UserDataFirebase>
) => {
  try {
    const userRef = ref(
      db,
      `${textData.value.firebase.usersPath}${auth.currentUser?.uid}`
    );
    const snapshot = await get(userRef);

    if (snapshot.exists()) {
      const userDataFirebase: UserDataFirebase = snapshot.val();
      setUserDataFirebase(userDataFirebase);
    } else {
      console.warn(textData.value.firebase.error.dataNotExist);
    }
  } catch (error) {
    console.error(textData.value.firebase.error.readingData, error);
  }
};
