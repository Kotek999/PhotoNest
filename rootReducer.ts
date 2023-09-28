import tokenReducer from "./src/redux/auth/authToken/action";
import loginReducer from "./src/redux/auth/logIn/action";
import signUpReducer from "./src/redux/auth/signUp/action";
import signOutReducer from "./src/redux/auth/signOut/action";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  authToken: tokenReducer,
  login: loginReducer,
  signUp: signUpReducer,
  signOut: signOutReducer,
});
