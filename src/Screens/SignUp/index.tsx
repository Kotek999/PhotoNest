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
import { signUp } from "../../redux/auth/signUp/action";
import { RootState } from "../../types";
import { useDispatch, useSelector } from "react-redux";

export const SignUp = ({
  navigation,
}: NavigationScreenProps<SCREEN.SignUp>) => {
  const onClickGoToLogin = () => navigation.navigate(SCREEN.Login);

  const [nick, setNick] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const signUpState = useSelector((state: RootState) => state.signUp);

  const onPressSignUp = () => {
    dispatch(signUp({ nick, email, password, redirect: navigation.navigate }));
  };

  return (
    <Screen>
      <ImageTemplate>
        <FormContainer>
          <ScreenName title="Sign Up" />

          <TextInput
            value={nick}
            placeholder="Nick"
            onChangeText={(text: string) => setNick(text)}
          />
          <TextInput
            value={email}
            placeholder="Email"
            onChangeText={(text: string) => setEmail(text)}
          />
          <TextInput
            value={password}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text: string) => setPassword(text)}
          />

          <SubmitButton onPress={onPressSignUp} label="SignUp" />

          <QuestionBox
            onPress={onClickGoToLogin}
            title="Already have an account?"
            goTo="Login"
          />
          {signUpState.error && <Text>SignUp Error: {signUpState.error}</Text>}
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
