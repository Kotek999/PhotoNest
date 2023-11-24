import React, { useState, useEffect } from "react";
import {
  JSX,
  UserPhotosData,
  UserDataFirebase,
  VisibleLength,
} from "../../types";
import { Screen } from "../../components/Atoms/Screen";
import { COLORS } from "../../colors";
import { Header } from "../../components/Molecules/Header";
import { SCREEN } from "../../../routes";
import { signOut } from "../../redux/auth/signOut/action";
import { useToast } from "../../hooks/toast/useToast";
import { ToastAndroid } from "react-native";
import { useDispatch } from "react-redux";
import { NavigationScreenProps } from "../../../rootTypeList";
import { getUserPhotosFromFirebase } from "../../helpers/functions/getUserPhotosFromFirebase";
import { getUserData } from "../../helpers/functions/getUserData";
import { getUserDataFromFirebase } from "../../helpers/functions/getUserDataFromFirebase";
import { UserPhotosContent } from "../../components/Organisms/UserPhotosContent";

export const Profile = ({
  navigation,
}: NavigationScreenProps<SCREEN.Profile>): JSX => {
  const { showToast } = useToast();
  const dispatch = useDispatch();

  const [userDataFirebase, setUserDataFirebase] = useState<UserDataFirebase>();
  const [userPhotos, setUserPhotos] = useState<UserPhotosData[]>([]);
  const [isUserPhotosLoaded, setIsUserPhotosLoaded] = useState<boolean>(false);
  const [isPhotosNotExist, setIsPhotosNotExist] = useState<boolean>(false);
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);

  const [isDialogVisible, setDialogVisible] = useState<boolean>(false);
  const [visibleLength, setVisibleLength] = useState<VisibleLength>(10);
  const onPressTruncate = () => {
    setVisibleLength(userData?.id && userData?.id.length);
  };

  const onPressGoToSettings = () => navigation.navigate(SCREEN.Settings);
  const onPressOpenDialog = () => setDialogVisible(true);
  const onPressCloseDialog = () => setDialogVisible(false);

  const onPressSignOut = () => {
    dispatch(signOut({ redirect: navigation.navigate }));
    showToast({ message: "Correct Logout", duration: ToastAndroid.SHORT });
  };

  const getUserPhotos = () => {
    getUserPhotosFromFirebase(
      setUserPhotos,
      setIsUserPhotosLoaded,
      setIsPhotosNotExist
    );
  };

  useEffect(() => {
    getUserPhotos();
  }, []);

  useEffect(() => {
    getUserData(setUserDataFirebase);
    setIsContentLoaded(true);
  }, [userPhotos]);

  const userData = getUserDataFromFirebase(userDataFirebase);

  return (
    <Screen styleOfStatusBar="light" bgColor={COLORS.purpleBg}>
      <Header
        isSettingsIconActive={false}
        isUserShow={false}
        screenName={SCREEN.Profile}
        onPressGoToSettings={onPressGoToSettings}
      />
      <UserPhotosContent
        isContentLoaded={isContentLoaded}
        isUserPhotosLoaded={isUserPhotosLoaded}
        isPhotosNotExist={isPhotosNotExist}
        isDialogVisible={isDialogVisible}
        userData={userData}
        userPhotos={userPhotos}
        visibleLength={visibleLength}
        onPressSignOut={onPressSignOut}
        onPressOpenDialog={onPressOpenDialog}
        onPressCloseDialog={onPressCloseDialog}
        onPressTruncate={onPressTruncate}
      />
    </Screen>
  );
};
