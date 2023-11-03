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
import { Screen } from "../../components/Atoms/Screen";
import { useSelector, useDispatch } from "react-redux";
import { counterSlice } from "../../redux/counter/action";

export const Test = ({ navigation }: NavigationScreenProps<SCREEN.Test>) => {
  const counter = useSelector((state: { counter: number }) => state.counter);
  const dispatch = useDispatch();
  const source: ImageSourcePropType = require("../../assets/newBg.png");

  return (
    <Screen styleOfStatusBar="dark">
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={source}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            This is Test Screen ---- {counter}
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
            <Button
              title="Increase"
              onPress={() => dispatch(counterSlice.actions.increment())}
            />
            <Button
              title="decrease"
              onPress={() => dispatch(counterSlice.actions.decrement())}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </Screen>
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
