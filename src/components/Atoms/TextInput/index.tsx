import React from "react";
import { StyleSheet } from "react-native";
import { TextField } from "react-native-ui-lib";
import { TextInputProps } from "../../../types";

export const TextInput = (props: TextInputProps) => {
  return (
    <TextField
      placeholder={props.placeholder}
      containerStyle={styles.container}
      color="#242B2E"
      secureTextEntry={props.secureTextEntry}
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
    backgroundColor: "#d2dae2",
    borderRadius: 10,
  },
});
