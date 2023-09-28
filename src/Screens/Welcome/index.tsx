import React from "react";
import { NavigationScreenProps } from "../../../rootTypeList";
import { JSX } from "../../types";
import { SCREEN } from "../../../routes";
import { Screen } from "../../components/Atoms/Screen";
import { Slogan } from "../../components/Atoms/Slogan";
import { ButtonsBox } from "../../components/Atoms/ButtonsBox";
import { Background } from "../../components/Atoms/Background";

export const Welcome = ({
  navigation,
}: NavigationScreenProps<SCREEN.SignUp>): JSX => {
  const onPressGoToLogin = () => navigation.navigate(SCREEN.Login);
  const onPressGoToSignUp = () => navigation.navigate(SCREEN.SignUp);

  return (
    <Screen>
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
