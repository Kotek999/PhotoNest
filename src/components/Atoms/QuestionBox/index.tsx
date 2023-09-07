import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { QuestionBoxProps } from "../../../types";

export const QuestionBox = (props: QuestionBoxProps) => {
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
    marginTop: 20,
    flexDirection: "row",
  },
  container: {
    marginLeft: 5,
  },
  value: {
    color: "#FF9347",
  },
});
