import React, { useState, useEffect } from "react";
import { NavigationScreenProps } from "../../../rootTypeList";
import { JSX } from "../../types";
import { SCREEN } from "../../../routes";
import { Screen } from "../../components/Atoms/Screen";
import { login, clearError } from "../../redux/auth/logIn/action";
import { useDispatch, useSelector } from "react-redux";
import { loginLoading } from "../../selectors/userAuth";
import { LoginContent } from "../../components/Organisms/LoginContent";

export const Login = ({
  navigation,
}: NavigationScreenProps<SCREEN.Login>): JSX => {
  const dispatch = useDispatch();
  const isLoading = useSelector(loginLoading);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const onPressGoToSignUp = () => navigation.navigate(SCREEN.SignUp);

  const onPressLogin = () => {
    dispatch(login({ email, password, redirect: navigation.navigate }));
  };

  return (
    <Screen styleOfStatusBar="light">
      <LoginContent
        isLoading={isLoading}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onPressLogin={onPressLogin}
        onPressGoToSignUp={onPressGoToSignUp}
      />
    </Screen>
  );
};
