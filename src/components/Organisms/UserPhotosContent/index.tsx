import React from "react";
import { JSX, UserPhotosContentProps } from "../../../types";
import { ScrollViewContainer } from "../../../components/Atoms/ScrollViewContainer";
import { Spinner } from "../../../components/Atoms/Spinner";
import { UserPhotos } from "../../../components/Molecules/UserPhotos";
import { UserProfileAvatarWithButton } from "../../Molecules/UserProfileAvatarWithButton";

export const UserPhotosContent = (props: UserPhotosContentProps): JSX => {
  return (
    <>
      {props.isContentLoaded ? (
        <ScrollViewContainer>
          <UserProfileAvatarWithButton
            isDialogVisible={props.isDialogVisible}
            userData={props.userData}
            visibleLength={props.visibleLength}
            onPressSignOut={props.onPressSignOut}
            onPressOpenDialog={props.onPressOpenDialog}
            onPressCloseDialog={props.onPressCloseDialog}
            onPressTruncate={props.onPressTruncate}
          />
          <UserPhotos
            isUserPhotosLoaded={props.isUserPhotosLoaded}
            isPhotosNotExist={props.isPhotosNotExist}
            userPhotos={props.userPhotos}
          />
        </ScrollViewContainer>
      ) : (
        <Spinner isFlex />
      )}
    </>
  );
};
