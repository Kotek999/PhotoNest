import React from "react";
import { NavigationScreenProps } from "../../../rootTypeList";
import { JSX } from "../../types";
import { SCREEN } from "../../../routes";
import { Screen } from "../../components/Atoms/Screen";
import { LoginContent } from "../../components/Organisms/LoginContent";
import { clearError, login } from "../../redux/auth/logIn/action";
import { loginLoading } from "../../selectors/userAuth";
import { useAuth } from "../../hooks/auth/useAuth";

export const Login = ({
  navigation,
  route,
}: NavigationScreenProps<SCREEN.Login>): JSX => {
  const {
    isLoading,
    email,
    setEmail,
    password,
    setPassword,
    onPressAuth,
    onPressGoToSignUp,
  } = useAuth(
    { navigation: navigation, route: route },
    { dispatchValue: clearError, loading: loginLoading, action: login }
  );
  return (
    <Screen styleOfStatusBar="light">
      <LoginContent
        isLoading={isLoading}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onPressLogin={onPressAuth}
        onPressGoToSignUp={onPressGoToSignUp}
      />
    </Screen>
  );
};
