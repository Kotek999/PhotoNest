import { ReactNode } from "react";
import {
  ToastAndroid,
  GestureResponderEvent,
  RefreshControlProps,
} from "react-native";
import { StatusBarStyle } from "expo-status-bar";
import { rootReducer } from "../rootReducer";
import { PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { NavigationScreenProps } from "../rootTypeList";
import { SCREEN } from "../routes";

export type Children = ReactNode;
export type JSX = React.JSX.Element;
export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

type OnChangeText = (text: string) => void;

export type OnPress = () => void;

export type ChildProps = {
  children: Children;
  styleOfStatusBar?: StatusBarStyle;
  refreshControl?:
    | React.ReactElement<
        RefreshControlProps,
        string | React.JSXElementConstructor<any>
      >
    | undefined;
  bgColor?: string;
};

export type SubmitButtonProps = {
  onPress: OnPress;
  label: string;
};

type Key = string | number;

type ReactElement<
  P = any,
  T extends string | React.JSXElementConstructor<any> =
    | string
    | React.JSXElementConstructor<any>
> = {
  type: T;
  props: P;
  key: Key | null;
};

type InputProps = {
  value: string;
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText: OnChangeText | void;
  leadingAccessory?: ReactElement;
  trailingAccessory?: ReactElement;
};

export type TextInputProps = InputProps & {
  borderColor?: string;
};

export type TextInputWithErrorProps = InputProps & {
  authState: Selector;
  firstErrorValue?: ErrorMessage;
  secondErrorValue?: ErrorMessage;
  thirdErrorValue?: ErrorMessage;
  fourthErrorValue?: ErrorMessage;
};

export type ScreenNameProps = {
  title: string;
};

export type Dimension = "window" | "screen";

export type QuestionBoxProps = {
  title: string;
  goTo: string;
  onPress: OnPress;
};

export type Colors = {
  white: string;
  orange: string;
  grayField: string;
  blackText: string;
  darkOpacity: string;
  blank: string;
  redError: string;
  grayItemMenu: string;
  lightGrayBg: string;
  lightGreen: string;
  purpleBg: string;
  sunsetOrange: string;
  emerald: string;
  lightGrayInput: string;
};

export type ButtonsBoxProps = {
  onPressGoToLogin: OnPress;
  onPressGoToSignUp: OnPress;
};

export type RootState = ReturnType<typeof rootReducer>;

export type FireBaseApp = {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

export type AuthStateValues = User | null | boolean | string;

export type AuthState = {
  user: User | null;
  loading: boolean;
  error: string | null;
  [key: string]: AuthStateValues;
};

export type Selector = (state: RootState) => AuthState;

export type RedirectAction = PayloadAction<{
  redirect: (screenName: string) => void;
}>;

export type AuthAction = RedirectAction &
  PayloadAction<{
    email: string;
    password: string;
  }>;

export type SignUpAction = AuthAction &
  PayloadAction<{
    nick: string;
  }>;

type ToastDuration = typeof ToastAndroid.SHORT | typeof ToastAndroid.LONG;

export type ShowToastProps = {
  message: string;
  duration?: ToastDuration;
};

export type ErrorMessage = string | false;

export type ErrorProps = {
  firstError?: ErrorMessage | undefined;
  secondError?: ErrorMessage | undefined;
  thirdError?: ErrorMessage | undefined;
  fourthError?: ErrorMessage | undefined;
};

export type ErrorMessageFields = {
  invalidEmail: string;
  missingEmail: string;
  emailAlreadyInUse: string;
  userNotFound: string;
  missingPassword: string;
  wrongPassword: string;
  tooManyRequests: string;
  emptyField: string;
  nickLength: string;
  nickSpecialCharacter: string;
  passwordLength: string;
};

type ErrorFields = ErrorMessageFields & {
  [key: string]: string;
};

export type ErrorCodes = {
  error: ErrorFields;
  message: ErrorFields;
  errorName?: string;
};

export type ErrorValues = {
  invalidEmail: ErrorMessage;
  missingEmail: ErrorMessage;
  emailAlreadyInUse: ErrorMessage;
  userNotFound: ErrorMessage;
  missingPassword: ErrorMessage;
  wrongPassword: ErrorMessage;
  tooManyRequests: ErrorMessage;
  emptyField: ErrorMessage;
  nickLength: ErrorMessage;
  nickSpecialCharacter: ErrorMessage;
  passwordLength: ErrorMessage;
  [key: string]: ErrorMessage;
};

export type UserData = {
  user: {
    uid: string;
    email?: string;
    emailVerified: boolean;
    displayName?: string;
    phoneNumber?: string;
    photoURL?: string;
    providerData: Array<{
      providerId: string;
      uid: string;
      displayName?: string;
      email?: string;
      phoneNumber?: string;
      photoURL?: string;
    }>;
    stsTokenManager?: {
      refreshToken: string;
      accessToken: string;
      expirationTime: number;
    };
    createdAt: string;
    lastLoginAt: string;
    apiKey: string;
    appName: string;
  };
};

export type UserDataInfo = UserData | string;

export type Credentials = {
  type: string;
  email: string;
  password: string;
};

export type CancelStyle = "cancel" | "default" | "destructive" | undefined;

export type HashedValue = {
  encrypt: string;
  decrypt: string;
};

export type BottomTabBarIconProps = {
  isFocused: boolean;
  iconName: string;
};

type LoggedUserDisplayName = {
  displayName?: UserDataInfo;
  onPressGoToProfile?: OnPress;
};

type LoggedUserVisible = {
  isUserVisible?: boolean;
};

export type LoggedUserProps = LoggedUserVisible & LoggedUserDisplayName;

export type LoggedUserWithAvatarProps = LoggedUserProps;

export type TouchableAvatarProps = LoggedUserDisplayName;

export type HeaderProps = {
  onPressGoToProfile?: OnPress;
  onPressGoToSettings: OnPress;
  displayName?: UserDataInfo;
  isUserVisible?: boolean;
  isUserShow: boolean;
  isSettingsIconActive: boolean;
  screenName?: string;
};

type DateInfo = {
  date: string;
  time: string;
};

export type PhotoAddedInfoProps = {
  displayName: UserDataInfo;
  addedBy: UserDataInfo;
  createdAt: DateInfo;
};

export type ImageAssetsData = {
  directUrl: string;
  addedBy: UserDataInfo;
  createdAt: DateInfo;
  type: "image" | "video";
};

export type ImageAssets = {
  assets: ImageAssetsData[];
};

export type RenderAddedPhotosProps = {
  displayName: UserDataInfo;
  photos: ImageAssetsData[];
};

export type PhotoInfoProps = {
  displayName: UserDataInfo;
  setAddedPhoto: SetState<string>;
  dispatch: Dispatch;
  setPhotos: SetState<ImageAssetsData[]>;
  setIsPhotosLoaded: SetState<boolean>;
};

export type RefreshProps = {
  setRefreshing: SetState<boolean>;
  getPhotos: () => void;
  showLoggedUser: () => void;
};

export type AddPhotoButtonProps = {
  mediaPermission: boolean | null;
  setIsPermissionRequest: SetState<boolean>;
  addPhoto: () => Promise<void>;
};

export type TitleProps = {
  title: string;
  isPermissionRequest?: boolean;
};

type UriSource = {
  uri: string;
};

export type PhotoProps = UriSource & {
  mb?: number | undefined;
};

export type AddedPhotoProps = UriSource;

export type PhotoContentProps = {
  isContentLoaded: boolean;
  mediaPermission: boolean | null;
  addedPhoto: string;
  isPhotosLoaded: boolean;
  photos: ImageAssetsData[];
  displayName: UserDataInfo;
  isPermissionRequest: boolean;
};

export type LeadingIconProps = {
  name: string;
};

export type AuthProps = {
  isLoading: boolean;
  email: string;
  setEmail: SetState<string>;
  password: string;
  setPassword: SetState<string>;
  onPressLogin?: OnPress;
  onPressSignUp?: OnPress;
  onPressGoToSignUp?: OnPress;
  onPressGoToLogin?: OnPress;
};

export type SignUpContentProps = AuthProps & {
  nick: string;
  setNick: SetState<string>;
};

export type TrailingEyeIconProps = {
  setShowPassword: SetState<boolean>;
  showPassword: boolean;
};
