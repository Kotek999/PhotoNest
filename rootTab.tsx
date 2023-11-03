import React from "react";
import { StyleSheet } from "react-native";
import { RootStackParamList } from "./rootTypeList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { JSX } from "./src/types";
import { SCREEN } from "./routes";
import { COLORS } from "./src/colors";
import { Gallery } from "./src/Screens/Gallery";
import { Favorite } from "./src/Screens/Favorite";
import { Find } from "./src/Screens/Find";
import { Profile } from "./src/Screens/Profile";
import { createTabBarIcon } from "./src/helpers/functions/createTabBarIcon";

const Tab = createBottomTabNavigator<RootStackParamList>();

export const RootTab = (): JSX => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.screenContainer,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name={SCREEN.Gallery}
        options={{
          title: SCREEN.Gallery,
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            createTabBarIcon({
              isFocused: focused,
              iconName: "images",
            }),
        }}
        component={Gallery}
      />
      <Tab.Screen
        name={SCREEN.Favorite}
        options={{
          title: SCREEN.Favorite,
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            createTabBarIcon({
              isFocused: focused,
              iconName: "star",
            }),
        }}
        component={Favorite}
      />
      <Tab.Screen
        name={SCREEN.Find}
        options={{
          title: SCREEN.Find,
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            createTabBarIcon({
              isFocused: focused,
              iconName: "search",
            }),
        }}
        component={Find}
      />
      <Tab.Screen
        name={SCREEN.Profile}
        options={{
          title: SCREEN.Profile,
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            createTabBarIcon({
              isFocused: focused,
              iconName: "user-circle",
            }),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    position: "absolute",
    backgroundColor: COLORS.purpleBg,
  },
  shadow: {
    shadowColor: COLORS.darkOpacity,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
