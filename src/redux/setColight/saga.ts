import textData from "../../../textData.json";
import { takeLatest, all, put } from "redux-saga/effects";
import {
  setColight,
  setColightSuccess,
  setColightFailure,
  setPoints,
} from "./action";
import { push, ref, update } from "firebase/database";
import { PayloadAction } from "@reduxjs/toolkit";
import { db } from "../../../FirebaseConfig";
import { ColightAssets, PointsValue } from "../../types";

function* onSetColight(action: PayloadAction<ColightAssets>) {
  try {
    const { colight, currentUserId, userId } = action.payload;
    const setGivenColight = push(
      ref(
        db,
        `${textData.value.firebase.usersPath}${currentUserId}${textData.value.firebase.colightPathRef}${textData.value.firebase.field.given}`
      ),
      colight && {
        forPhoto: {
          nickname: colight.given.forPhoto.nickname,
          directUrl: colight.given.forPhoto.directUrl,
          value: colight.given.forPhoto.value,
        },
      }
    );
    const setReceivedColight = push(
      ref(
        db,
        `${textData.value.firebase.usersPath}${userId}${textData.value.firebase.colightPathRef}${textData.value.firebase.field.received}`
      ),
      colight && {
        forPhoto: {
          nickname: colight.received.forPhoto.nickname,
          directUrl: colight.received.forPhoto.directUrl,
          value: colight.received.forPhoto.value,
        },
      }
    );
    yield setGivenColight;
    yield setReceivedColight;
    yield put(setColightSuccess(1));
  } catch (error: any) {
    yield put(setColightFailure(error.message));
  }
}

function* onSetPoints(action: PayloadAction<PointsValue>) {
  try {
    const { points, userId } = action.payload;

    const setPoints = update(
      ref(db, `${textData.value.firebase.usersPath}${userId}`),
      {
        points: points,
      }
    );
    yield setPoints;
    yield put(setColightSuccess(1));
  } catch (error: any) {
    yield put(setColightFailure(error.message));
  }
}

export function* setColightEvent() {
  yield takeLatest(setColight, onSetColight);
}

export function* setPointsEvent() {
  yield takeLatest(setPoints, onSetPoints);
}

export function* setColightSaga() {
  yield all([setColightEvent(), setPointsEvent()]);
}
