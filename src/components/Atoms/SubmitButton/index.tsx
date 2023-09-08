import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-ui-lib";
import { SubmitButtonProps } from "../../../types";
import { COLORS } from "../../../colors";

export const SubmitButton = (props: SubmitButtonProps) => {
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
    backgroundColor: COLORS.orange,
    borderRadius: 10,
    marginTop: 25,
  },
  label: {
    letterSpacing: 1.2,
    fontSize: 20,
    fontWeight: "700",
  },
});
