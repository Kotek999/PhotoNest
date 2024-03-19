import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { JSX, UserPhotosProps } from "../../../types";
import { COLORS } from "../../../colors";
import { PhotoMessage } from "../../../components/Atoms/PhotoMessage";
import { Spinner } from "../../../components/Atoms/Spinner";
import { PhotoOfUser } from "../../Atoms/PhotoOfUser";

export const UserPhotos = (props: UserPhotosProps): JSX => {
  return (
    <>
      <View style={{ marginTop: 20, marginBottom: 10 }}>
        {!props.isPhotosNotExist && (
          <Text
            style={{
              ...styles.value,
              marginLeft: 14,
              color: COLORS.white,
            }}
          >
            {`${props.userNameOfPhotos} photos:`}
          </Text>
        )}
      </View>
      {props.isUserPhotosLoaded ? (
        <View style={styles.mainContainer}>
          {props.isPhotosNotExist && (
            <PhotoMessage
              isTitleForNotExistPhotos
              userNameForTitle={props.userName}
            />
          )}
          <View style={styles.photosContainer}>
            {props.userPhotos.map((photo, i) => (
              <View key={`userPhotosMap-${i}`} style={styles.photoContainer}>
                <PhotoOfUser uri={photo.directUrl} mb={10} />
                <View style={styles.dateContainer}>
                  <Text style={styles.value}>
                    {photo.createdAt.date} · {photo.createdAt.time}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      ) : (
        <Spinner isDefaultOptions />
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
    marginBottom: 40,
  },
  photoContainer: {
    flex: 1,
    height: 250,
    marginTop: 10,
    marginBottom: 40,
  },
  dateContainer: {
    backgroundColor: COLORS.darkOpacity,
    position: "absolute",
    bottom: 10,
    left: 10,
    borderRadius: 10,
    padding: 10,
  },
  value: {
    color: COLORS.white,
    letterSpacing: 0.5,
    fontFamily: "Open-Sans",
  },
});
