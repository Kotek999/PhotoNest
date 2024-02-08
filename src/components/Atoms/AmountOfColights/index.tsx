import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native-ui-lib";
import { JSX, AmountOfColightsProps } from "../../../types";
import { COLORS } from "../../../colors";
import { colightImg } from "../../../helpers/imageRequirements";

export const AmountOfColights = (props: AmountOfColightsProps): JSX => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{props.points}</Text>
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
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 10,
    left: 10,
    padding: 12,
    backgroundColor: COLORS.darkOpacity,
    borderRadius: 20,
  },
  value: {
    marginRight: 5,
    fontSize: 22,
    color: COLORS.white,
    letterSpacing: 0.5,
    fontFamily: "Open-Sans",
  },
  img: {
    width: 35,
    height: 35,
    alignSelf: "center",
  },
});
