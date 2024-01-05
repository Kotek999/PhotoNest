import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { COLORS } from "../../../colors";
import { DialogWithUserInfo } from "../../../components/Molecules/DialogWithUserInfo";
import { JSX, DialogUserProps } from "../../../types";

export const DialogUser = (props: DialogUserProps): JSX => {
  return (
    <View style={styles.dialogContainer}>
      <View style={styles.textWithIconContainer}>
        <Text style={styles.nicknameValue}>{props.userData?.nickname}</Text>
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
        visible={props.visible}
        visibleLength={props.visibleLength}
        onPress={props.onPress}
        onPressTruncate={props.onPressTruncate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
