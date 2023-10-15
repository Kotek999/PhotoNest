import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native-ui-lib";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { JSX } from "../../../types";
import { COLORS } from "../../../colors";

export const BottomTabBarButton = (props: BottomTabBarButtonProps): JSX => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, styles.shadow]}
      onPress={props.onPress}
    >
      <View style={styles.container}>{props.children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    top: -30,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: 50,
    height: 50,
    borderRadius: 35,
    backgroundColor: COLORS.orange,
  },
  shadow: {
    shadowColor: COLORS.darkOpacity,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
