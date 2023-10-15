import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text } from "react-native-ui-lib";
import { NavigationScreenProps } from "../../../rootTypeList";
import { JSX, UserDataInfo } from "../../types";
import { SCREEN } from "../../../routes";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/auth/signOut/action";
import { useToast } from "../../hooks/toast/useToast";
import { ToastAndroid } from "react-native";
import { backHandlerCall } from "../../helpers/functions/backHandlerCall";
import { getUserDataFromFirebase } from "../../helpers/functions/getUserDataFromFirebase";
import { Screen } from "../../components/Atoms/Screen";
import { COLORS } from "../../colors";
import { showCurrentLoggedUser } from "../../helpers/functions/showCurrentLoggedUser";
import { Header } from "../../components/Molecules/Header";
import { ScrollViewContainer } from "../../components/Atoms/ScrollViewContainer";

export const Gallery = ({
  navigation,
}: NavigationScreenProps<SCREEN.SignUp>): JSX => {
  const { showToast } = useToast();

  const insets = useSafeAreaInsets();

  const dispatch = useDispatch();

  const [displayName, setDisplayName] = useState<UserDataInfo>("");
  const [isUserVisible, setUserVisible] = useState<boolean>(false);
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);
  // const onPressSignOut = () => {
  //   dispatch(signOut({ redirect: navigation.navigate }));
  //   showToast({ message: "Correct Logout", duration: ToastAndroid.SHORT });
  // };

  const showLoggedUser = () =>
    showCurrentLoggedUser(setUserVisible, isUserVisible);

  useFocusEffect(backHandlerCall());

  useEffect(() => {
    getUserDataFromFirebase(setDisplayName, "nickname");
    if (displayName) {
      showLoggedUser();
    }
    setTimeout(() => {
      showLoggedUser();
    }, 3000);
    setIsContentLoaded(true);
  }, []);

  return (
    <Screen styleOfStatusBar="dark">
      <Header
        isUserShow
        screenName={SCREEN.Gallery}
        showLoggedUser={showLoggedUser}
        isUserVisible={isUserVisible}
        displayName={displayName}
        onPress={() => alert("go to settings")}
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
              Welcome it's {SCREEN.Gallery} screen
            </Text>
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
