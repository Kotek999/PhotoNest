import textData from "../../../../textData.json";
import reduxKeys from "../../../../reduxKeys.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  createUserWithEmailAndPassword as createUserWithEmailAndPasswordFirebase,
  UserCredential,
} from "firebase/auth";
import { auth } from "../../../../FirebaseConfig";
import { signUp, signUpFailure } from "./action";
import { loginSuccess } from "../logIn/action";
import { SCREEN } from "../../../../routes";
import { SignUpAction } from "../../../types";
import { errorCodes } from "../../../components/Data/ErrorCodes";
import { getHashedMethod } from "../../../helpers/functions/getHashedMethod";
import { ref, set } from "firebase/database";
import { db } from "../../../../FirebaseConfig";

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

            const encryptedPassword = getHashedMethod(password).encrypt;

            const credentials = {
              type: "EmailAndPassword",
              email: email,
              password: encryptedPassword,
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

            const setUserData = set(
              ref(
                db,
                textData.value.firebase.usersPath + userCredential.user.uid
              ),
              {
                id: userCredential.user.uid,
                role: "user",
                nickname: nick,
                email: email,
                password: encryptedPassword,
                avatar: {
                  directPath: "",
                },
              }
            );

            yield setUserData;

            yield put(loginSuccess(userCredential.user));
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
    yield put(signUpFailure(error.message));
  }
}

export function* signUpAuth() {
  yield takeLatest(signUp, onSignUpUser);
}

export function* signUpSaga() {
  yield all([signUpAuth()]);
}
