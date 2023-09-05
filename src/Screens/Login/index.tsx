import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ImageSourcePropType,
  SafeAreaView,
  Button,
} from "react-native";
import { NavigationScreenProps } from "../../../rootTypeList";
import { SCREEN } from "../../../routes";

export const Login = ({ navigation }: NavigationScreenProps<SCREEN.Login>) => {
  const source: ImageSourcePropType = require("../../assets/bg.png");

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={source} resizeMode="cover" style={styles.image}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          This is Login Screen
        </Text>
        <View
          style={{
            alignItems: "center",
            alignSelf: "center",
            width: "50%",
            padding: 20,
          }}
        >
          <Button
            title="Go to Test"
            onPress={() => navigation.navigate(SCREEN.Test)}
          />
        </View>
      </ImageBackground>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
