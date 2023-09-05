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

export const Test = ({ navigation }: NavigationScreenProps<SCREEN.Test>) => {
  const source: ImageSourcePropType = require("../../assets/bg.png");

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={source} resizeMode="cover" style={styles.image}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          This is Test Screen
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
            title="Back to Login"
            onPress={() => navigation.navigate(SCREEN.Login)}
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
