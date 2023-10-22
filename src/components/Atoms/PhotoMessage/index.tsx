import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { COLORS } from "../../../colors";
import { JSX, TitleProps as PhotoMessageProps } from "../../../types";

export const PhotoMessage = (props: PhotoMessageProps): JSX => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  value: {
    color: COLORS.darkOpacity,
    fontSize: 14,
    letterSpacing: 1.1,
  },
});
