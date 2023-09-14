import React, { useState } from "react";
import { Text } from "react-native-ui-lib";
import { NavigationScreenProps } from "../../../rootTypeList";
import { SCREEN } from "../../../routes";
import { ImageTemplate } from "../../components/Atoms/ImageTemplate";
import { TextInput } from "../../components/Atoms/TextInput";
import { SubmitButton } from "../../components/Atoms/SubmitButton";
import { QuestionBox } from "../../components/Atoms/QuestionBox";
import { FormContainer } from "../../components/Atoms/FormContainer";
import { ScreenName } from "../../components/Atoms/ScreenName";
import { Screen } from "../../components/Atoms/Screen";
import { login } from "../../redux/auth/logIn/action";
import { RootState } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "../../hooks/toast/useToast";

export const Login = ({ navigation }: NavigationScreenProps<SCREEN.Login>) => {
  const onPressGoToSignUp = () => navigation.navigate(SCREEN.SignUp);

  const { toastMessage } = useToast();

  const dispatch = useDispatch();
  const loginState = useSelector((state: RootState) => state.login);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [loading, setLoading] = useState<boolean>(false);

  const onPressLogin = () => {
    dispatch(login({ email, password, redirect: navigation.navigate }));
  };

  return (
    <Screen>
      <ImageTemplate>
        <FormContainer>
          <ScreenName title="Login" />
          <TextInput
            value={email}
            placeholder="Email"
            onChangeText={(text: string) => setEmail(text)}
          />
          <TextInput
            value={password}
            placeholder="Password"
            onChangeText={(text: string) => setPassword(text)}
            secureTextEntry
          />
          <SubmitButton onPress={onPressLogin} label="Login" />
          <QuestionBox
            onPress={onPressGoToSignUp}
            title="Don't have an account?"
            goTo="SignUp"
          />
          {toastMessage && <Text>{toastMessage}</Text>}
          {loginState.error && <Text>Login Error: {loginState.error}</Text>}
          {/* {loading && (
            <View style={{ margin: 20 }}>
              <ActivityIndicator size="large" color={COLORS.orange} />
            </View>
          )} */}
        </FormContainer>
      </ImageTemplate>
    </Screen>
  );
};
