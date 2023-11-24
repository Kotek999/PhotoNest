import EvilIcons from "@expo/vector-icons/EvilIcons";
import React from "react";
import { StyleSheet } from "react-native";
import { View, Button } from "react-native-ui-lib";
import { JSX, OnPressAction as DialogCloseButtonProps } from "../../../types";
import { COLORS } from "../../../colors";

export const DialogCloseButton = (props: DialogCloseButtonProps): JSX => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        iconSource={() => (
          <View style={styles.iconContainer}>
            <EvilIcons
              name="close"
              size={24}
              style={styles.icon}
              color={COLORS.white}
            />
          </View>
        )}
        onPress={props.onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: COLORS.emerald,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
});
