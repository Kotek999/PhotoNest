import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Auth: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  Gallery: undefined;
  Test: undefined;
  Favorite: undefined;
  Find: undefined;
  Profile: undefined;
};

export type NavigationScreenProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
};
