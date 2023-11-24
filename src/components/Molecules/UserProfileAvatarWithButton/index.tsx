import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { View, Text, Avatar } from "react-native-ui-lib";
import { JSX, UserProfileAvatarWithButtonProps } from "../../../types";
import { COLORS } from "../../../colors";
import { getFirstLetter } from "../../../helpers/functions/getFirstLetter";
import { DialogWithUserInfo } from "../../../components/Molecules/DialogWithUserInfo";
import { SignOutButton } from "../../../components/Atoms/SignOutButton";

export const UserProfileAvatarWithButton = (
  props: UserProfileAvatarWithButtonProps
): JSX => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.avatarWithButtoncontainer}>
        <View style={styles.avatarWithDialogContainer}>
          <Avatar
            label={getFirstLetter(props.userData?.nickname)}
            labelColor={COLORS.white}
            size={80}
            backgroundColor={COLORS.darkOpacity}
          />
          <View style={styles.dialogContainer}>
            <View style={styles.textWithIconContainer}>
              <Text style={styles.nicknameValue}>
                {props.userData?.nickname}
              </Text>
              <TouchableOpacity onPress={props.onPressOpenDialog}>
                <Entypo
                  name="info-with-circle"
                  size={21}
                  style={styles.icon}
                  color={COLORS.lightGrayInput}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.roleValue}>Role: {props.userData?.role}</Text>
            <DialogWithUserInfo
              userData={props.userData}
              visible={props.isDialogVisible}
              visibleLength={props.visibleLength}
              onPress={props.onPressCloseDialog}
              onPressTruncate={props.onPressTruncate}
            />
          </View>
        </View>
        <SignOutButton onPress={props.onPressSignOut} />
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
  dialogContainer: {
    padding: 16,
    flexDirection: "column",
  },
  textWithIconContainer: {
    flexDirection: "row",
  },
  nicknameValue: {
    color: COLORS.emerald,
    fontSize: 16,
    fontFamily: "Open-Sans",
    fontWeight: "bold",
    letterSpacing: 0.5,
    marginBottom: 5,
  },
  icon: {
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  roleValue: {
    color: COLORS.grayItemMenu,
    fontSize: 14,
    fontFamily: "Open-Sans",
    letterSpacing: 0.5,
  },
});
