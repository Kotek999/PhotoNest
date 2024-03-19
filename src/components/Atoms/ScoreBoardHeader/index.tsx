import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { JSX, ScoreBoardHeaderProps } from "../../../types";
import { COLORS } from "../../../colors";

export const ScoreBoardHeader = (props: ScoreBoardHeaderProps): JSX => {
  return (
    <View style={styles.container}>
      {props.isTitleExist ? (
        <Text style={styles.value}>Scoreboard</Text>
      ) : (
        <Text style={styles.value}></Text>
      )}
      <TouchableOpacity onPress={props.onPressGoBack}>
        <Ionicons name="close" size={32} color={COLORS.sunsetOrange} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
  },
  value: {
    width: "70%",
    marginLeft: 0,
    fontSize: 26,
    color: COLORS.white,
    fontFamily: "Open-Sans",
    letterSpacing: 0.8,
  },
});
