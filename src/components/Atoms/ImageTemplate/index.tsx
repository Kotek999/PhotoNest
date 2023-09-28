import React from "react";
import {
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { loginSignUpImg as source } from "../../../helpers/imageRequirements";
import { JSX, ChildProps as ImageTemplateProps } from "../../../types";
import { screenHeight } from "../../../helpers/dimensions";

export const ImageTemplate = (props: ImageTemplateProps): JSX => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={source} resizeMode="cover" style={styles.image}>
        {props.children}
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: screenHeight / 1.3,
    justifyContent: "flex-end",
  },
});
