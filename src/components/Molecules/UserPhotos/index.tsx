import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { JSX, UserPhotosProps } from "../../../types";
import { COLORS } from "../../../colors";
import { Photo } from "../../../components/Atoms/Photo";
import { PhotoMessage } from "../../../components/Atoms/PhotoMessage";
import { Spinner } from "../../../components/Atoms/Spinner";

export const UserPhotos = (props: UserPhotosProps): JSX => {
  return (
    <>
      <View>
        <Text
          style={{
            ...styles.value,
            marginLeft: 14,
            color: COLORS.white,
          }}
        >
          Your photos:
        </Text>
      </View>
      {props.isUserPhotosLoaded ? (
        <View style={styles.mainContainer}>
          {props.isPhotosNotExist && (
            <PhotoMessage title="Oops... you don't have any photos added" />
          )}
          <View style={styles.photosContainer}>
            {props.userPhotos.map((photo, i) => (
              <View key={`userPhotosMap-${i}`} style={styles.photoContainer}>
                <Photo uri={photo.directUrl} mb={10} />
                <View style={styles.dateContainer}>
                  <Text style={styles.value}>
                    Date: {photo.createdAt.date} {photo.createdAt.time}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      ) : (
        <Spinner isFlex />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  photosContainer: {
    marginBottom: 20,
  },
  photoContainer: {
    flex: 1,
    height: 250,
    marginTop: 10,
    marginBottom: 100,
  },
  dateContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    alignContent: "center",
  },
  value: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
    color: COLORS.grayField,
    letterSpacing: 0.5,
    fontFamily: "Open-Sans",
  },
});
