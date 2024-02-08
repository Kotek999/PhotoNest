import React from "react";
import textData from "../../../../textData.json";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, Dash, Image } from "react-native-ui-lib";
import { JSX, AddedPhotoProps } from "../../../types";
import { COLORS } from "../../../colors";
import { screenWidth } from "../../../helpers/dimensions";
import { PhotoMessage } from "../../../components/Atoms/PhotoMessage";
import { Photo } from "../../../components/Atoms/Photo";
import { colightImg } from "../../../helpers/imageRequirements";

export const AddedPhoto = (props: AddedPhotoProps): JSX => {
  return (
    <View>
      {props.uri ? (
        <View style={styles.photoContainer}>
          <PhotoMessage title={textData.value.photo.title.message.photoAdded} />
          <Photo uri={props.uri} />
        </View>
      ) : (
        <View style={styles.mainContainer}>
          <PhotoMessage
            title={textData.value.photo.title.message.photoNotAdded}
          />
          <View style={styles.container}>
            <Text style={styles.value}>{props.colight}</Text>
            <TouchableOpacity onPress={props.onPressOpenModal}>
              <Image
                source={colightImg}
                style={styles.img}
                resizeMode="cover"
                resizeMethod="scale"
                alt="photoPresentingALight"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
      <Dash
        vertical
        length={2}
        color={COLORS.grayItemMenu}
        thickness={screenWidth}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  photoContainer: {
    flex: 1,
    height: 250,
    paddingBottom: 60,
    marginBottom: 30,
  },
  mainContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    marginRight: 7,
    alignItems: "center",
    flexDirection: "row",
  },
  value: {
    marginRight: 8,
    color: COLORS.white,
    fontFamily: "Open-Sans",
    fontSize: 16,
  },
  img: {
    width: 35,
    height: 35,
    borderRadius: 80,
    alignSelf: "center",
  },
});
