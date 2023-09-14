import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  createUserWithEmailAndPassword as createUserWithEmailAndPasswordFirebase,
  UserCredential,
} from "firebase/auth";
import { auth } from "../../../../FirebaseConfig";
import { signUp, signUpSuccess, signUpFailure } from "./action";
import { SCREEN } from "../../../../routes";
import { SignUpAction } from "../../../types";

function* onSignUpUser(action: SignUpAction) {
  console.log("saga SIGNUP started: ", action.payload);
  try {
    const { email, password } = action.payload;
    const userCredential: UserCredential = yield call(
      createUserWithEmailAndPasswordFirebase,
      auth,
      email,
      password
    );
    yield put(signUpSuccess(userCredential.user));
    yield call(action.payload.redirect, SCREEN.Home);
  } catch (error: any) {
    console.error("Saga SIGNUP error:", error);
    yield put(signUpFailure(error.message));
  }
  console.log("Saga SIGNUP finished:", action.type);
}

export function* signUpAuth() {
  yield takeLatest(signUp, onSignUpUser);
}

export function* signUpSaga() {
  yield all([signUpAuth()]);
}
