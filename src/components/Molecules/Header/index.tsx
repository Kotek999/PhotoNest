import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text } from "react-native-ui-lib";
import { JSX, HeaderProps } from "../../../types";
import { COLORS } from "../../../colors";
import { LoggedUserWithAvatar } from "../../../components/Molecules/LoggedUserWithAvatar";

export const Header = (props: HeaderProps): JSX => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...styles.mainContainer, marginTop: insets.top }}>
      <View style={styles.container}>
        {props.isUserShow ? (
          <LoggedUserWithAvatar
            displayName={props.displayName}
            isUserVisible={props.isUserVisible}
            onPressGoToProfile={props.onPressGoToProfile}
          />
        ) : (
          <Text style={styles.value}>{props.screenName}</Text>
        )}
        <TouchableOpacity onPress={props.onPressGoToSettings}>
          {props.isSettingsIconActive ? (
            <Ionicons name="settings" size={28} color={COLORS.emerald} />
          ) : (
            <Ionicons
              name="settings-outline"
              size={28}
              color={COLORS.emerald}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: COLORS.purpleBg,
  },
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  value: {
    color: COLORS.white,
    fontSize: 20,
    letterSpacing: 1.1,
  },
});
