import { ReactNode, Dispatch } from "react";
import { ToastAndroid } from "react-native";
import { rootReducer } from "../rootReducer";
import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

type Children = ReactNode;
export type JSX = React.JSX.Element;

type OnChangeText = (text: string) => void;

export type OnPress = () => void;

export type ChildProps = {
  children: Children;
};

export type SubmitButtonProps = {
  onPress: OnPress;
  label: string;
};

type InputProps = {
  value: string;
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText: OnChangeText | void;
};

export type TextInputProps = InputProps & {
  borderColor?: string;
};

export type TextInputWithErrorProps = InputProps & {
  authState: Selector;
  firstErrorValue?: ErrorMessage;
  secondErrorValue?: ErrorMessage;
  thirdErrorValue?: ErrorMessage;
  fourthErrorValue?: ErrorMessage;
};

export type ScreenNameProps = {
  title: string;
};

export type Dimension = "window" | "screen";

export type QuestionBoxProps = {
  title: string;
  goTo: string;
  onPress: OnPress;
};

export type Colors = {
  white: string;
  orange: string;
  grayField: string;
  blackText: string;
  darkOpacity: string;
  blank: string;
  redError: string;
};

export type ButtonsBoxProps = {
  onPressGoToLogin: OnPress;
  onPressGoToSignUp: OnPress;
};

export type RootState = ReturnType<typeof rootReducer>;

export type FireBaseApp = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

export type AuthStateValues = User | null | boolean | string;

export type AuthState = {
  user: User | null;
  loading: boolean;
  error: string | null;
  [key: string]: AuthStateValues;
};

export type Selector = (state: RootState) => AuthState;

export type RedirectAction = PayloadAction<{
  redirect: (screenName: string) => void;
}>;

export type AuthAction = RedirectAction &
  PayloadAction<{
    email: string;
    password: string;
  }>;

export type SignUpAction = AuthAction &
  PayloadAction<{
    nick: string;
  }>;

type ToastDuration = typeof ToastAndroid.SHORT | typeof ToastAndroid.LONG;

export type ShowToastProps = {
  message: string;
  duration?: ToastDuration;
};

export type ErrorMessage = string | false;

export type ErrorProps = {
  firstError?: ErrorMessage | undefined;
  secondError?: ErrorMessage | undefined;
  thirdError?: ErrorMessage | undefined;
  fourthError?: ErrorMessage | undefined;
};

export type ErrorMessageFields = {
  invalidEmail: string;
  missingEmail: string;
  emailAlreadyInUse: string;
  userNotFound: string;
  missingPassword: string;
  wrongPassword: string;
  tooManyRequests: string;
  emptyField: string;
  nickLength: string;
  nickSpecialCharacter: string;
  passwordLength: string;
};

type ErrorFields = ErrorMessageFields & {
  [key: string]: string;
};

export type ErrorCodes = {
  error: ErrorFields;
  message: ErrorFields;
  errorName?: string;
};

export type ErrorValues = {
  invalidEmail: ErrorMessage;
  missingEmail: ErrorMessage;
  emailAlreadyInUse: ErrorMessage;
  userNotFound: ErrorMessage;
  missingPassword: ErrorMessage;
  wrongPassword: ErrorMessage;
  tooManyRequests: ErrorMessage;
  emptyField: ErrorMessage;
  nickLength: ErrorMessage;
  nickSpecialCharacter: ErrorMessage;
  passwordLength: ErrorMessage;
  [key: string]: ErrorMessage;
};

export type SetValue = Dispatch<React.SetStateAction<string>>;

export type UserData = {
  user: {
    uid: string;
    email?: string;
    emailVerified: boolean;
    displayName?: string;
    phoneNumber?: string;
    photoURL?: string;
    providerData: Array<{
      providerId: string;
      uid: string;
      displayName?: string;
      email?: string;
      phoneNumber?: string;
      photoURL?: string;
    }>;
    stsTokenManager?: {
      refreshToken: string;
      accessToken: string;
      expirationTime: number;
    };
    createdAt: string;
    lastLoginAt: string;
    apiKey: string;
    appName: string;
  };
};

export type Credentials = {
  type: string;
  email: string;
  password: string;
};
