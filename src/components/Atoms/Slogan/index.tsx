import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { JSX } from "../../../types";
import { screenWidth } from "../../../helpers/dimensions";
import { COLORS } from "../../../colors";

export const Slogan = (): JSX => {
  return (
    <View style={styles.container}>
      <Text style={styles.firstValue}>
        Join to us and <Text style={styles.secondValue}>explore</Text> the
        wonderfull photos!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    alignContent: "center",
  },
  firstValue: {
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
  secondValue: {
    fontFamily: "Open-Sans",
    fontWeight: "700",
    color: COLORS.emerald,
    letterSpacing: 0.5,
  },
});
