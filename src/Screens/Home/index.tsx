import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React, { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, Button } from "react-native-ui-lib";
import { NavigationScreenProps } from "../../../rootTypeList";
import { JSX, UserDataInfo } from "../../types";
import { SCREEN } from "../../../routes";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/auth/signOut/action";
import { useToast } from "../../hooks/toast/useToast";
import { ToastAndroid } from "react-native";
import { backHandlerCall } from "../../helpers/functions/backHandlerCall";
import { getUserDataFromFirebase } from "../../helpers/functions/getUserDataFromFirebase";
import { COLORS } from "../../colors";

export const Home = ({
  navigation,
}: NavigationScreenProps<SCREEN.SignUp>): JSX => {
  const { showToast } = useToast();

  const dispatch = useDispatch();

  const [displayName, setDisplayName] = useState<UserDataInfo>("");

  const onPressSignOut = () => {
    dispatch(signOut({ redirect: navigation.navigate }));
    showToast({ message: "Correct Logout", duration: ToastAndroid.SHORT });
  };

  useFocusEffect(backHandlerCall());

  useEffect(() => {
    getUserDataFromFirebase(setDisplayName, "nickname");
  }, []);

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
      {displayName ? (
        <Text
          style={{ margin: 10 }}
        >{`Welcome ${displayName}, have a nice day.`}</Text>
      ) : (
        <FontAwesome5
          name="user-clock"
          size={32}
          style={{ margin: 10 }}
          color={COLORS.orange}
        />
      )}

      <Button onPress={onPressSignOut} label="Sign Out" />
    </View>
  );
};
