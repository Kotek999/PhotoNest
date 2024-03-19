import React from "react";
import { NavigationScreenProps } from "../../../rootTypeList";
import { JSX } from "../../types";
import { SCREEN } from "../../../routes";
import { Screen } from "../../components/Atoms/Screen";
import { signUp, clearError } from "../../redux/auth/signUp/action";
import { signUpLoading } from "../../selectors/userAuth";
import { SignUpContent } from "../../components/Organisms/SignUpContent";
import { useAuth } from "../../hooks/auth/useAuth";

export const SignUp = ({
  navigation,
  route,
}: NavigationScreenProps<SCREEN.SignUp>): JSX => {
  const {
    isLoading,
    nick,
    setNick,
    email,
    setEmail,
    password,
    setPassword,
    onPressAuth,
    onPressGoToLogin,
  } = useAuth(
    { navigation: navigation, route: route },
    { dispatchValue: clearError, loading: signUpLoading, action: signUp }
  );
  return (
    <Screen styleOfStatusBar="light">
      <SignUpContent
        isLoading={isLoading}
        nick={nick}
        setNick={setNick}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onPressSignUp={onPressAuth}
        onPressGoToLogin={onPressGoToLogin}
      />
    </Screen>
  );
};
