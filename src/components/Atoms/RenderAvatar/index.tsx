import React from "react";
import { StyleSheet } from "react-native";
import { View, Avatar } from "react-native-ui-lib";
import { JSX, RenderAvatarProps } from "../../../types";
import { COLORS } from "../../../colors";
import { getFirstLetter } from "../../../helpers/functions/getFirstLetter";

export const RenderAvatar = (props: RenderAvatarProps): JSX => {
  return (
    <View style={styles.container}>
      {props.tempSelectedAvatar ? (
        <Avatar
          label="label"
          size={80}
          source={{ uri: props.tempSelectedAvatar }}
        />
      ) : (
        <>
          {props.directPath ? (
            <Avatar size={80} source={{ uri: props.directPath }} />
          ) : (
            <Avatar
              label={getFirstLetter(props.nickname)}
              labelColor={COLORS.white}
              backgroundColor={COLORS.darkOpacity}
              size={80}
            />
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginBottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
