import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { View } from "react-native-ui-lib";
import { JSX, LeadingIconProps } from "../../../types";

export const LeadingIcon = (props: LeadingIconProps): JSX => {
  return (
    <View style={{ marginRight: 14 }}>
      <MaterialCommunityIcons name={props.name as any} size={20} color="gray" />
    </View>
  );
};
