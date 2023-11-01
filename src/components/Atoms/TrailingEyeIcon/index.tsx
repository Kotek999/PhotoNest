import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { JSX, TrailingEyeIconProps } from "../../../types";
import { TouchableOpacity } from "react-native";

export const TrailingEyeIcon = (props: TrailingEyeIconProps): JSX => {
  const onClickShowPassword = () => props.setShowPassword(!props.showPassword);

  return (
    <TouchableOpacity onPress={onClickShowPassword}>
      <MaterialCommunityIcons
        name={props.showPassword ? "eye" : "eye-off"}
        size={20}
        color="gray"
      />
    </TouchableOpacity>
  );
};
