import AsyncStorage from "@react-native-async-storage/async-storage";
import { call, put, takeLatest, all } from "redux-saga/effects";
import { signOutRequest, signOutSuccess, signOutFailure } from "./action";
import { SCREEN } from "../../../../routes";
import { RedirectAction } from "../../../types";

function* signOutUser(action: RedirectAction) {
  console.log("Saga SIGNOUT started:");
  try {
    yield call(AsyncStorage.removeItem, "authUserData");

    yield put(signOutSuccess());

    
    yield call(action.payload.redirect, SCREEN.Welcome);
  } catch (error: any) {
    console.error("Saga SIGNOUT error:", error);
    yield put(signOutFailure(error.message));
  }
  console.log("Saga SIGNOUT finished:");
}

export function* signOutAuth() {
  yield takeLatest(signOutRequest, signOutUser);
}

export function* signOutSaga() {
  yield all([signOutAuth()]);
}
