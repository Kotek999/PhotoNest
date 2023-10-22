import React from "react";
import { StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { View } from "react-native-ui-lib";
import { JSX, RenderAddedPhotosProps } from "../../../types";
import { Photo } from "../../../components/Atoms/Photo";
import { PhotoAddedInfo } from "../../../components/Atoms/PhotoAddedInfo";

export const RenderAddedPhotos = (props: RenderAddedPhotosProps): JSX => {
  return (
    <View style={styles.mainContainer}>
      {props.photos.map((item, i) => (
        <TouchableWithoutFeedback
          key={`photosMap-${i}`}
          style={styles.touchableContainer}
          onPress={() => alert("click")}
        >
          <View style={styles.container}>
            <Photo uri={item.directUrl} mb={20} />
            <PhotoAddedInfo
              addedBy={item.addedBy}
              displayName={props.displayName}
              createdAt={{
                date: item.createdAt.date,
                time: item.createdAt.time,
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 100,
  },
  touchableContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    height: 250,
    marginTop: 40,
    marginBottom: 40,
  },
});
