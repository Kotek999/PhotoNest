import textData from "../../../textData.json";
import React, { useState, useEffect } from "react";
import { Text } from "react-native-ui-lib";
import { NavigationScreenProps } from "../../../rootTypeList";
import { JSX } from "../../types";
import { SCREEN } from "../../../routes";
import { ImageTemplate } from "../../components/Atoms/ImageTemplate";
import { SubmitButton } from "../../components/Atoms/SubmitButton";
import { QuestionBox } from "../../components/Atoms/QuestionBox";
import { FormContainer } from "../../components/Atoms/FormContainer";
import { ScreenName } from "../../components/Atoms/ScreenName";
import { Screen } from "../../components/Atoms/Screen";
import { login, clearError } from "../../redux/auth/logIn/action";
import { TextInputWithError } from "../../components/Molecules/TextInputWithError";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "../../hooks/toast/useToast";
import { createError } from "../../helpers/functions/createError";
import { loginLoading, loginState } from "../../selectors/userAuth";
import { Spinner } from "../../components/Atoms/Spinner";
import { useError } from "../../helpers/functions/useError";
import { setStateText } from "../../helpers/functions/setStateText";

export const Login = ({
  navigation,
}: NavigationScreenProps<SCREEN.Login>): JSX => {
  const error = createError(useError(loginState));
  const dispatch = useDispatch();
  const isLoading = useSelector(loginLoading);

  const { toastMessage } = useToast();

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
    <Screen>
      <ImageTemplate>
        {isLoading ? (
          <Spinner />
        ) : (
          <FormContainer>
            <ScreenName title={textData.value.form.login} />
            <TextInputWithError
              value={email}
              authState={loginState}
              placeholder={textData.value.form.email}
              onChangeText={setStateText(setEmail)}
              firstErrorValue={error.invalidEmail}
              secondErrorValue={error.userNotFound}
              thirdErrorValue={error.tooManyRequests}
            />

            <TextInputWithError
              value={password}
              authState={loginState}
              placeholder={textData.value.form.password}
              onChangeText={setStateText(setPassword)}
              firstErrorValue={error.missingPassword}
              secondErrorValue={error.wrongPassword}
              secureTextEntry
            />
            <SubmitButton
              onPress={onPressLogin}
              label={textData.value.form.login}
            />
            <QuestionBox
              onPress={onPressGoToSignUp}
              title={textData.value.form.accountNotExist}
              goTo={textData.value.form.sUButton}
            />
            {toastMessage && <Text>{toastMessage}</Text>}
          </FormContainer>
        )}
      </ImageTemplate>
    </Screen>
  );
};
