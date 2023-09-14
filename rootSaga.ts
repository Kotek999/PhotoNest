import { all } from "redux-saga/effects";
import { loginAuth } from "./src/redux/auth/logIn/saga";
import { signUpAuth } from "./src/redux/auth/signUp/saga";
import { signOutAuth } from "./src/redux/auth/signOut/saga";

export function* rootSaga() {
  yield all([loginAuth(), signUpAuth(), signOutAuth()]);
}
