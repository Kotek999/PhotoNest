import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { JSX, PhotoDetailsContentProps } from "../../../types";
import { COLORS } from "../../../colors";
import { ScrollViewContainer } from "../../../components/Atoms/ScrollViewContainer";
import { StatusBar } from "expo-status-bar";
import { UserPhotoDetails } from "../../../components/Molecules/UserPhotoDetails";

export const PhotoDetailsContent = (props: PhotoDetailsContentProps): JSX => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" hidden backgroundColor={COLORS.purpleBg} />
      <ScrollViewContainer isDefaultOptions>
        <UserPhotoDetails
          isContentLoaded={props.isContentLoaded}
          isPathsLoaded={props.isPathsLoaded}
          isColightExist={props.isColightExist}
          isLiked={props.isLiked}
          onPressGoBack={props.onPressGoBack}
          onPressSetColight={props.onPressSetColight}
          user={props.user}
          points={props.points}
        />
      </ScrollViewContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blank,
  },
});
