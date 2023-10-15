import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { StyleSheet } from "react-native";
import { RootStackParamList } from "./rootTypeList";
import {
  createBottomTabNavigator,
  BottomTabBarButtonProps,
} from "@react-navigation/bottom-tabs";
import { JSX } from "./src/types";
import { SCREEN } from "./routes";
import { COLORS } from "./src/colors";
import { Gallery } from "./src/Screens/Gallery";
import { Test } from "./src/Screens/Test";
import { Favorite } from "./src/Screens/Favorite";
import { Find } from "./src/Screens/Find";
import { Profile } from "./src/Screens/Profile";
import { createTabBarIcon } from "./src/helpers/functions/createTabBarIcon";
import { BottomTabBarButton } from "./src/components/Atoms/BottomTabBarButton";

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
              iconTitle: SCREEN.Gallery,
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
              iconTitle: SCREEN.Favorite,
            }),
        }}
        component={Favorite}
      />
      <Tab.Screen
        name={SCREEN.Test}
        options={{
          title: SCREEN.Test,
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome5 name="plus" size={20} color={COLORS.white} />
          ),
          tabBarButton: (props: BottomTabBarButtonProps): JSX => (
            <BottomTabBarButton {...props} />
          ),
        }}
        component={Test}
      />
      <Tab.Screen
        name={SCREEN.Find}
        options={{
          title: SCREEN.Find,
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            createTabBarIcon({
              isFocused: focused,
              iconName: "binoculars",
              iconTitle: SCREEN.Find,
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
              iconTitle: SCREEN.Profile,
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
    backgroundColor: COLORS.lightGrayBg,
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
