import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-ui-lib";
import { JSX, ParagraphProps } from "../../../types";
import { COLORS } from "../../../colors";

export const Paragraph = (props: ParagraphProps): JSX => {
  return (
    <Text style={styles.descriptionValue}>
      {props.firstPart}{" "}
      <Text style={styles.highlightedDescriptionValue}>{props.secondPart}</Text>
      {props.thirdPart}
    </Text>
  );
};

const styles = StyleSheet.create({
  descriptionValue: {
    padding: 20,
    textAlign: "center",
    letterSpacing: 0.5,
    fontFamily: "Open-Sans",
    fontSize: 20,
    color: "white",
  },
  highlightedDescriptionValue: {
    letterSpacing: 0.5,
    fontFamily: "Open-Sans",
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.emerald,
  },
});
