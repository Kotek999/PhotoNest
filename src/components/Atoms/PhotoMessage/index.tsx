import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { COLORS } from "../../../colors";
import { JSX, TitleProps as PhotoMessageProps } from "../../../types";

export const PhotoMessage = (props: PhotoMessageProps): JSX => {
  return (
    <View style={styles.container}>
      {props.isTitleForNotExistPhotos ? (
        <Text style={styles.value}>
          Oops...{" "}
          <Text style={{ ...styles.value, fontWeight: "bold" }}>
            {props.userNameForTitle}
          </Text>{" "}
          don't have any photos added
        </Text>
      ) : (
        <Text style={styles.value}>{props.title}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  value: {
    fontFamily: "Open-Sans",
    color: COLORS.white,
    fontSize: 14,
    letterSpacing: 0.5,
  },
});
