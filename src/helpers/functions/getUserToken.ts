import reduxKeys from "../../../reduxKeys.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserData } from "../../types";

const AS_KEY = reduxKeys.auth.userData;

export const getUserToken = async () => {
  try {
    const dataFromLocalStorage: string | null = await AsyncStorage.getItem(
      AS_KEY
    );

    if (dataFromLocalStorage !== null) {
      const credential: UserData = JSON.parse(dataFromLocalStorage);

      if (
        credential.user &&
        credential.user.stsTokenManager &&
        credential.user.stsTokenManager.accessToken
      ) {
        const accessToken = credential.user.stsTokenManager.accessToken;
        return accessToken;
      }
    }
    // console.error("No data found in AsyncStorage or no accessToken available.");
  } catch (error) {
    throw error;
  }
};
