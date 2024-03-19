import React from "react";
import { JSX, BoardBottomModalContentProps } from "../../../types";
import { checkUserName } from "../../../helpers/functions/checkUserName";
import { BoardUserPhotos } from "../../Molecules/BoardUserPhotos";
import { BoardBackgroundHeaderWithUserInfo } from "../../Molecules/BoardBackgroundHeaderWithUserInfo";

export const BoardBottomModalContent = (
  props: BoardBottomModalContentProps
): JSX => {
  return (
    <>
      <BoardBackgroundHeaderWithUserInfo
        onPressGoBack={props.onPressGoBack}
        data={props.data}
        isContentLoaded={props.isContentLoaded}
      />
      <BoardUserPhotos
        data={props.data}
        userPhotos={props.userPhotos}
        userName={checkUserName("you", props.data)}
        userNameOfPhotos={checkUserName("Your", props.data)}
        isUserPhotosLoaded={props.isUserPhotosLoaded}
        isPhotosNotExist={props.isPhotosNotExist}
        insets={props.insets}
      />
    </>
  );
};
