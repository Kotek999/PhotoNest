import AsyncStorage from "@react-native-async-storage/async-storage";
import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase,
  UserCredential,
} from "firebase/auth";
import { auth } from "../../../../FirebaseConfig";
import { login, loginSuccess, loginFailure } from "./action";
import { SCREEN } from "../../../../routes";
import { AuthAction as LoginActionT } from "../../../types";

function* onLoginSaga(action: LoginActionT) {
  console.log("saga started: ", action.payload);
  try {
    const { email, password } = action.payload;
    const userCredential: UserCredential = yield call(
      signInWithEmailAndPasswordFirebase,
      auth,
      email,
      password
    );

    const data = userCredential;
    const dataString = JSON.stringify(data);
    yield call(AsyncStorage.setItem, "authUserData", dataString);

    console.log("DATA: ", dataString);

    yield put(loginSuccess(userCredential.user));
    yield call(action.payload.redirect, SCREEN.Home);
  } catch (error: any) {
    console.error("Saga error:", error);
    yield put(loginFailure(error.message));
  }
  console.log("Saga finished:", action.type);
}

export function* loginAuth() {
  yield takeLatest(login, onLoginSaga);
}

export function* loginSaga() {
  yield all([loginAuth()]);
}
