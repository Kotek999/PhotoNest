import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { JSX, OnPressAction as CloseIconProps } from "../../../types";
import { COLORS } from "../../../colors";

export const CloseIcon = (props: CloseIconProps): JSX => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Ionicons name="close" size={30} color={COLORS.sunsetOrange} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: COLORS.darkOpacity,
    top: 10,
    right: 10,
    padding: 5,
    borderRadius: 20,
  },
});
