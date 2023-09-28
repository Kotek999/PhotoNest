import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { ActivityIndicator } from "react-native";
import { JSX } from "../../../types";
import { COLORS } from "../../../colors";
import { screenHeight } from "../../../helpers/dimensions";

export const Spinner = (): JSX => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.orange} />
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
});
