import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { JSX, PhotoContentProps } from "../../../types";
import { AddedPhoto } from "../../../components/Molecules/AddedPhoto";
import { PhotoWarning } from "../../../components/Atoms/PhotoWarning";
import { Spinner } from "../../../components/Atoms/Spinner";
import { RenderAddedPhotos } from "../../../components/Molecules/RenderAddedPhotos";

export const PhotoContent = (props: PhotoContentProps): JSX => {
  return (
    <View>
      {props.isContentLoaded ? (
        <View>
          <View>
            {!props.mediaPermission === false ? (
              <View>
                <AddedPhoto uri={props.addedPhoto} />
                {props.isPhotosLoaded ? (
                  <View style={styles.container}>
                    {props.photos.length === 0 ? (
                      <PhotoWarning title="No photos to display" />
                    ) : (
                      <RenderAddedPhotos
                        displayName={props.displayName}
                        photos={props.photos}
                      />
                    )}
                  </View>
                ) : (
                  <Spinner />
                )}
              </View>
            ) : (
              <PhotoWarning
                isPermissionRequest={props.isPermissionRequest}
                title="You have denied access to galleries and photos. To continue, grant access in the settings."
              />
            )}
          </View>
        </View>
      ) : (
        <Spinner />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  },
});
