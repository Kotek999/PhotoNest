import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { loginSignUpImg as source } from "../../../helpers/imageRequirements";
import { ChildProps as ImageTemplateProps } from "../../../types";

export const ImageTemplate = (props: ImageTemplateProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={source} resizeMode="cover" style={styles.image}>
        {props.children}
        <StatusBar style="light" />
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
