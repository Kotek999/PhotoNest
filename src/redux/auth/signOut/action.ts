import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, RedirectAction } from "../../../types";

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const signOutSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOutRequest: (state, action: RedirectAction) => {
      state.loading = true;
      const { redirect } = action.payload;
      state.user = null;
      state.error = null;
    },
    signOutSuccess: (state) => {
      state.loading = false;
      state.user = null;
      state.error = null;
    },
    signOutFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signOutRequest, signOutSuccess, signOutFailure } =
  signOutSlice.actions;

export default signOutSlice.reducer;
