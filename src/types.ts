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
