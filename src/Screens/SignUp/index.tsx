import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { View } from "react-native-ui-lib";
import { NavigationScreenProps } from "../../../rootTypeList";
import { SCREEN } from "../../../routes";
import { ImageTemplate } from "../../components/Atoms/ImageTemplate";
import { TextInput } from "../../components/Atoms/TextInput";
import { SubmitButton } from "../../components/Atoms/SubmitButton";
import { QuestionBox } from "../../components/Atoms/QuestionBox";
import { FormContainer } from "../../components/Atoms/FormContainer";
import { ScreenName } from "../../components/Atoms/ScreenName";
import { Screen } from "../../components/Atoms/Screen";
import { COLORS } from "../../colors";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const SignUp = ({
  navigation,
}: NavigationScreenProps<SCREEN.SignUp>) => {
  const onClickGoToTest = () => navigation.navigate(SCREEN.Test);
  const onClickGoToLogin = () => navigation.navigate(SCREEN.Login);

  const [nick, setNick] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
    } catch (error: any) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
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

          <SubmitButton onPress={() => signUp()} label="SignUp" />

          <QuestionBox
            onPress={onClickGoToLogin}
            title="Already have an account?"
            goTo="Login"
          />
          {loading && (
            <View style={{ margin: 20 }}>
              <ActivityIndicator size="large" color={COLORS.orange} />
            </View>
          )}
        </FormContainer>
      </ImageTemplate>
    </Screen>
  );
};
