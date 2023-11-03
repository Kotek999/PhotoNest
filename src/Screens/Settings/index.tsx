import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { JSX } from "../../types";
import { Screen } from "../../components/Atoms/Screen";
import { COLORS } from "../../colors";
import { Header } from "../../components/Molecules/Header";
import { SCREEN } from "../../../routes";
import { ScrollViewContainer } from "../../components/Atoms/ScrollViewContainer";
import { NavigationScreenProps } from "../../../rootTypeList";

export const Settings = ({
  navigation,
}: NavigationScreenProps<SCREEN.Settings>): JSX => {
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);

  const onPressGoBack = () => navigation.goBack();

  useEffect(() => {
    setIsContentLoaded(true);
  }, []);

  return (
    <Screen styleOfStatusBar="light" bgColor={COLORS.purpleBg}>
      <Header
        isSettingsIconActive
        isUserShow={false}
        screenName={SCREEN.Settings}
        onPressGoToSettings={onPressGoBack}
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
            <Text style={{ margin: 10, fontSize: 28, color: COLORS.white }}>Settings</Text>
            {/* <FontAwesome5
              name="user-clock"
              size={32}
              style={{ margin: 10 }}
              color={COLORS.orange}
            /> */}
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
            <ActivityIndicator size="large" color={COLORS.emerald} />
          </View>
        )}
      </ScrollViewContainer>
    </Screen>
  );
};
