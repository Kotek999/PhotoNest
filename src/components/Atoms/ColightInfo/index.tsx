import textData from "../../../../textData.json";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { JSX } from "../../../types";
import { COLORS } from "../../../colors";
import { colightImg } from "../../../helpers/imageRequirements";
import { Paragraph } from "../Paragraph";

export const ColightInfo = (): JSX => {
  return (
    <View>
      <View style={styles.titleWithImgContainer}>
        <View>
          <Text style={styles.titleValue}>{textData.value.colight.title}</Text>
        </View>
        <Image
          source={colightImg}
          style={styles.img}
          resizeMode="cover"
          resizeMethod="scale"
          alt="photoPresentingColight"
        />
        <Text style={styles.nameOfPointValue}>
          {textData.value.colight.name}
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.container}>
          <Paragraph
            firstPart={textData.value.colight.paragraph.first.firstValue}
            secondPart={textData.value.colight.paragraph.first.secondValue}
            thirdPart={textData.value.colight.paragraph.first.thirdValue}
          />
          <Paragraph
            firstPart={textData.value.colight.paragraph.second.firstValue}
            secondPart={textData.value.colight.paragraph.second.secondValue}
            thirdPart={textData.value.colight.paragraph.second.thirdValue}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleWithImgContainer: {
    marginTop: 20,
    flexDirection: "column",
  },
  titleValue: {
    textAlign: "center",
    letterSpacing: 0.5,
    fontFamily: "Open-Sans",
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },
  img: {
    marginTop: 40,
    width: 60,
    height: 60,
    borderRadius: 80,
    alignSelf: "center",
  },
  nameOfPointValue: {
    alignSelf: "center",
    letterSpacing: 0.5,
    fontFamily: "Open-Sans",
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.grayField,
  },
  contentContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
  },
  descriptionValue: {
    padding: 20,
    textAlign: "center",
    letterSpacing: 0.5,
    fontFamily: "Open-Sans",
    fontSize: 20,
    color: "white",
  },
  highlightedDescriptionValue: {
    letterSpacing: 0.5,
    fontFamily: "Open-Sans",
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.emerald,
  },
});
