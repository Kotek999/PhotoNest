import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./rootTypeList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREEN } from "./routes";
import { COLORS } from "./src/colors";
import { Welcome } from "./src/Screens/Welcome";
import { Login } from "./src/Screens/Login";
import { SignUp } from "./src/Screens/SignUp";
import { Home } from "./src/Screens/Home";
import { Test } from "./src/Screens/Test";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Root = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      // console.log("user", user);
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREEN.Welcome}
        screenOptions={{ contentStyle: { backgroundColor: COLORS.white } }}
      >
        {user ? (
          <Stack.Screen
            name={SCREEN.Home}
            options={{
              title: SCREEN.Home,
              headerShown: false,
              animation: "fade",
            }}
            component={Home}
          />
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
