import React from "react";
import textData from "../../../../textData.json";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { JSX, PhotoContentProps } from "../../../types";
import { AddedPhoto } from "../../../components/Molecules/AddedPhoto";
import { PhotoWarning } from "../../../components/Atoms/PhotoWarning";
import { Spinner } from "../../../components/Atoms/Spinner";
import { RenderAddedPhotos } from "../../../components/Molecules/RenderAddedPhotos";
import { COLORS } from "../../../colors";
import { screenHeight } from "../../../helpers/dimensions";

export const PhotoContent = (props: PhotoContentProps): JSX => {
  return (
    <View>
      {props.isContentLoaded ? (
        <View>
          <View>
            {!props.mediaPermission === false ? (
              <View style={styles.mainContainer}>
                <AddedPhoto
                  uri={props.addedPhoto}
                  colight={props.colight}
                  onPressOpenModal={props.onPressOpenModal}
                />
                {props.isPhotosLoaded ? (
                  <View style={styles.container}>
                    {props.photos.length === 0 ? (
                      <PhotoWarning
                        title={
                          textData.value.photo.title.warning.photosNotExist
                        }
                      />
                    ) : (
                      <RenderAddedPhotos
                        displayName={props.displayName}
                        photos={props.photos}
                        navigation={props.navigation}
                      />
                    )}
                  </View>
                ) : (
                  <Spinner isDefaultOptions={false} style={styles.spinner} />
                )}
              </View>
            ) : (
              <PhotoWarning
                isPermissionRequest={props.isPermissionRequest}
                title={textData.value.photo.title.warning.permissionDenied}
              />
            )}
          </View>
        </View>
      ) : (
        <Spinner isDefaultOptions={false} style={styles.spinner} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.purpleBg,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: COLORS.purpleBg,
  },
  spinner: {
    height: screenHeight / 1.4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
