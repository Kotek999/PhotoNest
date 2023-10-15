import React from "react";
import { TouchableOpacity } from "react-native";
import { Avatar } from "react-native-ui-lib";
import { JSX, TouchableAvatarProps } from "../../../types";
import { COLORS } from "../../../colors";
import { getFirstLetter } from "../../../helpers/functions/getFirstLetter";

export const TouchableAvatar = (props: TouchableAvatarProps): JSX => {
  return (
    <TouchableOpacity onPress={props.showLoggedUser}>
      <Avatar
        label={getFirstLetter(props.displayName as string)}
        labelColor="white"
        size={28}
        backgroundColor={COLORS.orange}
      />
    </TouchableOpacity>
  );
};
