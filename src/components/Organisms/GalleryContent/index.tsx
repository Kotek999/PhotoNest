import React from "react";
import { RefreshControl } from "react-native";
import { JSX, GalleryContentProps } from "../../../types";
import { ScrollViewContainer } from "../../../components/Atoms/ScrollViewContainer";
import { AddPhotoButton } from "../../../components/Atoms/AddPhotoButton";
import { PhotoContent } from "../../../components/Organisms/PhotoContent";
import { COLORS } from "../../../colors";
import { BottomModal } from "../../../components/Atoms/BottomModal";
import { ColightInfo } from "../../../components/Atoms/ColightInfo";
import { useBottomModal } from "../../../helpers/functions/useBottomModal";

export const GalleryContent = (props: GalleryContentProps): JSX => {
  const modal = useBottomModal();

  return (
    <>
      <ScrollViewContainer
        isDefaultOptions
        refreshControl={
          <RefreshControl
            refreshing={props.refreshing}
            onRefresh={props.onRefresh}
            tintColor={COLORS.emerald}
            colors={[COLORS.emerald]}
            progressBackgroundColor={COLORS.purpleBg}
          />
        }
      >
        <PhotoContent
          navigation={props.navigation}
          isContentLoaded={props.isContentLoaded}
          isPhotosLoaded={props.isPhotosLoaded}
          isPermissionRequest={props.isPermissionRequest}
          mediaPermission={props.mediaPermission}
          addedPhoto={props.addedPhoto}
          photos={props.photos}
          displayName={props.displayName}
          colight={props.colight}
          onPressOpenModal={() => modal.onPressOpenModal(0)}
        />
      </ScrollViewContainer>

      <AddPhotoButton
        mediaPermission={props.mediaPermission}
        setIsPermissionRequest={props.setIsPermissionRequest}
        addPhoto={props.addPhoto}
      />
      <BottomModal
        ref={modal.bottomSheetModalRef}
        enableContentPanningGesture
        snapPointsValue="100%"
        onPressCloseModal={modal.onPressCloseModal}
      >
        <ColightInfo />
      </BottomModal>
    </>
  );
};
