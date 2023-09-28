import React from "react";
import { StyleSheet } from "react-native";
import { Incubator } from "react-native-ui-lib";
import { JSX, TextInputProps } from "../../../types";
import { COLORS } from "../../../colors";

export const TextInput = (props: TextInputProps): JSX => {
  const { TextField } = Incubator;

  return (
    <TextField
      placeholder={props.placeholder}
      containerStyle={{ ...styles.container, borderColor: props.borderColor }}
      color={COLORS.blackText}
      secureTextEntry={props.secureTextEntry}
      value={props.value}
      onChangeText={props.onChangeText as ((text: string) => void) | undefined}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginBottom: 25,
    padding: 10,
    paddingLeft: 30,
    width: "90%",
    justifyContent: "center",
    marginVertical: 4,
    backgroundColor: COLORS.grayField,
    borderRadius: 10,
    borderWidth: 1.2,
  },
});
