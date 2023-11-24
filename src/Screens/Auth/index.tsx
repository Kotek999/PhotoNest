import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { NavigationScreenProps } from "../../../rootTypeList";
import { JSX } from "../../types";
import { SCREEN } from "../../../routes";
import { useDispatch } from "react-redux";
import { getAuthToken } from "../../redux/auth/authToken/action";
import { Background } from "../../components/Atoms/Background";
import { Spinner } from "../../components/Atoms/Spinner";
import { Screen } from "../../components/Atoms/Screen";

export const Auth = ({
  navigation,
}: NavigationScreenProps<SCREEN.Auth>): JSX => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthToken({ redirect: navigation.navigate }));
  }, [dispatch]);

  return (
    <Screen styleOfStatusBar="light">
      <Background>
        <View style={styles.container}>
          <Spinner isFlex={false} />
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
