import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { View } from "react-native-ui-lib";
import { JSX, ChildProps as ImageTemplateProps } from "../../../types";
import { loginSignUpImg as source } from "../../../helpers/imageRequirements";
import { screenHeight, screenWidth } from "../../../helpers/dimensions";

export const ImageTemplate = (props: ImageTemplateProps): JSX => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainContainer}>
        <Image source={source} resizeMode="cover" style={styles.image} />
        <View style={styles.container}>{props.children}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: screenWidth,
    height: screenHeight / 2.5,
  },
  container: {
    marginTop: -50,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
  },
});
