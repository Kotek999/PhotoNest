import textData from "../../../textData.json";
import { takeLatest, all, put } from "redux-saga/effects";
import { savePhoto, savePhotoSuccess, savePhotoFailure } from "./action";
import { ref, set, push } from "firebase/database";
import { PayloadAction } from "@reduxjs/toolkit";
import { auth, db } from "../../../FirebaseConfig";
import { ImageAssets, DateInfo } from "../../types";
import { generateUniqueValues } from "../../helpers/functions/generateUniqueValues";

function* onSavePhoto(action: PayloadAction<ImageAssets>) {
  try {
    const { assets } = action.payload;

    const dateAsset: DateInfo = {
      date: assets[0].createdAt.date,
      time: assets[0].createdAt.time,
    };

    const setAllPhotos = set(
      ref(
        db,
        `${textData.value.firebase.photoContentRef}${
          generateUniqueValues(18).uniqueIdValue
        }`
      ),
      assets && {
        photo: {
          directUrl: assets[0].directUrl,
          addedBy: assets[0].addedBy,
          createdAt: dateAsset,
          type: assets[0].type,
          userId: assets[0].userId,
        },
      }
    );

    const setPhotoData = push(
      ref(
        db,
        `${textData.value.firebase.usersPath}${auth.currentUser?.uid}${textData.value.firebase.photoPath}`
      ),
      assets && {
        directUrl: assets[0].directUrl,
        createdAt: dateAsset,
      }
    );

    yield setAllPhotos;
    yield setPhotoData;

    yield put(savePhotoSuccess("Photo Saved"));
  } catch (error: any) {
    yield put(savePhotoFailure(error.message));
  }
}

export function* savePhotoEvent() {
  yield takeLatest(savePhoto, onSavePhoto);
}

export function* savePhotoSaga() {
  yield all([savePhotoEvent()]);
}
