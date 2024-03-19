import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { View, Text, Avatar, Image } from "react-native-ui-lib";
import { JSX, TouchableAvatarWithUserInfoProps } from "../../../types";
import { COLORS } from "../../../colors";
import { auth } from "../../../../FirebaseConfig";
import { colightImg } from "../../../helpers/imageRequirements";
import { getFirstLetter } from "../../../helpers/functions/getFirstLetter";

export const TouchableAvatarWithUserInfo = (
  props: TouchableAvatarWithUserInfoProps
): JSX => {
  const avatarPath = props.userDataFirebase?.avatar.directPath;
  const userName = props.userDataFirebase?.nickname;
  return (
    <View style={styles.centerContainer}>
      <TouchableOpacity onPress={props.onPressGoToProfile}>
        {avatarPath === "" ? (
          <Avatar
            label={getFirstLetter(userName)}
            labelColor={COLORS.white}
            size={80}
            backgroundColor={COLORS.darkOpacity}
          />
        ) : (
          <Avatar size={80} source={{ uri: avatarPath }} />
        )}
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.value}>
          {props.userDataFirebase?.id === auth.currentUser?.uid
            ? "You"
            : userName}
        </Text>
        <View style={styles.centerContainer}>
          <Text
            style={{
              ...styles.value,

              fontWeight: "bold",
            }}
          >
            {props.userDataFirebase?.points}
          </Text>
          <Image
            source={colightImg}
            style={styles.img}
            resizeMode="cover"
            resizeMethod="scale"
            alt="photo"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    marginLeft: 16,
    justifyContent: "center",
    flexDirection: "column",
  },
  value: {
    fontSize: 20,
    color: COLORS.white,
    fontFamily: "Open-Sans",
  },
  img: {
    width: 25,
    height: 25,
    marginLeft: 5,
  },
});
