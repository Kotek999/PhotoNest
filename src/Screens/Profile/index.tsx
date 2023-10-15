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

export const Profile = (): JSX => {
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsContentLoaded(true);
  }, []);

  return (
    <Screen styleOfStatusBar="dark">
      <Header
        isUserShow={false}
        screenName={SCREEN.Profile}
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
              Welcome it's {SCREEN.Profile} screen
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
