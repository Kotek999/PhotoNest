import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import { Root } from "./root";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Open-Sans": require("./src/assets/fonts/OpenSans-Medium.ttf"),
  });

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayout}>
      <Provider store={store}>
        <Root />
      </Provider>
    </View>
  );
}
