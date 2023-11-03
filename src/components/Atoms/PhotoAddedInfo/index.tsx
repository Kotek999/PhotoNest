import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Avatar } from "react-native-ui-lib";
import { Children, JSX, PhotoAddedInfoProps } from "../../../types";
import { COLORS } from "../../../colors";
import { getFirstLetter } from "../../../helpers/functions/getFirstLetter";
import { generateDateMessage } from "../../../helpers/functions/generateDateMessage";
import { getCurrentDateAndTime } from "../../../helpers/functions/getCurrentDateAndTime";

export const PhotoAddedInfo = (props: PhotoAddedInfoProps): JSX => {
  const getDateMessage = generateDateMessage(
    `${props.createdAt.date} ${props.createdAt.time}`,
    getCurrentDateAndTime()
  );

  return (
    <View style={styles.mainContainer}>
      <Avatar
        label={getFirstLetter(props.addedBy as string)}
        labelColor="white"
        size={40}
        backgroundColor={COLORS.darkOpacity}
      />
      <View style={styles.container}>
        <Text style={styles.value}>
          By:{" "}
          {props.addedBy === props.displayName ? (
            <Text style={{ ...styles.value, fontWeight: "700" }}>You</Text>
          ) : (
            (props.addedBy as Children)
          )}
        </Text>
        <Text style={styles.value}>{getDateMessage}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginLeft: 30,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginLeft: 30,
  },
  value: {
    width: "100%",
    color: COLORS.white,
    fontSize: 14,
    letterSpacing: 1.1,
  },
});
