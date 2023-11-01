import React, { useEffect, useState } from "react";
import { RefreshControl } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { JSX, UserDataInfo, ImageAssetsData } from "../../types";
import { SCREEN } from "../../../routes";
import { useDispatch } from "react-redux";
import { backHandlerCall } from "../../helpers/functions/backHandlerCall";
import { getUserDataFromFirebase } from "../../helpers/functions/getUserDataFromFirebase";
import { Screen } from "../../components/Atoms/Screen";
import { showCurrentLoggedUser } from "../../helpers/functions/showCurrentLoggedUser";
import { Header } from "../../components/Molecules/Header";
import { ScrollViewContainer } from "../../components/Atoms/ScrollViewContainer";
import { getPhotosFromFirebase } from "../../helpers/functions/getPhotosFromFirebase";
import { getMediaPermissionRequest } from "../../helpers/functions/getMediaPermissionRequest";
import { getPhotoInfo } from "../../helpers/functions/getPhotoInfo";
import { useRefresh } from "../../helpers/functions/useRefresh";
import { AddPhotoButton } from "../../components/Atoms/AddPhotoButton";
import { PhotoContent } from "../../components/Organisms/PhotoContent";
import { COLORS } from "../../colors";
import { NavigationScreenProps } from "../../../rootTypeList";

export const Gallery = ({
  navigation,
}: NavigationScreenProps<SCREEN.Gallery>): JSX => {
  const dispatch = useDispatch();

  const [displayName, setDisplayName] = useState<UserDataInfo>("");
  const [isUserVisible, setUserVisible] = useState<boolean>(false);
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);

  const [mediaPermission, setMediaPermission] = useState<boolean | null>(null);

  const [photos, setPhotos] = useState<ImageAssetsData[]>([]);
  const [isPhotosLoaded, setIsPhotosLoaded] = useState<boolean>(false);

  const [isPermissionRequest, setIsPermissionRequest] =
    useState<boolean>(false);

  const [addedPhoto, setAddedPhoto] = useState<string>("");
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onPressGoToSettings = () => navigation.navigate(SCREEN.Settings);
  const onPressGoToProfile = () => navigation.navigate(SCREEN.Profile);

  const addPhoto = () =>
    getPhotoInfo({
      displayName,
      setAddedPhoto,
      dispatch,
      setPhotos,
      setIsPhotosLoaded,
    });

  const showLoggedUser = () =>
    showCurrentLoggedUser(setUserVisible, isUserVisible);

  useFocusEffect(backHandlerCall());

  const getPhotos = () => {
    getPhotosFromFirebase(setPhotos, setIsPhotosLoaded);
  };

  const onRefresh = useRefresh({ setRefreshing, getPhotos, showLoggedUser });

  useEffect(() => {
    getPhotos();
  }, []);

  useEffect(() => {
    getUserDataFromFirebase(setDisplayName, "nickname");
    if (displayName) {
      showLoggedUser();
    }
    getMediaPermissionRequest(setMediaPermission);
    setIsContentLoaded(true);
  }, [photos]);

  return (
    <Screen styleOfStatusBar="dark">
      <Header
        isUserShow
        isSettingsIconActive={false}
        screenName={SCREEN.Gallery}
        isUserVisible={isUserVisible}
        displayName={displayName}
        onPressGoToProfile={onPressGoToProfile}
        onPressGoToSettings={onPressGoToSettings}
      />
      <ScrollViewContainer
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={COLORS.orange}
            colors={[COLORS.orange]}
          />
        }
      >
        <PhotoContent
          isContentLoaded={isContentLoaded}
          isPhotosLoaded={isPhotosLoaded}
          isPermissionRequest={isPermissionRequest}
          mediaPermission={mediaPermission}
          addedPhoto={addedPhoto}
          photos={photos}
          displayName={displayName}
        />
      </ScrollViewContainer>

      <AddPhotoButton
        mediaPermission={mediaPermission}
        setIsPermissionRequest={setIsPermissionRequest}
        addPhoto={addPhoto}
      />
    </Screen>
  );
};
