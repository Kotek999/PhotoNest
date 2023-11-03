import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { JSX, BottomTabBarIconProps } from "../../types";
import { COLORS } from "../../colors";

export const createTabBarIcon = (props: BottomTabBarIconProps): JSX => {
  const colorOfItemsOnMenu = props.isFocused
    ? COLORS.emerald
    : COLORS.grayItemMenu;

  return (
    <View style={styles.container}>
      <FontAwesome5
        name={props.iconName}
        size={24}
        color={colorOfItemsOnMenu}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
});
