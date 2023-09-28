import reduxKeys from "../../../reduxKeys.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserData } from "../../types";

const CREDENTIAL_KEY = reduxKeys.auth.userCredentials;

export const getUserCredentials = async () => {
  try {
    const dataFromLocalStorage: string | null = await AsyncStorage.getItem(
      CREDENTIAL_KEY
    );

    if (dataFromLocalStorage !== null) {
      const credential: UserData = JSON.parse(dataFromLocalStorage);

      return credential;
    }
    // console.error("No data found in AsyncStorage or no accessToken available.");
  } catch (error) {
    throw error;
  }
};
