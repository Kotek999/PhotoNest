import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Avatar } from "react-native-ui-lib";
import {
  JSX,
  BoardRowProps as UserPositionWithAvatarProps,
} from "../../../types";
import { COLORS } from "../../../colors";
import { getFirstLetter } from "../../../helpers/functions/getFirstLetter";
import { PositionIcons } from "../../../components/Atoms/PositionIcons";

export const UserPositionWithAvatar = (
  props: UserPositionWithAvatarProps
): JSX => {
  const avatarPath = props.data.avatarPath;
  const userName = props.data.userName;
  return (
    <View style={styles.container}>
      <PositionIcons isDefaultStyle position={props.data.position} />
      <View style={styles.avatarContainer}>
        {avatarPath === "" ? (
          <Avatar
            label={getFirstLetter(userName)}
            labelColor={COLORS.white}
            size={40}
            source={{ uri: avatarPath }}
            backgroundColor={COLORS.darkOpacity}
          />
        ) : (
          <Avatar size={40} source={{ uri: avatarPath }} />
        )}
      </View>
      <Text style={styles.value}>
        {props.data.isUserLogged ? `${userName} (You)` : userName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  avatarContainer: {
    marginRight: 10,
  },
  value: {
    textAlign: "center",
    fontFamily: "Open-Sans",
    letterSpacing: 0.5,
    fontSize: 16,
    color: COLORS.white,
  },
});
