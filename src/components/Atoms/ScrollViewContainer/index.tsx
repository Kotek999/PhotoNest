import React from "react";
import { ScrollView } from "react-native";
import { JSX, ChildProps as ScrollViewContainerProps } from "../../../types";
import { COLORS } from "../../../colors";

export const ScrollViewContainer = (props: ScrollViewContainerProps): JSX => {
  return (
    <ScrollView
      style={{ width: "100%", height: "100%" }}
      contentContainerStyle={{
        flexGrow: 1,
        bottom: 0,
        backgroundColor: COLORS.white,
      }}
      showsVerticalScrollIndicator={false}
    >
      {props.children}
    </ScrollView>
  );
};
