import textData from "../../../../textData.json";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, SignUpAction } from "../../../types";
import { User } from "firebase/auth";

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const signUpSlice = createSlice({
  name: textData.value.auth,
  initialState,
  reducers: {
    signUp: (state, action: SignUpAction) => {
      state.loading = true;
      const { nick, email, password, redirect } = action.payload;
    },
    signUpSuccess: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    signUpFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { signUp, signUpSuccess, signUpFailure, clearError } =
  signUpSlice.actions;

export default signUpSlice.reducer;
