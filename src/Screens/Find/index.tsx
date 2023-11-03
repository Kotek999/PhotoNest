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

export const Find = ({
  navigation,
}: NavigationScreenProps<SCREEN.Find>): JSX => {
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);

  const onPressGoToSettings = () => navigation.navigate(SCREEN.Settings);

  useEffect(() => {
    setIsContentLoaded(true);
  }, []);

  return (
    <Screen styleOfStatusBar="light" bgColor={COLORS.purpleBg}>
      <Header
        isSettingsIconActive={false}
        isUserShow={false}
        screenName={SCREEN.Find}
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
            <Text style={{ margin: 10, color: COLORS.white }}>
              Welcome it's {SCREEN.Find} screen
            </Text>
            <FontAwesome5
              name="user-clock"
              size={32}
              style={{ margin: 10 }}
              color={COLORS.emerald}
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
            <ActivityIndicator size="large" color={COLORS.emerald} />
          </View>
        )}
      </ScrollViewContainer>
    </Screen>
  );
};
