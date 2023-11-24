import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Dialog, PanningProvider } from "react-native-ui-lib";
import { JSX, DialogWithUserInfoProps } from "../../../types";
import { COLORS } from "../../../colors";
import { DialogCloseButton } from "../../Atoms/DialogCloseButton";
import { UserInfo } from "../../Atoms/UserInfo";

export const DialogWithUserInfo = (props: DialogWithUserInfoProps): JSX => {
  return (
    <Dialog
      visible={props.visible}
      onDismiss={props.onPress}
      useSafeArea
      containerStyle={styles.dialogContainer}
      panDirection={PanningProvider.Directions.UP}
    >
      <View style={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.value}>User General Information</Text>
          <View style={styles.buttonContainer}>
            <DialogCloseButton onPress={props.onPress} />
          </View>
        </View>
        <UserInfo
          userData={props.userData}
          onPressTruncate={props.onPressTruncate}
          visibleLength={props.visibleLength}
        />
      </View>
    </Dialog>
  );
};

const styles = StyleSheet.create({
  dialogContainer: {
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: COLORS.purpleBg,
    width: "80%",
    height: 200,
    borderRadius: 20,
  },
  contentContainer: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  value: {
    color: COLORS.white,
    letterSpacing: 1,
    fontFamily: "Open-Sans",
    fontWeight: "700",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    alignContent: "center",
  },
});
