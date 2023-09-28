import { RootState } from "../../types";

const loginState = (state: RootState) => state.login;
const loginLoading = (state: RootState) => state.login.loading;
const userEmail = (state: RootState) => state.login.user?.email;
const signUpState = (state: RootState) => state.signUp;
const signUpLoading = (state: RootState) => state.signUp.loading;
const signUpErrorState = (state: RootState) => state.signUp.error;

export {
  loginState,
  userEmail,
  signUpState,
  signUpLoading,
  signUpErrorState,
  loginLoading,
};
