import React from "react";
import textData from "../../../../textData.json";
import { StyleSheet } from "react-native";
import { View, Dash } from "react-native-ui-lib";
import { JSX, AddedPhotoProps } from "../../../types";
import { COLORS } from "../../../colors";
import { screenWidth } from "../../../helpers/dimensions";
import { PhotoMessage } from "../../../components/Atoms/PhotoMessage";
import { Photo } from "../../../components/Atoms/Photo";

export const AddedPhoto = (props: AddedPhotoProps): JSX => {
  return (
    <View>
      {props.uri ? (
        <View style={styles.container}>
          <PhotoMessage title={textData.value.photo.title.message.photoAdded} />
          <Photo uri={props.uri} />
        </View>
      ) : (
        <PhotoMessage
          title={textData.value.photo.title.message.photoNotAdded}
        />
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
  container: {
    flex: 1,
    height: 250,
    paddingBottom: 60,
    marginBottom: 30,
  },
});
