import textData from "../../../../textData.json";
import React, { useState } from "react";
import { View } from "react-native-ui-lib";
import { JSX, OnPress, SignUpContentProps } from "../../../types";
import { ImageTemplate } from "../../../components/Atoms/ImageTemplate";
import { SubmitButton } from "../../../components/Atoms/SubmitButton";
import { QuestionBox } from "../../../components/Atoms/QuestionBox";
import { FormContainer } from "../../../components/Atoms/FormContainer";
import { ScreenName } from "../../../components/Atoms/ScreenName";
import { signUpState } from "../../../selectors/userAuth";
import { TextInputWithError } from "../../../components/Molecules/TextInputWithError";
import { createError } from "../../../helpers/functions/createError";
import { useError } from "../../../helpers/functions/useError";
import { setStateText } from "../../../helpers/functions/setStateText";
import { ruleOfError } from "../../../helpers/functions/ruleOfError";
import { ScrollViewLogin } from "../../../components/Atoms/ScrollViewLogin";
import { BlurSpinner } from "../../../components/Atoms/BlurSpinner";
import { leadingAccessoryIcon } from "../../../components/Data/Maps";
import { TrailingEyeIcon } from "../../../components/Atoms/TrailingEyeIcon";

export const SignUpContent = (props: SignUpContentProps): JSX => {
  const error = createError(useError(signUpState));
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const nickLengthRule = props.nick.length >= 3;
  const passwordLengthRule = props.password.length >= 8;
  const emailRule = props.email !== "";

  return (
    <View style={{ flex: 1 }}>
      {props.isLoading ? (
        <BlurSpinner />
      ) : (
        <ImageTemplate>
          <FormContainer>
            <ScreenName title={textData.value.form.signUp} />
            <ScrollViewLogin>
              <TextInputWithError
                value={props.nick}
                authState={signUpState}
                placeholder={textData.value.form.nick}
                onChangeText={setStateText(props.setNick)}
                secondErrorValue={ruleOfError(nickLengthRule, error.nickLength)}
                thirdErrorValue={error.nickSpecialCharacter}
                leadingAccessory={leadingAccessoryIcon("nick")}
              />
              <TextInputWithError
                value={props.email}
                authState={signUpState}
                placeholder={textData.value.form.email}
                onChangeText={setStateText(props.setEmail)}
                firstErrorValue={ruleOfError(emailRule, error.emptyField)}
                secondErrorValue={error.invalidEmail}
                thirdErrorValue={error.missingEmail}
                fourthErrorValue={error.emailAlreadyInUse}
                leadingAccessory={leadingAccessoryIcon("email")}
              />

              <TextInputWithError
                value={props.password}
                authState={signUpState}
                placeholder={textData.value.form.password}
                onChangeText={setStateText(props.setPassword)}
                secondErrorValue={error.missingPassword}
                thirdErrorValue={ruleOfError(
                  passwordLengthRule,
                  error.passwordLength
                )}
                leadingAccessory={leadingAccessoryIcon("password")}
                trailingAccessory={
                  <TrailingEyeIcon
                    setShowPassword={setShowPassword}
                    showPassword={showPassword}
                  />
                }
                secureTextEntry={showPassword}
              />
              <SubmitButton
                onPress={props.onPressSignUp as OnPress}
                label={textData.value.form.sUButton}
              />
              <QuestionBox
                onPress={props.onPressGoToLogin as OnPress}
                title={textData.value.form.accountExist}
                goTo={textData.value.form.login}
              />
            </ScrollViewLogin>
          </FormContainer>
        </ImageTemplate>
      )}
    </View>
  );
};
