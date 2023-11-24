import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { JSX, UserRowProps } from "../../../types";
import { COLORS } from "../../../colors";
import { createTruncateForText } from "../../../helpers/functions/createTruncateForText";

export const UserRow = (props: UserRowProps): JSX => {
  const isTruncate = props.isTruncateLabel;

  return (
    <View style={styles.row}>
      <Text
        style={isTruncate ? [styles.label] : [styles.label, styles.labelWidth]}
      >
        {props.label}
      </Text>
      <View style={styles.valueContainer}>
        {isTruncate ? (
          <TouchableOpacity onPress={props.onPressTruncate}>
            <Text style={styles.truncateValue}>
              {createTruncateForText(
                props.userData?.id,
                props.visibleLength as number
              )}
            </Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.value}>{props.value}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    color: COLORS.lightGrayInput,
    letterSpacing: 0.5,
    fontWeight: "600",
  },
  labelWidth: {
    width: 60,
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  value: {
    color: COLORS.grayItemMenu,
    letterSpacing: 0.5,
  },
  truncateValue: {
    color: COLORS.grayItemMenu,
    letterSpacing: 0.5,
    marginLeft: 44,
    marginRight: 44,
  },
});
