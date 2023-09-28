import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { JSX, QuestionBoxProps } from "../../../types";
import { COLORS } from "../../../colors";

export const QuestionBox = (props: QuestionBoxProps): JSX => {
  return (
    <View style={styles.mainContainer}>
      <Text>{props.title}</Text>
      <View style={styles.container}>
        <TouchableOpacity onPress={props.onPress}>
          <Text style={styles.value}>{props.goTo}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
    marginBottom: 20,
    flexDirection: "row",
  },
  container: {
    marginLeft: 5,
  },
  value: {
    color: COLORS.orange,
  },
});
