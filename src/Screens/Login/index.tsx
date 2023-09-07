import React from "react";
import { NavigationScreenProps } from "../../../rootTypeList";
import { SCREEN } from "../../../routes";
import { ImageTemplate } from "../../components/Atoms/ImageTemplate";
import { TextInput } from "../../components/Atoms/TextInput";
import { SubmitButton } from "../../components/Atoms/SubmitButton";
import { QuestionBox } from "../../components/Atoms/QuestionBox";
import { FormContainer } from "../../components/Atoms/FormContainer";
import { ScreenName } from "../../components/Atoms/ScreenName";

export const Login = ({ navigation }: NavigationScreenProps<SCREEN.Login>) => {
  const onClickGoToTest = () => navigation.navigate(SCREEN.Test);

  return (
    <ImageTemplate>
      <FormContainer>
        <ScreenName title="Login" />

        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" secureTextEntry />

        <SubmitButton onPress={onClickGoToTest} label="Login" />

        <QuestionBox
          onPress={onClickGoToTest}
          title="Don't have an account?"
          goTo="SignUp"
        />
      </FormContainer>
    </ImageTemplate>
  );
};
