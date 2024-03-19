import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { JSX, BoardUserPhotosProps } from "../../../types";
import { screenWidth, screenHeight } from "../../../helpers/dimensions";
import { UserPhotos } from "../../Molecules/UserPhotos";
import { ScrollViewContainer } from "../../Atoms/ScrollViewContainer";

export const BoardUserPhotos = (props: BoardUserPhotosProps): JSX => {
  return (
    <View>
      <ScrollViewContainer
        isDefaultOptions={false}
        style={{
          ...styles.scrollView,
          marginBottom: props.insets.bottom + screenHeight / 1.65,
        }}
        contentContainerStyle={{
          ...styles.scrollViewContent,
          paddingBottom: props.insets.bottom,
        }}
      >
        <UserPhotos
          userName={props.userName}
          userNameOfPhotos={props.userNameOfPhotos}
          isUserPhotosLoaded={props.isUserPhotosLoaded}
          isPhotosNotExist={props.isPhotosNotExist}
          userPhotos={props.userPhotos}
        />
      </ScrollViewContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    bottom: 0,
    marginTop: 0,
  },
  scrollViewContent: {
    width: screenWidth,
  },
});
