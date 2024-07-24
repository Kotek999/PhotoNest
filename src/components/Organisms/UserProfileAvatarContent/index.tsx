import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { DialogUser } from "../../Molecules/DialogUser";
import { UserAvatar } from "../../Atoms/UserAvatar";
import { JSX, UserProfileAvatarContentProps } from "../../../types";

export const UserProfileAvatarContent = (
  props: UserProfileAvatarContentProps
): JSX => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.avatarWithButtoncontainer}>
        <View style={styles.avatarWithDialogContainer}>
          {props.userData?.avatar.directPath ? (
            <UserAvatar
              nickname={props.userData?.nickname}
              size={80}
              source={{ uri: props.userData?.avatar.directPath }}
            />
          ) : (
            <UserAvatar
              nickname={props.userData?.nickname}
              size={80}
              source={props.selectedAvatar}
            />
          )}
          <DialogUser
            userData={props.userData}
            visible={props.visible}
            visibleLength={props.visibleLength}
            onPress={props.onPressCloseDialog}
            onPressTruncate={props.onPressTruncate}
            onPressOpenDialog={props.onPressOpenDialog}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "center",
  },
  avatarWithButtoncontainer: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  avatarWithDialogContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
