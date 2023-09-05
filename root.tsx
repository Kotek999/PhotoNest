import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./rootTypeList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREEN } from "./routes";
import { Login } from "./src/Screens/Login";
import { Test } from "./src/Screens/Test";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREEN.Login}
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
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
          name={SCREEN.Test}
          options={{
            title: SCREEN.Test,
            headerShown: false,
            animation: "fade",
          }}
          component={Test}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
