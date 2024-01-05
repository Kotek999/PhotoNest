import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { View, Avatar } from "react-native-ui-lib";
import { JSX, LoggedUserProps } from "../../../types";
import { COLORS } from "../../../colors";
import { getFirstLetter } from "../../../helpers/functions/getFirstLetter";

export const TouchableAvatar = (props: LoggedUserProps): JSX => {
  return (
    <TouchableOpacity onPress={props.onPressGoToProfile}>
      {props.avatarDirectPath ? (
        <Avatar size={28} source={{ uri: props.avatarDirectPath }} />
      ) : (
        <Avatar
          label={getFirstLetter(props.displayName as string)}
          labelColor={COLORS.white}
          size={28}
          backgroundColor={COLORS.darkOpacity}
        />
      )}
      <View
        style={{
          ...styles.badge,
          width: 9,
          height: 9,
          backgroundColor: COLORS.purpleBg,
        }}
      >
        <View
          style={{
            ...styles.badge,
            width: 8,
            height: 8,
            backgroundColor: COLORS.lightGreen,
          }}
        ></View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  badge: {
    flex: 1,
    bottom: 0,
    right: 0,
    borderRadius: 100,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});
