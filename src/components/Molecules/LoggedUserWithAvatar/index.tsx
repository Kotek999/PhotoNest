import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { JSX, LoggedUserWithAvatarProps } from "../../../types";
import { LoginSpinner } from "../../../components/Atoms/LoginSpinner";
import { LoggedUser } from "../../../components/Atoms/LoggedUser";
import { TouchableAvatar } from "../../../components/Atoms/TouchableAvatar";

export const LoggedUserWithAvatar = (props: LoggedUserWithAvatarProps): JSX => {
  return (
    <View>
      {props.displayName ? (
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <TouchableAvatar
              showLoggedUser={props.showLoggedUser}
              displayName={props.displayName}
            />
            <LoggedUser
              isUserVisible={props.isUserVisible}
              displayName={props.displayName}
            />
          </View>
        </View>
      ) : (
        <LoginSpinner />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
