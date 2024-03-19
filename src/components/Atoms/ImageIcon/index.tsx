import React from "react";
import { Image } from "react-native-ui-lib";
import { JSX, ImageIconProps } from "../../../types";

export const ImageIcon = (props: ImageIconProps): JSX => {
  return (
    <Image
      source={props.source}
      style={{ width: 40, height: 40 }}
      resizeMode="cover"
      resizeMethod="scale"
      alt="photo"
    />
  );
};
