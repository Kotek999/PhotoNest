import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Avatar, Image } from "react-native-ui-lib";
import {
  JSX,
  BoardRowProps as BoardModalAvatarWithUserInfoProps,
} from "../../../types";
import { COLORS } from "../../../colors";
import { getFirstLetter } from "../../../helpers/functions/getFirstLetter";
import { colightImg } from "../../../helpers/imageRequirements";

export const BoardModalAvatarWithUserInfo = (
  props: BoardModalAvatarWithUserInfoProps
): JSX => {
  const avatarPath = props.data.avatarPath;
  const userName = props.data.userName;
  const points = props.data.points;

  return (
    <View style={styles.mainAvatarContainer}>
      <View style={styles.avatarContainer}>
        {avatarPath === "" ? (
          <Avatar
            label={getFirstLetter(userName)}
            labelColor={COLORS.white}
            size={80}
            source={{ uri: avatarPath }}
            backgroundColor={COLORS.darkOpacity}
          />
        ) : (
          <Avatar size={80} source={{ uri: avatarPath }} />
        )}
        <View style={styles.avatarWithUserInfoContainer}>
          <Text style={styles.value}>
            {props.data.isUserLogged ? "You" : userName}
          </Text>
          <View style={styles.avatarContainer}>
            <Text
              style={{
                ...styles.value,
                fontWeight: "bold",
              }}
            >
              {points === undefined || null ? 0 : points}
            </Text>
            <Image
              source={colightImg}
              style={styles.colightImg}
              resizeMode="cover"
              resizeMethod="scale"
              alt="photo"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainAvatarContainer: {
    position: "absolute",
    bottom: 30,
    left: 20,
    padding: 5,
    borderRadius: 20,
  },
  avatarContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  avatarWithUserInfoContainer: {
    marginLeft: 16,
    justifyContent: "center",
    flexDirection: "column",
  },
  colightImg: {
    width: 25,
    height: 25,
    marginLeft: 5,
  },
  value: {
    fontSize: 20,
    color: COLORS.white,
    fontFamily: "Open-Sans",
  },
});
