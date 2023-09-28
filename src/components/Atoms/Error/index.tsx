import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { screenWidth } from "../../../helpers/dimensions";
import { COLORS } from "../../../colors";
import { JSX, ErrorProps } from "../../../types";

export const Error = (props: ErrorProps): JSX => {
  return (
    <View style={styles.container}>
      {props.firstError ||
      props.secondError ||
      props.thirdError ||
      props.fourthError ? (
        <AntDesign name="exclamationcircle" size={16} color={COLORS.redError} />
      ) : null}
      <Text style={styles.value}>
        {props.firstError}
        {props.secondError}
        {props.thirdError}
        {props.fourthError}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    width: screenWidth - 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
  },
  value: {
    flex: 1,
    textAlign: "left",
    marginLeft: 6,
    fontSize: 14,
    letterSpacing: 1.1,
    color: COLORS.redError,
  },
});
