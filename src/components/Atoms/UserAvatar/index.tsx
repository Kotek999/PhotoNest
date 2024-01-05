import React from "react";
import { Avatar } from "react-native-ui-lib";
import { JSX, AvatarProps } from "../../../types";
import { COLORS } from "../../../colors";
import { getFirstLetter } from "../../../helpers/functions/getFirstLetter";

export const UserAvatar = (props: AvatarProps): JSX => {
  return (
    <Avatar
      label={getFirstLetter(props.nickname)}
      labelColor={COLORS.white}
      size={80}
      backgroundColor={COLORS.darkOpacity}
      onPress={props.onPress}
      source={props.source}
    />
  );
};
