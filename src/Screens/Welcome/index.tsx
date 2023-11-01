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

export const Welcome = ({
  navigation,
}: NavigationScreenProps<SCREEN.SignUp>): JSX => {
  const onPressGoToLogin = () => navigation.navigate(SCREEN.Login);
  const onPressGoToSignUp = () => navigation.navigate(SCREEN.SignUp);

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
