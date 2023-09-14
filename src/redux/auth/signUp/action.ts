import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User, SignUpAction } from "../../../types";

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const signUpSlice = createSlice({
  name: "auth",
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
  },
});

export const { signUp, signUpSuccess, signUpFailure } = signUpSlice.actions;

export default signUpSlice.reducer;
