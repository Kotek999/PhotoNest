import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { COLORS } from "../../../colors";
import { JSX, DialogUserProps } from "../../../types";

export const DialogUser = (props: DialogUserProps): JSX => {
  return (
    <View style={styles.dialogContainer}>
      <View style={styles.textWithIconContainer}>
        <Text style={styles.nicknameValue}>{props.userData?.nickname}</Text>
      </View>
      <Text style={styles.roleValue}>Role: {props.userData?.role}</Text>
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
  roleValue: {
    color: COLORS.grayItemMenu,
    fontSize: 14,
    fontFamily: "Open-Sans",
    letterSpacing: 0.5,
  },
});
