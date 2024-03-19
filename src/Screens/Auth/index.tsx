import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { NavigationScreenProps } from "../../../rootTypeList";
import { JSX } from "../../types";
import { SCREEN } from "../../../routes";
import { getAuthToken } from "../../redux/auth/authToken/action";
import { Background } from "../../components/Atoms/Background";
import { Spinner } from "../../components/Atoms/Spinner";
import { Screen } from "../../components/Atoms/Screen";
import { useReduxActionWithDispatch } from "../../hooks/dispatch/useReduxDispatch";

export const Auth = ({
  navigation,
}: NavigationScreenProps<SCREEN.Auth>): JSX => {
  const { useDispatchEffect } = useReduxActionWithDispatch();
  const token = getAuthToken({ redirect: navigation.navigate });

  useDispatchEffect(token, false);
  return (
    <Screen styleOfStatusBar="light">
      <Background>
        <View style={styles.container}>
          <Spinner isDefaultOptions={false} isTextExist />
        </View>
      </Background>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
