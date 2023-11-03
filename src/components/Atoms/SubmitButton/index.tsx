import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-ui-lib";
import { JSX, SubmitButtonProps } from "../../../types";
import { COLORS } from "../../../colors";

export const SubmitButton = (props: SubmitButtonProps): JSX => {
  return (
    <Button
      onPress={props.onPress}
      style={styles.container}
      color={COLORS.white}
      label={props.label}
      labelStyle={styles.label}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: COLORS.emerald,
    borderRadius: 10,
    marginTop: 25,
  },
  label: {
    fontFamily: "Open-Sans",
    letterSpacing: 0.5,
    fontSize: 20,
    fontWeight: "700",
  },
});
