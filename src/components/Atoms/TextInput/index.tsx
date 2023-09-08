import React from "react";
import { StyleSheet } from "react-native";
import { TextField } from "react-native-ui-lib";
import { TextInputProps } from "../../../types";
import { COLORS } from "../../../colors";

export const TextInput = (props: TextInputProps) => {
  return (
    <TextField
      placeholder={props.placeholder}
      containerStyle={styles.container}
      color={COLORS.blackText}
      secureTextEntry={props.secureTextEntry}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    top: 10,
    padding: 10,
    paddingLeft: 30,
    width: "90%",
    justifyContent: "center",
    marginVertical: 4,
    backgroundColor: COLORS.grayField,
    borderRadius: 10,
  },
});
