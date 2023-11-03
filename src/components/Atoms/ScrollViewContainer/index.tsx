import React from "react";
import { ScrollView } from "react-native";
import { JSX, ChildProps as ScrollViewContainerProps } from "../../../types";
import { COLORS } from "../../../colors";
import { screenWidth, screenHeight } from "../../../helpers/dimensions";

export const ScrollViewContainer = (props: ScrollViewContainerProps): JSX => {
  return (
    <ScrollView
      style={{ width: screenWidth, height: screenHeight }}
      contentContainerStyle={{
        flexGrow: 1,
        bottom: 0,
        backgroundColor: COLORS.purpleBg,
      }}
      showsVerticalScrollIndicator={false}
      refreshControl={props.refreshControl}
    >
      {props.children}
    </ScrollView>
  );
};
