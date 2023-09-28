import React from "react";
import { View, Text, Button } from "react-native-ui-lib";
import { NavigationScreenProps } from "../../../rootTypeList";
import { JSX } from "../../types";
import { SCREEN } from "../../../routes";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/auth/signOut/action";
import { useToast } from "../../hooks/toast/useToast";
import { ToastAndroid } from "react-native";
import { userEmail } from "../../selectors/userAuth";

export const Home = ({
  navigation,
}: NavigationScreenProps<SCREEN.SignUp>): JSX => {
  const { showToast } = useToast();

  const dispatch = useDispatch();

  const email = useSelector(userEmail);

  const onPressSignOut = () => {
    dispatch(signOut({ redirect: navigation.navigate }));
    showToast({ message: "Correct Logout", duration: ToastAndroid.SHORT });
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Text>{`Welcome ${email}, have a nice day.`}</Text>
      <Button onPress={onPressSignOut} label="Back" />
    </View>
  );
};
