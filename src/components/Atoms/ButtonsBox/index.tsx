import textData from "../../../../textData.json";
import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { SubmitButton as Button } from "../SubmitButton";
import { screenWidth } from "../../../helpers/dimensions";
import { JSX, ButtonsBoxProps } from "../../../types";

export const ButtonsBox = (props: ButtonsBoxProps): JSX => {
  return (
    <View style={styles.container}>
      <Button
        onPress={props.onPressGoToLogin}
        label={textData.value.form.login}
      />
      <Button
        onPress={props.onPressGoToSignUp}
        label={textData.value.form.sUButton}
      />
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
