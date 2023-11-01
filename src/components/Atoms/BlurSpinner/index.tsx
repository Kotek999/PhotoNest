import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { JSX } from "../../../types";
import { screenHeight, screenWidth } from "../../../helpers/dimensions";
import { COLORS } from "../../../colors";
import { BlurView } from "expo-blur";

export const BlurSpinner = (): JSX => {
  return (
    <View style={styles.resolutionContainer}>
      <BlurView
        style={{
          ...styles.resolutionContainer,
          ...styles.container,
        }}
        tint="light"
        intensity={100}
      >
        <ActivityIndicator size="large" color={COLORS.orange} />
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  resolutionContainer: {
    width: screenWidth,
    height: screenHeight,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
