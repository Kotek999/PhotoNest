import React from "react";
import { StatusBar } from "expo-status-bar";
import { JSX, ChildProps as ScreenProps } from "../../../types";
import { COLORS } from "../../../colors";
import { View } from "react-native-ui-lib";

export const Screen = (props: ScreenProps): JSX => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.purpleBg }}>
      {props.children}
      <StatusBar
        style={props.styleOfStatusBar}
        backgroundColor={props.bgColor}
      />
    </View>
  );
};
