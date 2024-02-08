import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { ActivityIndicator } from "react-native";
import { JSX, SpinnerProps } from "../../../types";
import { COLORS } from "../../../colors";
import { screenHeight } from "../../../helpers/dimensions";

export const Spinner = (props: SpinnerProps): JSX => {
  return (
    <View style={props.isFlex ? styles.flexContainer : styles.container}>
      <ActivityIndicator size="large" color={COLORS.emerald} />
      {props.isTextExist && (
        <Text style={styles.loadingValue}>Welcome again</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: screenHeight / 1.4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  flexContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  loadingValue: {
    margin: 24,
    color: COLORS.blackText,
    fontSize: 18,
    fontFamily: "Open-Sans",
    letterSpacing: 1.1,
  },
});
