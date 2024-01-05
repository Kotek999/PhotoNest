import textData from "../../../textData.json";
import { takeLatest, all, put } from "redux-saga/effects";
import { saveAvatar, saveAvatarSuccess, saveAvatarFailure } from "./action";
import { ref, set } from "firebase/database";
import { PayloadAction } from "@reduxjs/toolkit";
import { auth, db } from "../../../FirebaseConfig";
import { AvatarAssets } from "../../types";

function* onSaveAvatar(action: PayloadAction<AvatarAssets>) {
  try {
    const { assets } = action.payload;

    const setAvatarData = set(
      ref(
        db,
        `${textData.value.firebase.usersPath}${auth.currentUser?.uid}${textData.value.firebase.avatarPath}`
      ),
      assets && {
        directPath: assets[0].directPath,
      }
    );

    yield setAvatarData;

    yield put(saveAvatarSuccess("Avatar Saved"));
  } catch (error: any) {
    yield put(saveAvatarFailure(error.message));
  }
}

export function* saveAvatarEvent() {
  yield takeLatest(saveAvatar, onSaveAvatar);
}

export function* saveAvatarSaga() {
  yield all([saveAvatarEvent()]);
}
