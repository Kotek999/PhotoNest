import React from "react";
import { NavigationScreenProps } from "../../../rootTypeList";
import { SCREEN } from "../../../routes";
import { ImageTemplate } from "../../components/Atoms/ImageTemplate";
import { TextInput } from "../../components/Atoms/TextInput";
import { SubmitButton } from "../../components/Atoms/SubmitButton";
import { QuestionBox } from "../../components/Atoms/QuestionBox";
import { FormContainer } from "../../components/Atoms/FormContainer";
import { ScreenName } from "../../components/Atoms/ScreenName";
import { Screen } from "../../components/Atoms/Screen";

export const SignUp = ({
  navigation,
}: NavigationScreenProps<SCREEN.SignUp>) => {
  const onClickGoToTest = () => navigation.navigate(SCREEN.Test);
  const onClickGoToLogin = () => navigation.navigate(SCREEN.Login);

  return (
    <Screen>
      <ImageTemplate>
        <FormContainer>
          <ScreenName title="Sign Up" />

          <TextInput placeholder="Nick" />
          <TextInput placeholder="Email" />
          <TextInput placeholder="Password" secureTextEntry />

          <SubmitButton onPress={onClickGoToTest} label="SignUp" />

          <QuestionBox
            onPress={onClickGoToLogin}
            title="Already have an account?"
            goTo="Login"
          />
        </FormContainer>
      </ImageTemplate>
    </Screen>
  );
};
