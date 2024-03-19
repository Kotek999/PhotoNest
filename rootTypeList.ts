import type { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ImageAssetsData } from "./src/types";

export type RootStackParamList = {
  Auth: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  Gallery: undefined;
  Test: undefined;
  ScoreBoard: undefined;
  Find: undefined;
  Profile: undefined;
  Settings: undefined;
  PhotoDetails: { photoData: ImageAssetsData };
};

type NavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

type DetailsParams = {
  params?: { photoData: ImageAssetsData };
};

export type NavigationProps<T extends keyof RootStackParamList> = {
  navigation: NavigationProp<T>;
  route: RouteProp<RootStackParamList, T>;
};

export type NavigationScreenProps<T extends keyof RootStackParamList> =
  NavigationProps<T>;

export type PhotoDetailsScreenProps<T extends keyof RootStackParamList> =
  NavigationProps<T> & DetailsParams;
