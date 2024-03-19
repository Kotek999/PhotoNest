import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { ActivityIndicator } from "react-native";
import { JSX, SpinnerProps } from "../../../types";
import { COLORS } from "../../../colors";
import { screenWidth } from "../../../helpers/dimensions";

export const Spinner = (props: SpinnerProps): JSX => {
  return (
    <View style={props.isDefaultOptions ? styles.flexContainer : props.style}>
      <ActivityIndicator size="large" color={COLORS.emerald} />
      {props.isTextExist && (
        <Text style={styles.loadingValue}>Welcome again</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  loadingValue: {
    marginTop: 40,
    fontFamily: "Open-Sans",
    textAlign: "center",
    padding: 10,
    width: screenWidth,
    backgroundColor: COLORS.darkOpacity,
    color: COLORS.white,
    fontSize: 30,
    letterSpacing: 0.5,
    fontWeight: "500",
  },
});
