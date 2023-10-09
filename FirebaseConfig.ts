import firebaseKeys from "./firebaseKeys.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { FireBaseApp } from "./src/types";

const firebaseApp: FireBaseApp = {
  apiKey: firebaseKeys.config.apiKey,
  authDomain: firebaseKeys.config.authDomain,
  databaseURL: firebaseKeys.config.databaseURL,
  projectId: firebaseKeys.config.projectId,
  storageBucket: firebaseKeys.config.storageBucket,
  messagingSenderId: firebaseKeys.config.messagingSenderId,
  appId: firebaseKeys.config.appId,
};

const FIREBASE_APP = initializeApp(firebaseApp);
const auth = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getDatabase();

export { auth, db };
