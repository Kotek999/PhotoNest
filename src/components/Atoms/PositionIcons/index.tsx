import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { JSX, PositionIconsProps } from "../../../types";
import { COLORS } from "../../../colors";
import {
  firstPlaceIcon,
  secondPlaceIcon,
  thirdPlaceIcon,
} from "../../../helpers/imageRequirements";
import { ImageIcon } from "../ImageIcon";

export const PositionIcons = (props: PositionIconsProps): JSX => {
  return (
    <View style={props.isDefaultStyle ? styles.container : props.styles}>
      {props.position === 1 ? (
        <ImageIcon source={firstPlaceIcon} />
      ) : props.position === 2 ? (
        <ImageIcon source={secondPlaceIcon} />
      ) : props.position === 3 ? (
        <ImageIcon source={thirdPlaceIcon} />
      ) : (
        <Text style={styles.value}>{props.position}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 12,
    width: "36%",
    marginRight: 24,
    borderRightWidth: 2,
    borderRightColor: COLORS.lightGrayInput,
  },
  value: {
    textAlign: "center",
    fontFamily: "Open-Sans",
    fontWeight: "bold",
    letterSpacing: 0.5,
    fontSize: 30,
    color: COLORS.white,
  },
});
