import React, { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { JSX } from "../../types";
import { Screen } from "../../components/Atoms/Screen";
import { COLORS } from "../../colors";
import { SCREEN } from "../../../routes";
import { NavigationScreenProps } from "../../../rootTypeList";
import { getUserData } from "../../helpers/functions/getUserData";
import { getUserDataForKey } from "../../helpers/functions/getUserDataForKey";
import { ScoreBoardContent } from "../../components/Organisms/ScoreBoardContent";
import { useNavigation } from "../../hooks/navigation/useNavigation";
import { useLoaded } from "../../hooks/loaded/useLoaded";
import { useUserDataFirebase } from "../../hooks/userDataFirebase/useUserDataFirebase";

export const ScoreBoard = ({
  navigation,
  route,
}: NavigationScreenProps<SCREEN.ScoreBoard>): JSX => {
  const {
    isContentLoaded,
    isBoardDataLoaded,
    setIsContentLoaded,
    setIsBoardDataLoaded,
  } = useLoaded();
  const {
    allUsersData,
    userDataFirebase,
    setAllUsersData,
    setUserDataFirebase,
  } = useUserDataFirebase();

  const insets = useSafeAreaInsets();

  const { onPressGoBack, onPressGoToProfile } = useNavigation({
    navigation,
    route,
  });

  useEffect(() => {
    getUserData(setUserDataFirebase);
  }, []);

  useEffect(() => {
    getUserDataForKey(allUsersData, setAllUsersData, setIsBoardDataLoaded);
    setIsContentLoaded(true);
  }, [userDataFirebase]);

  return (
    <Screen styleOfStatusBar="light" bgColor={COLORS.purpleBg}>
      <ScoreBoardContent
        isContentLoaded={isContentLoaded}
        isBoardDataLoaded={isBoardDataLoaded}
        insets={insets}
        userDataFirebase={userDataFirebase}
        allUsersData={allUsersData}
        onPressGoBack={onPressGoBack}
        onPressGoToProfile={onPressGoToProfile}
      />
    </Screen>
  );
};
