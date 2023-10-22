import React from "react";
import { Image, StyleSheet } from "react-native";
import { screenWidth } from "../../../helpers/dimensions";
import { JSX, PhotoProps } from "../../../types";

export const Photo = (props: PhotoProps): JSX => {
  return (
    <Image
      source={{ uri: props.uri }}
      style={{ ...styles.image, marginBottom: props.mb }}
      resizeMode="cover"
      resizeMethod="scale"
    />
  );
};

const styles = StyleSheet.create({
  image: {
    flexGrow: 1,
    alignSelf: "center",
    width: screenWidth,
    height: "100%",
  },
});
