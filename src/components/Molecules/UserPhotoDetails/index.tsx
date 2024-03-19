import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import {
  JSX,
  PhotoDetailsContentProps as UserPhotoDetailsProps,
} from "../../../types";
import { Spinner } from "../../../components/Atoms/Spinner";
import { ColightButton } from "../../../components/Atoms/ColightButton";
import { UserPhotoInfo } from "../../../components/Atoms/UserPhotoInfo";
import { CloseIcon } from "../../../components/Atoms/CloseIcon";
import { FullPhoto } from "../../../components/Atoms/FullPhoto";

export const UserPhotoDetails = (props: UserPhotoDetailsProps): JSX => {
  return (
    <>
      {props.isContentLoaded ? (
        <View style={styles.container}>
          <FullPhoto user={props.user} />
          <CloseIcon onPress={props.onPressGoBack} />
          <UserPhotoInfo user={props.user} />
          <ColightButton
            isPathsLoaded={props.isPathsLoaded}
            isColightExist={props.isColightExist}
            isLiked={props.isLiked}
            user={props.user}
            onPressSetColight={props.onPressSetColight}
          />
        </View>
      ) : (
        <Spinner isDefaultOptions />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
  },
});
