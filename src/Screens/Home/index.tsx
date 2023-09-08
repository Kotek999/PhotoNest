import { View, Text, Button } from "react-native-ui-lib";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";

export const Home = () => {
  const auth = FIREBASE_AUTH;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Text>hi, it's home screen + {auth.currentUser?.email}</Text>
      <Button onPress={() => FIREBASE_AUTH.signOut()} label="LogOut" />
    </View>
  );
};
