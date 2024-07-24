import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { JSX, UserAvatarWithIconProps } from "../../../types";
import { COLORS } from "../../../colors";
import { UserAvatar } from "../../../components/Atoms/UserAvatar";

export const UserAvatarWithIcon = (props: UserAvatarWithIconProps): JSX => {
  return (
    <>
      {props.userData?.avatar.directPath ? (
        <>
          {props.selectedAvatar ? (
            <UserAvatar
              nickname={props.userData?.nickname}
              size={100}
              onPressOpenModal={props.openModal}
              source={props.selectedAvatar}
            />
          ) : (
            <UserAvatar
              nickname={props.userData?.nickname}
              size={100}
              onPressOpenModal={props.openModal}
              source={{ uri: props.userData?.avatar.directPath }}
            />
          )}
        </>
      ) : (
        <UserAvatar
          nickname={props.userData?.nickname}
          size={100}
          onPressOpenModal={props.openModal}
          source={props.selectedAvatar}
        />
      )}

      <View style={styles.iconContainer}>
        <FontAwesome5 name="pen" size={18} color={COLORS.lightGrayBg} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    bottom: 0,
    right: 5,
    borderRadius: 100,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    backgroundColor: COLORS.darkOpacity,
  },
});
