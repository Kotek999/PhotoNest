import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { Children, JSX, PhotoAddedInfoProps } from "../../../types";
import { COLORS } from "../../../colors";
import { generateDateMessage } from "../../../helpers/functions/generateDateMessage";
import { getCurrentDateAndTime } from "../../../helpers/functions/getCurrentDateAndTime";
import { Spinner } from "../Spinner";
import { getUserAvatar } from "../../../helpers/functions/getUserAvatar";

export const PhotoAddedInfo = (props: PhotoAddedInfoProps): JSX => {
  const [userAvatar, setUserAvatar] = useState<Children | null>(null);
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);

  const getDateMessage = generateDateMessage(
    `${props.createdAt.date} ${props.createdAt.time}`,
    getCurrentDateAndTime()
  );

  useEffect(() => {
    getUserAvatar({
      uid: props.userId as string,
      addedBy: props.addedBy,
      setUserAvatar,
      setIsContentLoaded,
    });
  }, [props.userId]);

  return (
    <View style={styles.mainContainer}>
      {isContentLoaded ? (
        <>
          {userAvatar}
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
        </>
      ) : (
        <Spinner isFlex />
      )}
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
    fontFamily: "Open-Sans",
    width: "100%",
    color: COLORS.white,
    fontSize: 14,
    letterSpacing: 0.5,
  },
});
