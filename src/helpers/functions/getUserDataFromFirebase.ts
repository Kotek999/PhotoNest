import textData from "../../../textData.json";
import { db, auth } from "../../../FirebaseConfig";
import { ref, get } from "firebase/database";
import { SetUserData, UserData } from "../../types";

export const getUserDataFromFirebase = async (
  setUserData: SetUserData,
  fieldPath: string
) => {
  try {
    const userRef = ref(
      db,
      `${textData.value.firebase.usersPath}${auth.currentUser?.uid}/${fieldPath}`
    );
    const snapshot = await get(userRef);

    if (snapshot.exists()) {
      const userData: UserData = snapshot.val();
      setUserData(userData);
    } else {
      console.warn("User data does not exist.");
    }
  } catch (error) {
    console.error("Error while retrieving user data:", error);
  }
};
