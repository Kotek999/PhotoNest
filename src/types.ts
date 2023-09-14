import { ReactNode } from "react";
import { ToastAndroid } from "react-native";
import { rootReducer } from "../rootReducer";
import { PayloadAction } from "@reduxjs/toolkit";

type Children = ReactNode;

export type OnPress = () => void;

export type ChildProps = {
  children: Children;
};

export type SubmitButtonProps = {
  onPress: OnPress;
  label: string;
};

export type TextInputProps = {
  value: string;
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
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

export type User = {
  email: string | null;
};

export type AuthState = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

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
