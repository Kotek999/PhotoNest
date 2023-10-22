import { takeLatest, all, put } from "redux-saga/effects";
import { savePhoto, savePhotoSuccess, savePhotoFailure } from "./action";
import { ref, set, push } from "firebase/database";
import { PayloadAction } from "@reduxjs/toolkit";
import { auth, db } from "../../../FirebaseConfig";
import { ImageAssets } from "../../types";
import { generateUniqueValues } from "../../helpers/functions/generateUniqueValues";

function* onSavePhoto(action: PayloadAction<ImageAssets>) {
  try {
    const { assets } = action.payload;

    const setAllPhotos = set(
      ref(db, `public/photos/${generateUniqueValues(18).uniqueIdValue}`),
      assets && {
        photo: {
          directUrl: assets[0].directUrl,
          addedBy: assets[0].addedBy,
          createdAt: {
            date: assets[0].createdAt.date,
            time: assets[0].createdAt.time,
          },
          type: assets[0].type,
        },
      }
    );

    const setPhotoData = push(
      ref(db, `users/${auth.currentUser?.uid}/photo`),
      assets && {
        directUrl: assets[0].directUrl,
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
