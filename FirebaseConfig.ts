import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAX9qgawJ8cpF4TEL0pLV4pBwnWcjtU3Eo",
  authDomain: "photonest-2a9db.firebaseapp.com",
  projectId: "photonest-2a9db",
  storageBucket: "photonest-2a9db.appspot.com",
  messagingSenderId: "677266146630",
  appId: "1:677266146630:web:fda644b12e7b957b9a5147",
};

const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(FIREBASE_APP);

export { FIREBASE_AUTH };
