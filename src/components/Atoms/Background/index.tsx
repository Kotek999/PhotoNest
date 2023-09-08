import React from "react";
import { ImageBackground } from "react-native";
import { backgroundImg as source } from "../../../helpers/imageRequirements";
import { ChildProps as BackgroundProps } from "../../../types";

export const Background = (props: BackgroundProps) => {
  return (
    <ImageBackground
      source={source}
      style={{ height: "100%" }}
      resizeMode="cover"
    >
      {props.children}
    </ImageBackground>
  );
};
