import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { NavigationScreenProps } from "../../../rootTypeList";
import { JSX } from "../../types";
import { SCREEN } from "../../../routes";
import { Screen } from "../../components/Atoms/Screen";
import { Slogan } from "../../components/Atoms/Slogan";
import { ButtonsBox } from "../../components/Atoms/ButtonsBox";
import { Background } from "../../components/Atoms/Background";
import { backHandlerCall } from "../../helpers/functions/backHandlerCall";
import { useNavigation } from "../../hooks/navigation/useNavigation";

export const Welcome = ({
  navigation,
  route,
}: NavigationScreenProps<SCREEN.Welcome>): JSX => {
  const { onPressGoToLogin, onPressGoToSignUp } = useNavigation({
    navigation,
    route,
  });
  useFocusEffect(backHandlerCall());
  return (
    <Screen styleOfStatusBar="light">
      <Background>
        <Slogan />
        <ButtonsBox
          onPressGoToLogin={onPressGoToLogin}
          onPressGoToSignUp={onPressGoToSignUp}
        />
      </Background>
    </Screen>
  );
};
