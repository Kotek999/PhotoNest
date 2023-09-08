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
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { COLORS } from "../../colors";

export const Login = ({ navigation }: NavigationScreenProps<SCREEN.Login>) => {
  const onClickGoToTest = () => navigation.navigate(SCREEN.Test);
  const onClickGoToSignUp = () => navigation.navigate(SCREEN.SignUp);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
          <SubmitButton onPress={onClickGoToTest} label="Login" />
          <QuestionBox
            onPress={onClickGoToSignUp}
            title="Don't have an account?"
            goTo="SignUp"
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
