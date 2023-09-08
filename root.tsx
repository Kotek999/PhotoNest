import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./rootTypeList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREEN } from "./routes";
import { COLORS } from "./src/colors";
import { Welcome } from "./src/Screens/Welcome";
import { Login } from "./src/Screens/Login";
import { SignUp } from "./src/Screens/SignUp";
import { Test } from "./src/Screens/Test";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREEN.Welcome}
        screenOptions={{ contentStyle: { backgroundColor: COLORS.white } }}
      >
        <Stack.Screen
          name={SCREEN.Welcome}
          options={{
            title: SCREEN.Welcome,
            headerShown: false,
            animation: "fade",
          }}
          component={Welcome}
        />
        <Stack.Screen
          name={SCREEN.Login}
          options={{
            title: SCREEN.Login,
            headerShown: false,
            animation: "fade",
          }}
          component={Login}
        />
        <Stack.Screen
          name={SCREEN.SignUp}
          options={{
            title: SCREEN.SignUp,
            headerShown: false,
            animation: "fade",
          }}
          component={SignUp}
        />
        <Stack.Screen
          name={SCREEN.Test}
          options={{
            title: SCREEN.Test,
            headerShown: false,
            animation: "slide_from_bottom",
          }}
          component={Test}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
