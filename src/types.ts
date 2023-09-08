import { ReactNode } from "react";

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
  placeholder: string;
  secureTextEntry?: boolean;
};

export type ScreenNameProps = {
  title: string;
};

export type DimensionT = "window" | "screen";

export type QuestionBoxProps = {
  title: string;
  goTo: string;
  onPress: OnPress;
};

export type ColorsT = {
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
