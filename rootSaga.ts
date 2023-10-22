import { all } from "redux-saga/effects";
import { authToken } from "./src/redux/auth/authToken/saga";
import { loginAuth } from "./src/redux/auth/logIn/saga";
import { signUpAuth } from "./src/redux/auth/signUp/saga";
import { signOutAuth } from "./src/redux/auth/signOut/saga";
import { savePhotoSaga } from "./src/redux/savePhotos/saga";

export function* rootSaga() {
  yield all([
    authToken(),
    loginAuth(),
    signUpAuth(),
    signOutAuth(),
    savePhotoSaga(),
  ]);
}
