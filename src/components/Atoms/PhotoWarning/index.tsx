import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { JSX, TitleProps as PhotoWarningProps } from "../../../types";
import { COLORS } from "../../../colors";
import { screenHeight } from "../../../helpers/dimensions";

export const PhotoWarning = (props: PhotoWarningProps): JSX => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>
        {props.isPermissionRequest && props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenHeight / 1.4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  value: {
    color: COLORS.darkOpacity,
    textAlign: "center",
    fontSize: 16,
    letterSpacing: 1.1,
  },
});
