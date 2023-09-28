import reduxKeys from "../../../../reduxKeys.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase,
  UserCredential,
} from "firebase/auth";
import { auth } from "../../../../FirebaseConfig";
import { login, loginSuccess, loginFailure } from "./action";
import { SCREEN } from "../../../../routes";
import { AuthAction as LoginAction } from "../../../types";

function* onLoginSaga(action: LoginAction) {
  try {
    const { email, password } = action.payload;
    const userCredential: UserCredential = yield call(
      signInWithEmailAndPasswordFirebase,
      auth,
      email,
      password
    );

    const credentials = {
      type: "EmailAndPassword",
      email: email,
      password: password,
    };

    const data = userCredential;
    const authData = JSON.stringify(data);
    const credentialData = JSON.stringify(credentials);

    yield call(AsyncStorage.setItem, reduxKeys.auth.userData, authData);
    yield call(
      AsyncStorage.setItem,
      reduxKeys.auth.userCredentials,
      credentialData
    );

    yield put(loginSuccess(userCredential.user));
    yield call(action.payload.redirect, SCREEN.Home);
  } catch (error: any) {
    // console.error("Saga error:", error);
    yield put(loginFailure(error.message));
  }
}

export function* loginAuth() {
  yield takeLatest(login, onLoginSaga);
}

export function* loginSaga() {
  yield all([loginAuth()]);
}
