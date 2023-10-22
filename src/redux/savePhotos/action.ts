import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ImageAssets } from "../../types";

const initialState = {
  photo: "",
  loading: false,
  error: null,
};

const savePhotoSlice = createSlice({
  name: "savePhoto",
  initialState,
  reducers: {
    savePhoto: (state, action: PayloadAction<ImageAssets>) => {
      state.loading = true;
      const { assets } = action.payload;
    },
    savePhotoSuccess: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.photo = action.payload;
      state.error = null;
    },
    savePhotoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { savePhoto, savePhotoSuccess, savePhotoFailure } =
  savePhotoSlice.actions;

export default savePhotoSlice.reducer;
