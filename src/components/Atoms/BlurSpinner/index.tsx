import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { JSX } from "../../../types";
import { screenWidth } from "../../../helpers/dimensions";
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
        intensity={0}
      >
        <ActivityIndicator size="large" color={COLORS.emerald} />
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  resolutionContainer: {
    flex: 1,
    width: screenWidth,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
