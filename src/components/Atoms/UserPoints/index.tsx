import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native-ui-lib";
import { JSX, BoardRowProps as UserPointsProps } from "../../../types";
import { COLORS } from "../../../colors";
import { colightImg } from "../../../helpers/imageRequirements";
import { formatPoints } from "../../../helpers/functions/formatPoints";

export const UserPoints = (props: UserPointsProps): JSX => {
  const points = props.data.points;
  return (
    <View style={styles.container}>
      <Text style={styles.value}>
        {formatPoints(points === undefined || null ? 0 : points)}
      </Text>
      <Image
        source={colightImg}
        style={styles.img}
        resizeMode="cover"
        resizeMethod="scale"
        alt="photo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    marginRight: 20,
  },
  value: {
    flex: 1,
    marginRight: 0,
    textAlign: "right",
    fontFamily: "Open-Sans",
    fontWeight: "bold",
    letterSpacing: 0.5,
    fontSize: 18,
    color: COLORS.white,
  },
  img: {
    width: 28,
    height: 28,
    marginLeft: 5,
  },
});
