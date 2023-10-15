import React from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { JSX } from "../../../types";
import { COLORS } from "../../../colors";

export const LoginSpinner = (): JSX => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>Logging...</Text>
      <ActivityIndicator size="small" color={COLORS.orange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  value: {
    fontSize: 18,
    marginRight: 10,
  },
});
