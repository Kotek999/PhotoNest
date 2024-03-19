import textData from "../../../textData.json";
import {
  UserDataFirebase,
  SetState,
  OptionalUserDataFirebase,
} from "../../types";
import { db } from "../../../FirebaseConfig";
import { ref, onValue } from "firebase/database";

export const getUserDataForKey = (
  allUsersData: OptionalUserDataFirebase,
  setAllUsersData: SetState<OptionalUserDataFirebase>,
  setIsBoardDataLoaded: SetState<boolean>
): Promise<UserDataFirebase[]> => {
  return new Promise((resolve, reject) => {
    try {
      const usersRef = ref(db, textData.value.firebase.usersPath);
      onValue(usersRef, (snapshot) => {
        const userData = snapshot.val();
        if (userData) {
          const allUserData: UserDataFirebase[] = [];
          for (const userId in userData) {
            if (userData.hasOwnProperty(userId)) {
              allUserData.push(userData[userId]);
            }
          }
          resolve(allUsersData as UserDataFirebase[]);
          setAllUsersData(allUserData);
          setIsBoardDataLoaded(true);
          return allUserData;
        } else {
          console.warn(textData.value.firebase.error.dataNotExist);
          resolve([]);
        }
      });
    } catch (error) {
      console.error(textData.value.firebase.error.readingData, error);
      reject(error);
    }
  });
};
