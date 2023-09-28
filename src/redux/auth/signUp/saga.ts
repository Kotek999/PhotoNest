import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  createUserWithEmailAndPassword as createUserWithEmailAndPasswordFirebase,
  UserCredential,
} from "firebase/auth";
import { auth } from "../../../../FirebaseConfig";
import { signUp, signUpSuccess, signUpFailure } from "./action";
import { SCREEN } from "../../../../routes";
import { SignUpAction } from "../../../types";
import { errorCodes } from "../../../components/Data/ErrorCodes";

function* onSignUpUser(action: SignUpAction) {
  try {
    const { nick, email, password } = action.payload;
    const specialCharacterRegex = /[^a-zA-Z0-9]/;
    const nickCharacterCheck = specialCharacterRegex.test(nick);

    if (nick.length >= 3) {
      if (nickCharacterCheck !== true) {
        if (email !== "") {
          if (password.length >= 8) {
            const userCredential: UserCredential = yield call(
              createUserWithEmailAndPasswordFirebase,
              auth,
              email,
              password
            );
            yield put(signUpSuccess(userCredential.user));
            yield call(action.payload.redirect, SCREEN.Home);
          } else {
            yield put(signUpFailure(errorCodes.message.passwordLength));
          }
        } else {
          yield put(signUpFailure(errorCodes.message.emptyField));
        }
      } else {
        yield put(signUpFailure(errorCodes.message.nickSpecialCharacter));
      }
    } else {
      yield put(signUpFailure(errorCodes.message.nickLength));
    }
  } catch (error: any) {
    // console.error("Saga SIGNUP error:", error);
    yield put(signUpFailure(error.message));
  }
}

export function* signUpAuth() {
  yield takeLatest(signUp, onSignUpUser);
}

export function* signUpSaga() {
  yield all([signUpAuth()]);
}
