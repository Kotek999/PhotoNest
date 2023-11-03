import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { JSX, Children, LoggedUserProps } from "../../../types";
import { COLORS } from "../../../colors";

export const LoggedUser = (props: LoggedUserProps): JSX => {
  return (
    <View>
      {!props.isUserVisible && (
        <View style={styles.userContainer}>
          <Text style={styles.loggedUserValue}>
            Hello {""}
            <Text style={styles.userNameValue}>
              {props.displayName as Children}
            </Text>
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
  },
  loggedUserValue: {
    fontFamily: "Open-Sans",
    color: COLORS.white,
    fontSize: 18,
    marginLeft: 10,
    letterSpacing: 0.5,
  },
  userNameValue: {
    fontFamily: "Open-Sans",
    color: COLORS.emerald,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  statusValue: {
    color: COLORS.darkOpacity,
    fontSize: 18,
    marginLeft: 10,
    letterSpacing: 1.1,
  },
});
