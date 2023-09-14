import loginReducer from "./src/redux/auth/logIn/action";
import signUpReducer from "./src/redux/auth/signUp/action";
import signOutReducer from "./src/redux/auth/signOut/action";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  login: loginReducer,
  signUp: signUpReducer,
  signOut: signOutReducer,
});
