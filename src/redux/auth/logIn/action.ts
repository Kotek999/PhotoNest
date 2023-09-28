import textData from "../../../../textData.json";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, AuthAction as LoginAction } from "../../../types";
import { User } from "firebase/auth";

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: textData.value.auth,
  initialState,
  reducers: {
    login: (state, action: LoginAction) => {
      state.loading = true;
      const { email, password, redirect } = action.payload;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { login, loginSuccess, loginFailure, clearError } =
  loginSlice.actions;

export default loginSlice.reducer;
