import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { JSX, Children, LoggedUserProps } from "../../../types";
import { COLORS } from "../../../colors";

export const LoggedUser = (props: LoggedUserProps): JSX => {
  return (
    <View>
      {!props.isUserVisible ? (
        <View style={styles.userContainer}>
          <Text style={styles.loggedUserValue}>
            Logged in as{" "}
            <Text style={styles.userNameValue}>
              {props.displayName as Children}
            </Text>
          </Text>
        </View>
      ) : (
        <Text style={styles.statusValue}>Online</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
  },
  loggedUserValue: {
    color: COLORS.darkOpacity,
    fontSize: 18,
    marginLeft: 10,
    letterSpacing: 1.1,
  },
  userNameValue: {
    color: COLORS.orange,
    fontWeight: "bold",
    letterSpacing: 1.1,
  },
  statusValue: {
    color: COLORS.darkOpacity,
    fontSize: 18,
    marginLeft: 10,
    letterSpacing: 1.1,
  },
});
