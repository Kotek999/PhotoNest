import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Avatar } from "react-native-ui-lib";
import { JSX, UserPhotoProps } from "../../../types";
import { COLORS } from "../../../colors";
import { getFirstLetter } from "../../../helpers/functions/getFirstLetter";

export const UserPhotoInfo = (props: UserPhotoProps): JSX => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.singleElementContainer}>
        <Fontisto name="date" size={32} color="#a5c3a7" />
        <View style={styles.container}>
          <Text style={styles.descriptionValue}>
            {props.user.createdAt.time}
          </Text>
          <Text style={styles.descriptionValue}>
            {props.user.createdAt.date}
          </Text>
        </View>
      </View>
      <View style={styles.singleElementContainer}>
        {props.user.avatarPath === "" ? (
          <Avatar
            label={getFirstLetter(
              props.user.forPhotoData.forPhoto.nickname as string
            )}
            labelColor="white"
            size={60}
            backgroundColor={COLORS.darkOpacity}
          />
        ) : (
          <Avatar size={60} source={{ uri: props.user.avatarPath }} />
        )}
        <View style={styles.container}>
          <Text style={{ ...styles.descriptionValue, fontSize: 14 }}>
            {props.user.uid === props.user.currentUid ? (
              <Text style={styles.boldDecriptionValue}>You</Text>
            ) : (
              <View style={styles.nameWithRoleContainer}>
                <Text style={{ ...styles.descriptionValue, fontSize: 16 }}>
                  {props.user.forPhotoData.forPhoto.nickname as string}
                </Text>
                <Text
                  style={{ ...styles.descriptionValue, textAlign: "center" }}
                >
                  {props.user.role}
                </Text>
              </View>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.singleElementContainer}>
        <Ionicons name="image" size={32} color="#a5c3a7" />
        <View style={styles.container}>
          <Text style={styles.descriptionValue}>{props.user.type}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
  },
  singleElementContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  descriptionValue: {
    letterSpacing: 0.5,
    fontSize: 12,
    fontFamily: "Open-Sans",
    color: COLORS.lightGrayInput,
  },
  boldDecriptionValue: {
    letterSpacing: 0.5,
    fontFamily: "Open-Sans",
    fontWeight: "bold",
    color: COLORS.lightGrayInput,
  },
  container: {
    alignItems: "center",
    paddingTop: 10,
  },
  nameWithRoleContainer: {
    flexDirection: "column",
  },
});
