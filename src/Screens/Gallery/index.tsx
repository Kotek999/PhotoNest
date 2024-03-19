import React, { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { JSX } from "../../types";
import { SCREEN } from "../../../routes";
import { useDispatch } from "react-redux";
import { backHandlerCall } from "../../helpers/functions/backHandlerCall";
import { Screen } from "../../components/Atoms/Screen";
import { showCurrentLoggedUser } from "../../helpers/functions/showCurrentLoggedUser";
import { Header } from "../../components/Molecules/Header";
import { getPhotosFromFirebase } from "../../helpers/functions/getPhotosFromFirebase";
import { getMediaPermissionRequest } from "../../helpers/functions/getMediaPermissionRequest";
import { getPhotoInfo } from "../../helpers/functions/getPhotoInfo";
import { useRefresh } from "../../helpers/functions/useRefresh";
import { COLORS } from "../../colors";
import { NavigationScreenProps } from "../../../rootTypeList";
import { getUserData } from "../../helpers/functions/getUserData";
import { GalleryContent } from "../../components/Organisms/GalleryContent";
import { useNavigation } from "../../hooks/navigation/useNavigation";
import { useUserDataFirebase } from "../../hooks/userDataFirebase/useUserDataFirebase";
import { useVisible } from "../../hooks/visible/useVisible";
import { useLoaded } from "../../hooks/loaded/useLoaded";
import { usePhotoPermission } from "../../hooks/photoPermission/usePhotoPermission";
import { useUserPhotos } from "../../hooks/userPhotos/useUserPhotos";

export const Gallery = ({
  navigation,
  route,
}: NavigationScreenProps<SCREEN.Gallery>): JSX => {
  const dispatch = useDispatch();

  const { userDataFirebase, setUserDataFirebase } = useUserDataFirebase();
  const { isUserVisible, setUserVisible } = useVisible();
  const {
    isContentLoaded,
    isPhotosLoaded,
    refreshing,
    setIsContentLoaded,
    setIsPhotosLoaded,
    setRefreshing,
  } = useLoaded();
  const {
    mediaPermission,
    isPermissionRequest,
    setMediaPermission,
    setIsPermissionRequest,
  } = usePhotoPermission();
  const { photos, addedPhoto, setPhotos, setAddedPhoto } = useUserPhotos();
  const { onPressGoToSettings, onPressGoToProfile } = useNavigation({
    navigation,
    route,
  });

  const addPhoto = () =>
    getPhotoInfo({
      setUserVisible,
      isUserVisible,
      userDataFirebase,
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
    getUserData(setUserDataFirebase);
    showLoggedUser();
    getMediaPermissionRequest(setMediaPermission);
    setIsContentLoaded(true);
  }, [photos]);

  return (
    <Screen styleOfStatusBar="light" bgColor={COLORS.purpleBg}>
      <Header
        avatarDirectPath={userDataFirebase?.avatar?.directPath}
        isUserShow
        isSettingsIconActive={false}
        screenName={SCREEN.Gallery}
        isUserVisible={isUserVisible}
        displayName={userDataFirebase?.nickname}
        onPressGoToProfile={onPressGoToProfile}
        onPressGoToSettings={onPressGoToSettings}
      />
      <GalleryContent
        refreshing={refreshing}
        onRefresh={onRefresh}
        navigation={{ navigation: navigation, route }}
        isContentLoaded={isContentLoaded}
        isPhotosLoaded={isPhotosLoaded}
        isPermissionRequest={isPermissionRequest}
        mediaPermission={mediaPermission}
        addedPhoto={addedPhoto}
        photos={photos}
        displayName={userDataFirebase?.nickname}
        colight={userDataFirebase?.points}
        setIsPermissionRequest={setIsPermissionRequest}
        addPhoto={addPhoto}
      />
    </Screen>
  );
};
