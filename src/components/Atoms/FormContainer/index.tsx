import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { screenHeight, screenWidth } from "../../../helpers/dimensions";
import { ImageTemplate } from "../../../components/Atoms/ImageTemplate";
import { ChildProps as FormContainerProps } from "../../../types";

export const FormContainer = (props: FormContainerProps) => {
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
    alignSelf: "center",
    backgroundColor: "white",
    width: screenWidth,
    height: screenHeight / 2.5,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
  },
  container: {
    top: 0,
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
  },
});
