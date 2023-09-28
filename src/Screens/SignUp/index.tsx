import textData from "../../../textData.json";
import React, { useState, useEffect } from "react";
import { NavigationScreenProps } from "../../../rootTypeList";
import { JSX } from "../../types";
import { SCREEN } from "../../../routes";
import { ImageTemplate } from "../../components/Atoms/ImageTemplate";
import { SubmitButton } from "../../components/Atoms/SubmitButton";
import { QuestionBox } from "../../components/Atoms/QuestionBox";
import { FormContainer } from "../../components/Atoms/FormContainer";
import { ScreenName } from "../../components/Atoms/ScreenName";
import { Screen } from "../../components/Atoms/Screen";
import { signUp, clearError } from "../../redux/auth/signUp/action";
import { useDispatch, useSelector } from "react-redux";
import { signUpState, signUpLoading } from "../../selectors/userAuth";
import { TextInputWithError } from "../../components/Molecules/TextInputWithError";
import { createError } from "../../helpers/functions/createError";
import { useError } from "../../helpers/functions/useError";
import { setStateText } from "../../helpers/functions/setStateText";
import { Spinner } from "../../components/Atoms/Spinner";
import { ruleOfError } from "../../helpers/functions/ruleOfError";

export const SignUp = ({
  navigation,
}: NavigationScreenProps<SCREEN.SignUp>): JSX => {
  const onClickGoToLogin = () => navigation.navigate(SCREEN.Login);

  const error = createError(useError(signUpState));
  const isLoading = useSelector(signUpLoading);

  const [nick, setNick] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const onPressSignUp = () => {
    dispatch(signUp({ nick, email, password, redirect: navigation.navigate }));
  };

  const nickLengthRule = nick.length >= 3;
  const passwordLengthRule = password.length >= 8;
  const emailRule = email !== "";

  return (
    <Screen>
      <ImageTemplate>
        {isLoading ? (
          <Spinner />
        ) : (
          <FormContainer>
            <ScreenName title={textData.value.form.signUp} />
            <TextInputWithError
              value={nick}
              authState={signUpState}
              placeholder={textData.value.form.nick}
              onChangeText={setStateText(setNick)}
              secondErrorValue={ruleOfError(nickLengthRule, error.nickLength)}
              thirdErrorValue={error.nickSpecialCharacter}
            />
            <TextInputWithError
              value={email}
              authState={signUpState}
              placeholder={textData.value.form.email}
              onChangeText={setStateText(setEmail)}
              firstErrorValue={ruleOfError(emailRule, error.emptyField)}
              secondErrorValue={error.invalidEmail}
              thirdErrorValue={error.missingEmail}
              fourthErrorValue={error.emailAlreadyInUse}
            />

            <TextInputWithError
              value={password}
              authState={signUpState}
              placeholder={textData.value.form.password}
              onChangeText={setStateText(setPassword)}
              secondErrorValue={error.missingPassword}
              thirdErrorValue={ruleOfError(
                passwordLengthRule,
                error.passwordLength
              )}
              secureTextEntry
            />
            <SubmitButton
              onPress={onPressSignUp}
              label={textData.value.form.sUButton}
            />
            <QuestionBox
              onPress={onClickGoToLogin}
              title={textData.value.form.accountExist}
              goTo={textData.value.form.login}
            />
          </FormContainer>
        )}
      </ImageTemplate>
    </Screen>
  );
};
