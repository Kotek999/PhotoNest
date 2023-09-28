import React from "react";
import { StatusBar } from "expo-status-bar";
import { JSX, ChildProps as ScreenProps } from "../../../types";

export const Screen = (props: ScreenProps): JSX => {
  return (
    <>
      {props.children}
      <StatusBar style="light" />
    </>
  );
};
