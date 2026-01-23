import React, { useState, useEffect } from "react";
import { BackHandler } from "react-native";
import { JSX } from "../../types";
import { Screen } from "../../components/Atoms/Screen";
import { COLORS } from "../../colors";
import { Header } from "../../components/Molecules/Header";
import { SCREEN } from "../../../routes";
import { NavigationScreenProps } from "../../../rootTypeList";
import { useNavigation } from "../../hooks/navigation/useNavigation";
import { getUserData } from "../../helpers/functions/getUserData";
import { getUserDataFromFirebase } from "../../helpers/functions/getUserDataFromFirebase";
import { useUserDataFirebase } from "../../hooks/userDataFirebase/useUserDataFirebase";
import { ContentData } from "../../types";
import { useReduxAction } from "../../hooks/dispatch/useReduxDispatch";
import { signOut } from "../../redux/auth/signOut/action";
import { SettingsContent } from "../../components/Organisms/SettingsContent";
import { settingsOptionsData } from "../../components/Data/SettingsOptions";

export const Settings = ({
  navigation,
  route,
}: NavigationScreenProps<SCREEN.Settings>): JSX => {
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<ContentData[]>([]);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const { onPressSignOut } = useReduxAction({
    action: signOut,
    redirect: navigation.navigate,
  });

  const onPressSignOutAndExit = () => {
    onPressSignOut();
    BackHandler.exitApp();
  };

  const { userDataFirebase, setUserDataFirebase } = useUserDataFirebase();
  const { onPressGoBack } = useNavigation({ navigation, route });

  useEffect(() => {
    getUserData(setUserDataFirebase);
    setIsContentLoaded(true);
  }, []);

  const userData = getUserDataFromFirebase(userDataFirebase);

  return (
    <Screen styleOfStatusBar="light" bgColor={COLORS.purpleBg}>
      <Header
        isSettingsIconActive
        isUserShow={false}
        screenName={SCREEN.Settings}
        onPressGoToSettings={onPressGoBack}
      />
      <SettingsContent
        isContentLoaded={isContentLoaded}
        userData={userData}
        settingsOptionsData={settingsOptionsData}
        selectedTitle={selectedTitle}
        selectedOption={selectedOption}
        setSelectedTitle={setSelectedTitle}
        setSelectedOption={setSelectedOption}
        onPressSignOutAndExit={onPressSignOutAndExit}
      />
    </Screen>
  );
};
