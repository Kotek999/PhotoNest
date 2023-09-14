import { View, Text, Button } from "react-native-ui-lib";
import { auth } from "../../../FirebaseConfig";
import { NavigationScreenProps } from "../../../rootTypeList";
import { SCREEN } from "../../../routes";
import { useDispatch } from "react-redux";
import { signOutRequest } from "../../redux/auth/signOut/action";
import { useToast } from "../../hooks/toast/useToast";
import { ToastAndroid } from "react-native";

export const Home = ({ navigation }: NavigationScreenProps<SCREEN.SignUp>) => {
  const { showToast } = useToast();

  const dispatch = useDispatch();

  const onPressSignOut = () => {
    dispatch(signOutRequest({ redirect: navigation.goBack }));
    showToast({ message: "Logout...", duration: ToastAndroid.SHORT });
  };

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
      <Button onPress={onPressSignOut} label="Back" />
    </View>
  );
};
