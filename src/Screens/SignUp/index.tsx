import React, { useState, useEffect } from "react";
import { NavigationScreenProps } from "../../../rootTypeList";
import { JSX } from "../../types";
import { SCREEN } from "../../../routes";
import { Screen } from "../../components/Atoms/Screen";
import { signUp, clearError } from "../../redux/auth/signUp/action";
import { useDispatch, useSelector } from "react-redux";
import { signUpLoading } from "../../selectors/userAuth";
import { SignUpContent } from "../../components/Organisms/SignUpContent";

export const SignUp = ({
  navigation,
}: NavigationScreenProps<SCREEN.SignUp>): JSX => {
  const isLoading = useSelector(signUpLoading);

  const [nick, setNick] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const onPressGoToLogin = () => navigation.navigate(SCREEN.Login);

  const onPressSignUp = () => {
    dispatch(signUp({ nick, email, password, redirect: navigation.navigate }));
  };

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
        onPressSignUp={onPressSignUp}
        onPressGoToLogin={onPressGoToLogin}
      />
    </Screen>
  );
};
