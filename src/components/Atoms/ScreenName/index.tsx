import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-ui-lib";
import { JSX, ScreenNameProps } from "../../../types";
import { COLORS } from "../../../colors";

export const ScreenName = (props: ScreenNameProps): JSX => {
  return <Text style={styles.value}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  value: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.white,
  },
});
