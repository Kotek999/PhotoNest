import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React, { useState, useEffect } from "react";
import { ActivityIndicator, Button } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { JSX } from "../../types";
import { Screen } from "../../components/Atoms/Screen";
import { COLORS } from "../../colors";
import { Header } from "../../components/Molecules/Header";
import { SCREEN } from "../../../routes";
import { ScrollViewContainer } from "../../components/Atoms/ScrollViewContainer";
import { signOut } from "../../redux/auth/signOut/action";
import { useToast } from "../../hooks/toast/useToast";
import { ToastAndroid } from "react-native";
import { useDispatch } from "react-redux";
import { NavigationScreenProps } from "../../../rootTypeList";

export const Profile = ({
  navigation,
}: NavigationScreenProps<SCREEN.Profile>): JSX => {
  const { showToast } = useToast();
  const dispatch = useDispatch();

  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);

  const onPressGoToSettings = () => navigation.navigate(SCREEN.Settings);

  const onPressSignOut = () => {
    dispatch(signOut({ redirect: navigation.navigate }));
    showToast({ message: "Correct Logout", duration: ToastAndroid.SHORT });
  };

  useEffect(() => {
    setIsContentLoaded(true);
  }, []);

  return (
    <Screen styleOfStatusBar="dark">
      <Header
        isSettingsIconActive={false}
        isUserShow={false}
        screenName={SCREEN.Profile}
        onPressGoToSettings={onPressGoToSettings}
      />
      <ScrollViewContainer>
        {isContentLoaded ? (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Text style={{ margin: 10 }}>
              Welcome it's {SCREEN.Profile} screen
            </Text>
            <Button title="Sign Out" onPress={onPressSignOut} />
            <FontAwesome5
              name="user-clock"
              size={32}
              style={{ margin: 10 }}
              color={COLORS.orange}
            />
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <ActivityIndicator size="large" color={COLORS.orange} />
          </View>
        )}
      </ScrollViewContainer>
    </Screen>
  );
};
