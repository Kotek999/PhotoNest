import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-ui-lib";
import { JSX, OnPressAction as SignOutButtonProps } from "../../../types";
import { COLORS } from "../../../colors";

export const SignOutButton = (props: SignOutButtonProps): JSX => {
  return (
    <Button
      onPress={props.onPress}
      style={styles.button}
      color={COLORS.white}
      size="large"
      label="Sign out"
      labelStyle={styles.label}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.emerald,
    borderRadius: 20,
  },
  label: {
    fontFamily: "Open-Sans",
    letterSpacing: 0.5,
    fontSize: 18,
    fontWeight: "700",
  },
});
