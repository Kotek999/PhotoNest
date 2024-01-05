import React from "react";
import { StyleSheet } from "react-native";
import { View, Avatar } from "react-native-ui-lib";
import { JSX, LoggedUserWithAvatarProps } from "../../../types";
import { LoggedUser } from "../../../components/Atoms/LoggedUser";
import { TouchableAvatar } from "../../../components/Atoms/TouchableAvatar";

export const LoggedUserWithAvatar = (props: LoggedUserWithAvatarProps): JSX => {
  return (
    <View>
      {props.displayName ? (
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <TouchableAvatar
              avatarDirectPath={props.avatarDirectPath}
              displayName={props.displayName}
              onPressGoToProfile={props.onPressGoToProfile}
            />
            <LoggedUser
              isUserVisible={props.isUserVisible}
              displayName={props.displayName}
            />
          </View>
        </View>
      ) : (
        <Avatar size={28} backgroundColor="#E0E0E0" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
