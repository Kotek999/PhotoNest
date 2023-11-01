import textData from "../../../../textData.json";
import React, { useState } from "react";
import { Text, View } from "react-native-ui-lib";
import { JSX, AuthProps as LoginContentProps, OnPress } from "../../../types";
import { ImageTemplate } from "../../../components/Atoms/ImageTemplate";
import { SubmitButton } from "../../../components/Atoms/SubmitButton";
import { QuestionBox } from "../../../components/Atoms/QuestionBox";
import { FormContainer } from "../../../components/Atoms/FormContainer";
import { ScreenName } from "../../../components/Atoms/ScreenName";
import { TextInputWithError } from "../../../components/Molecules/TextInputWithError";
import { loginState } from "../../../selectors/userAuth";
import { setStateText } from "../../../helpers/functions/setStateText";
import { BlurSpinner } from "../../../components/Atoms/BlurSpinner";
import { leadingAccessoryIcon } from "../../../components/Data/Maps";
import { TrailingEyeIcon } from "../../../components/Atoms/TrailingEyeIcon";
import { createError } from "../../../helpers/functions/createError";
import { useError } from "../../../helpers/functions/useError";
import { useToast } from "../../../hooks/toast/useToast";

export const LoginContent = (props: LoginContentProps): JSX => {
  const error = createError(useError(loginState));
  const { toastMessage } = useToast();
  const [showPassword, setShowPassword] = useState<boolean>(true);
  return (
    <View style={{ flex: 1 }}>
      {props.isLoading ? (
        <BlurSpinner />
      ) : (
        <ImageTemplate>
          <FormContainer>
            <ScreenName title={textData.value.form.login} />
            <TextInputWithError
              value={props.email}
              authState={loginState}
              placeholder={textData.value.form.email}
              onChangeText={setStateText(props.setEmail)}
              firstErrorValue={error.invalidEmail}
              secondErrorValue={error.userNotFound}
              thirdErrorValue={error.tooManyRequests}
              leadingAccessory={leadingAccessoryIcon("email")}
            />

            <TextInputWithError
              value={props.password}
              authState={loginState}
              placeholder={textData.value.form.password}
              onChangeText={setStateText(props.setPassword)}
              firstErrorValue={error.missingPassword}
              secondErrorValue={error.wrongPassword}
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
              onPress={props.onPressLogin as OnPress}
              label={textData.value.form.login}
            />
            <QuestionBox
              onPress={props.onPressGoToSignUp as OnPress}
              title={textData.value.form.accountNotExist}
              goTo={textData.value.form.sUButton}
            />
            {toastMessage && <Text>{toastMessage}</Text>}
          </FormContainer>
        </ImageTemplate>
      )}
    </View>
  );
};
