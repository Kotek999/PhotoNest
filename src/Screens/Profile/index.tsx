import React, { useEffect } from "react";
import { BackHandler } from "react-native";
import { JSX } from "../../types";
import { Screen } from "../../components/Atoms/Screen";
import { COLORS } from "../../colors";
import { Header } from "../../components/Molecules/Header";
import { SCREEN } from "../../../routes";
import { signOut } from "../../redux/auth/signOut/action";
import { NavigationScreenProps } from "../../../rootTypeList";
import { getUserPhotosFromFirebase } from "../../helpers/functions/getUserPhotosFromFirebase";
import { getUserData } from "../../helpers/functions/getUserData";
import { getUserDataFromFirebase } from "../../helpers/functions/getUserDataFromFirebase";
import { UserPhotosContent } from "../../components/Organisms/UserPhotosContent";
import { auth } from "../../../FirebaseConfig";
import { useReduxAction } from "../../hooks/dispatch/useReduxDispatch";
import { useNavigation } from "../../hooks/navigation/useNavigation";
import { useUserPhotos } from "../../hooks/userPhotos/useUserPhotos";
import { useLoaded } from "../../hooks/loaded/useLoaded";
import { useUserDataFirebase } from "../../hooks/userDataFirebase/useUserDataFirebase";
import { useVisible } from "../../hooks/visible/useVisible";

export const Profile = ({
  navigation,
  route,
}: NavigationScreenProps<SCREEN.Profile>): JSX => {
  const { userPhotos, isPhotosNotExist, setUserPhotos, setIsPhotosNotExist } =
    useUserPhotos();
  const {
    isUserPhotosLoaded,
    isContentLoaded,
    setIsUserPhotosLoaded,
    setIsContentLoaded,
  } = useLoaded();
  const { userDataFirebase, setUserDataFirebase } = useUserDataFirebase();
  const { isDialogVisible, visibleLength, setDialogVisible, setVisibleLength } =
    useVisible();

  const onPressTruncate = () => {
    setVisibleLength(userData?.id && userData?.id.length);
  };

  const onPressOpenDialog = () => setDialogVisible(true);
  const onPressCloseDialog = () => setDialogVisible(false);

  const { onPressGoToSettings } = useNavigation({ navigation, route });
  const { onPressSignOut } = useReduxAction({
    action: signOut,
    redirect: navigation.navigate,
  });

  const onPressSignOutAndExit = () => {
    onPressSignOut();
    BackHandler.exitApp();
  };

  const getUserPhotos = () => {
    getUserPhotosFromFirebase(
      setUserPhotos,
      setIsUserPhotosLoaded,
      setIsPhotosNotExist,
      auth.currentUser?.uid
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
        onPressSignOut={onPressSignOutAndExit}
        onPressOpenDialog={onPressOpenDialog}
        onPressCloseDialog={onPressCloseDialog}
        onPressTruncate={onPressTruncate}
      />
    </Screen>
  );
};
