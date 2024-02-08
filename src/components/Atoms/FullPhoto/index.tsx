import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native-ui-lib";
import { JSX, UserPhotoProps as FullPhotoProps } from "../../../types";
import { screenHeight, screenWidth } from "../../../helpers/dimensions";

export const FullPhoto = (props: FullPhotoProps): JSX => {
  return (
    <Image
      source={{ uri: props.user.forPhotoData.forPhoto.directUrl }}
      style={styles.img}
      resizeMode="cover"
      resizeMethod="scale"
      alt="photo"
    />
  );
};

const styles = StyleSheet.create({
  img: {
    width: screenWidth,
    height: screenHeight / 2,
    alignSelf: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginTop: 0,
  },
});
