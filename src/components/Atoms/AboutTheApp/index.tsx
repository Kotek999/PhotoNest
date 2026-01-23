import React from "react";
import appJSON from "../../../../app.json";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { JSX } from "../../../types";
import { screenWidth } from "../../../helpers/dimensions";
import { COLORS } from "../../../colors";
import { aboutContentData } from "../../Data/AboutContent";

export const AboutTheApp = (): JSX => {
  const currentYear = new Date().getFullYear();
  const appVersion = `Copyright ${"\u00A9"} Photo Nest ${`(v.${appJSON.expo.version})`} - ${currentYear}`;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.titleValue}>Welcome to PhotoNest!</Text>
        {aboutContentData.map((content, i) => {
          return (
            <Text key={i} style={styles.contentValue}>
              {content.textValue}
            </Text>
          );
        })}
      </View>
      <View style={styles.appVersionContainer}>
        <Text style={styles.appVersionValue}>{appVersion}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    width: screenWidth / 1.1,
  },
  titleValue: {
    padding: 10,
    color: COLORS.emerald,
    fontSize: 23,
    letterSpacing: 0.5,
    fontWeight: "bold",
  },
  contentValue: {
    paddingLeft: 10,
    marginTop: 15,
    color: COLORS.white,
    fontSize: 18,
    letterSpacing: 0.5,
    fontFamily: "Open-Sans",
  },
  appVersionContainer: {
    alignSelf: "flex-start",
    marginTop: 60,
    paddingLeft: 10,
    justifyContent: "center",
  },
  appVersionValue: {
    textAlign: "center",
    color: COLORS.grayItemMenu,
    fontFamily: "Open-Sans",
    fontSize: 14,
    letterSpacing: 0.5,
  },
});
