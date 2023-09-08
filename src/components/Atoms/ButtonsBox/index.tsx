import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { SubmitButton as Button } from "../SubmitButton";
import { screenWidth } from "../../../helpers/dimensions";
import { ButtonsBoxProps } from "../../../types";

export const ButtonsBox = (props: ButtonsBoxProps) => {
  return (
    <View style={styles.container}>
      <Button onPress={props.onPressGoToLogin} label="Login" />
      <Button onPress={props.onPressGoToSignUp} label="SignUp" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
