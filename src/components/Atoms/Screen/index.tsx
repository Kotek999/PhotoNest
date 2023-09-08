import React from "react";
import { StatusBar } from "expo-status-bar";
import { ChildProps as ScreenProps } from "../../../types";

export const Screen = (props: ScreenProps) => {
  return (
    <>
      {props.children}
      <StatusBar style="light" />
    </>
  );
};
