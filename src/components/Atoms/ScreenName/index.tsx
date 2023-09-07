import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-ui-lib";
import { ScreenNameProps } from "../../../types";

export const ScreenName = (props: ScreenNameProps) => {
  return <Text style={styles.value}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  value: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FF9347",
  },
});
