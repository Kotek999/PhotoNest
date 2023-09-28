import reduxKeys from "../../../../reduxKeys.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { call, put, takeLatest, all } from "redux-saga/effects";
import { signOut, signOutSuccess, signOutFailure } from "./action";
import { SCREEN } from "../../../../routes";
import { RedirectAction } from "../../../types";
import { auth } from "../../../../FirebaseConfig";

function* signOutUser(action: RedirectAction) {
  try {
    yield call(AsyncStorage.removeItem, reduxKeys.auth.userData);
    yield call(AsyncStorage.removeItem, reduxKeys.auth.userCredentials);
    auth.signOut();
    yield put(signOutSuccess());

    yield call(action.payload.redirect, SCREEN.Welcome);
  } catch (error: any) {
    console.error("Saga SIGNOUT error:", error);
    yield put(signOutFailure(error.message));
  }
}

export function* signOutAuth() {
  yield takeLatest(signOut, signOutUser);
}

export function* signOutSaga() {
  yield all([signOutAuth()]);
}
