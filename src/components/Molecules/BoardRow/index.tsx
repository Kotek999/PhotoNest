import React from "react";
import { JSX, BoardRowProps } from "../../../types";
import { BottomModal } from "../../Atoms/BottomModal";
import { TouchableRowWithUserInfo } from "../../Atoms/TouchableRowWithUserInfo";
import { useBottomModal } from "../../../helpers/functions/useBottomModal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getUserPhotosFromFirebase } from "../../../helpers/functions/getUserPhotosFromFirebase";
import { BoardBottomModalContent } from "../BoardBottomModalContent";
import { useUserPhotos } from "../../../hooks/userPhotos/useUserPhotos";
import { useLoaded } from "../../../hooks/loaded/useLoaded";

export const BoardRow = (props: BoardRowProps): JSX => {
  const { userPhotos, isPhotosNotExist, setUserPhotos, setIsPhotosNotExist } =
    useUserPhotos();
  const { isUserPhotosLoaded, setIsUserPhotosLoaded } = useLoaded();

  const modal = useBottomModal();
  const insets = useSafeAreaInsets();

  const getUserPhotos = () => {
    getUserPhotosFromFirebase(
      setUserPhotos,
      setIsUserPhotosLoaded,
      setIsPhotosNotExist,
      props.data.uid
    );
  };

  const onPressGetPhotos = () => {
    modal.onPressOpenModal(0);
    getUserPhotos();
  };

  return (
    <>
      <TouchableRowWithUserInfo
        data={props.data}
        onPressGetPhotos={onPressGetPhotos}
      />
      <BottomModal
        ref={modal.bottomSheetModalRef}
        enableContentPanningGesture={false}
        snapPointsValue="100%"
        onPressCloseModal={modal.onPressCloseModal}
        isDefaultStyle
      >
        <BoardBottomModalContent
          onPressGoBack={modal.onPressCloseModal}
          data={props.data}
          userPhotos={userPhotos}
          isContentLoaded={props.isContentLoaded}
          isUserPhotosLoaded={isUserPhotosLoaded}
          isPhotosNotExist={isPhotosNotExist}
          insets={insets}
        />
      </BottomModal>
    </>
  );
};
