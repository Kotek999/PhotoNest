import firebaseKeys from "./firebaseKeys.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { FireBaseApp } from "./src/types";

const firebaseApp: FireBaseApp = {
  apiKey: firebaseKeys.config.apiKey,
  authDomain: firebaseKeys.config.authDomain,
  projectId: firebaseKeys.config.projectId,
  storageBucket: firebaseKeys.config.storageBucket,
  messagingSenderId: firebaseKeys.config.messagingSenderId,
  appId: firebaseKeys.config.appId,
};

const FIREBASE_APP = initializeApp(firebaseApp);
const auth = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
