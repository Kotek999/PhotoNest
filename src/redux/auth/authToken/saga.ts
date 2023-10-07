import { takeEvery, call, all, put } from "redux-saga/effects";
import { getAuthToken } from "./action";
import { loginSuccess } from "../logIn/action";
import { RedirectAction, Credentials } from "../../../types";
import { SCREEN } from "../../../../routes";
import {
  UserCredential,
  signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase,
} from "firebase/auth";
import { getUserToken } from "../../../helpers/functions/getUserToken";
import { getUserCredentials } from "../../../helpers/functions/getUserCredentials";
import { auth } from "../../../../FirebaseConfig";
import { getHashedMethod } from "../../../helpers/functions/getHashedMethod";

function* onAuthTokenSaga(action: RedirectAction) {
  const userCredentials: Credentials = yield call(getUserCredentials);
  const token: UserCredential = yield call(getUserToken);

  try {
    const decryptedPassword = getHashedMethod(userCredentials.password).decrypt;

    const authUserAgain: UserCredential = yield call(
      signInWithEmailAndPasswordFirebase,
      auth,
      userCredentials.email,
      decryptedPassword
    );

    if (token) {
      yield put(loginSuccess(authUserAgain.user));
      yield call(action.payload.redirect, SCREEN.Home);
    } else {
      yield call(action.payload.redirect, SCREEN.Welcome);
    }
  } catch (error) {
    // console.log("error", error);
    yield call(action.payload.redirect, SCREEN.Welcome);
  }
}

export function* authToken() {
  yield takeEvery(getAuthToken, onAuthTokenSaga);
}

export function* authTokenSaga() {
  yield all([authToken()]);
}
