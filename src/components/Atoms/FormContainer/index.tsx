import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { screenHeight, screenWidth } from "../../../helpers/dimensions";
import { JSX, ChildProps as FormContainerProps } from "../../../types";
import { COLORS } from "../../../colors";

export const FormContainer = (props: FormContainerProps): JSX => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 20,
    alignSelf: "center",
    backgroundColor: COLORS.white,
    width: screenWidth,
    height: screenHeight,
    borderTopLeftRadius: 50,
  },
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
  },
});
