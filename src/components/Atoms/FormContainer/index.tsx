import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { screenHeight, screenWidth } from "../../../helpers/dimensions";
import { ImageTemplate } from "../../../components/Atoms/ImageTemplate";
import { JSX, ChildProps as FormContainerProps } from "../../../types";
import { COLORS } from "../../../colors";

export const FormContainer = (props: FormContainerProps): JSX => {
  return (
    <ImageTemplate>
      <View style={styles.mainContainer}>
        <View style={styles.container}>{props.children}</View>
      </View>
    </ImageTemplate>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 10,
    alignSelf: "center",
    backgroundColor: COLORS.white,
    width: screenWidth,
    height: screenHeight / 1.9,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
  },
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
  },
});
