import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User, AuthAction as LoginAction } from "../../../types";

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "auth",
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
  },
});

export const { login, loginSuccess, loginFailure } = loginSlice.actions;

export default loginSlice.reducer;
