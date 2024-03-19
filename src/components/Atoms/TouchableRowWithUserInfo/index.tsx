import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native-ui-lib";
import { JSX, TouchableRowWithUserInfoProps } from "../../../types";
import { screenWidth } from "../../../helpers/dimensions";
import { UserPositionWithAvatar } from "../../Atoms/UserPositionWithAvatar";
import { UserPoints } from "../../Atoms/UserPoints";
import { COLORS } from "../../../colors";

export const TouchableRowWithUserInfo = (
  props: TouchableRowWithUserInfoProps
): JSX => {
  return (
    <>
      <TouchableOpacity onPress={props.onPressGetPhotos}>
        <View
          style={{
            ...styles.container,
            backgroundColor: props.data.isUserLogged
              ? COLORS.lightPink
              : COLORS.lightPurple,
          }}
        >
          <UserPositionWithAvatar data={props.data} />
          <UserPoints data={props.data} />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    borderRadius: 20,
    width: screenWidth - 40,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    marginBottom: 20,
  },
});
