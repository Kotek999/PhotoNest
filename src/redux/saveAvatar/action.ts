import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AvatarAssets } from "../../types";

const initialState = {
  avatar: "",
  loading: false,
  error: null,
};

const saveAvatarSlice = createSlice({
  name: "saveAvatar",
  initialState,
  reducers: {
    saveAvatar: (state, action: PayloadAction<AvatarAssets>) => {
      state.loading = true;
      const { assets } = action.payload;
    },
    saveAvatarSuccess: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.avatar = action.payload;
      state.error = null;
    },
    saveAvatarFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { saveAvatar, saveAvatarSuccess, saveAvatarFailure } =
  saveAvatarSlice.actions;

export default saveAvatarSlice.reducer;
