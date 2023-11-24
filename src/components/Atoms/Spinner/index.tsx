import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { ActivityIndicator } from "react-native";
import { JSX } from "../../../types";
import { COLORS } from "../../../colors";
import { screenHeight } from "../../../helpers/dimensions";

type SpinnerProps = {
  isFlex: boolean;
};

export const Spinner = (props: SpinnerProps): JSX => {
  return (
    <View style={props.isFlex ? styles.flexContainer : styles.container}>
      <ActivityIndicator size="large" color={COLORS.emerald} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: screenHeight / 1.4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  flexContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
