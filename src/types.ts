import { ReactNode } from "react";
import {
  ToastAndroid,
  RefreshControlProps,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  Animated,
} from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";
import {
  AnyAction,
  ActionCreatorWithoutPayload,
  PayloadAction,
  Dispatch,
} from "@reduxjs/toolkit";
import { StatusBarStyle } from "expo-status-bar";
import { rootReducer } from "../rootReducer";
import { User } from "firebase/auth";
import { NavigationScreenProps } from "../rootTypeList";
import { SCREEN } from "../routes";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { signUp } from "./redux/auth/signUp/action";
import { login } from "./redux/auth/logIn/action";
import { signOut } from "./redux/auth/signOut/action";
import { getAuthToken } from "./redux/auth/authToken/action";

export type Children = ReactNode;
export type JSX = React.JSX.Element;
export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

type OnChangeText = (text: string) => void;

export type OnPress = () => void;

export type OnPressAction = {
  onPress: OnPress;
};

type ChildProps = {
  children: Children;
};

export type ScreenProps = ChildProps & {
  styleOfStatusBar?: StatusBarStyle;
  bgColor?: string;
};

export type ScrollViewContainerProps = ChildProps & {
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  refreshControl?:
    | React.ReactElement<
        RefreshControlProps,
        string | React.JSXElementConstructor<any>
      >
    | undefined;
  isDefaultOptions: boolean;
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
  lightPink: string;
  lightPurple: string;
  [key: string]: string;
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

type UserDataFirebaseInfo = UserDataFirebase | string;

type LoggedUserDisplayName = {
  displayName?: UserDataFirebaseInfo;
  onPressGoToProfile?: OnPress;
};

type LoggedUserVisible = {
  isUserVisible?: boolean;
  avatarDirectPath?: string;
};

export type LoggedUserProps = LoggedUserVisible & LoggedUserDisplayName;

export type LoggedUserWithAvatarProps = LoggedUserProps;

export type TouchableAvatarProps = LoggedUserDisplayName;

export type HeaderProps = LoggedUserVisible & {
  onPressGoToProfile?: OnPress;
  onPressGoToSettings: OnPress;
  displayName?: UserDataFirebaseInfo;
  isUserShow: boolean;
  isSettingsIconActive: boolean;
  screenName?: string;
};

export type DateInfo = {
  date: string;
  time: string;
};

export type PhotoAddedInfoProps = {
  displayName: UserDataFirebaseInfo;
  addedBy: UserDataInfo;
  createdAt: DateInfo;
  userId: UserDataInfo;
};

export type ImageAssetsData = {
  userId: UserDataInfo;
  directUrl: string;
  addedBy: UserDataInfo;
  createdAt: DateInfo;
  type: "image" | "video";
};

export type ImageAssets = {
  assets: ImageAssetsData[];
};

export type UserPhotosData = {
  directUrl: string;
  createdAt: DateInfo;
};

export type RenderAddedPhotosProps = {
  displayName: UserDataFirebaseInfo;
  photos: ImageAssetsData[];
  navigation: NavigationScreenProps<SCREEN.Gallery>;

  pointsValue?: number;
};

export type PhotoInfoProps = {
  userDataFirebase: UserDataFirebase;
  setAddedPhoto: SetState<string>;
  dispatch: Dispatch;
  setPhotos: SetState<ImageAssetsData[]>;
  setIsPhotosLoaded: SetState<boolean>;
  setUserVisible: SetState<boolean>;
  isUserVisible: boolean;
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
  title?: string;
  userNameForTitle?: string;
  isTitleForNotExistPhotos?: boolean;
  isPermissionRequest?: boolean;
};

type UriSource = {
  uri: string;
  colight?: number;
  onPressOpenModal: OnPress;
};

export type PhotoProps = {
  uri: string;
  mb?: number | undefined;
  pointsValue?: number;
};

export type AddedPhotoProps = UriSource;

export type PhotoContentProps = {
  isContentLoaded: boolean;
  mediaPermission: boolean | null;
  addedPhoto: string;
  isPhotosLoaded: boolean;
  photos: ImageAssetsData[];
  displayName: UserDataFirebaseInfo;
  isPermissionRequest: boolean;
  navigation: NavigationScreenProps<SCREEN.Gallery>;
  colight?: number | undefined;
  onPressOpenModal: OnPress;

  pointsValue?: number;
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

export type ChangeText = ((text: string) => void) | undefined;
export type ImageUrl = string;
export type StateBoolean = SetState<boolean>;

type ForPhotoData = {
  forPhoto: {
    nickname: OptionalString;
    forDirectUrl: OptionalString;
    value: OptionalNumber;
  };
};

export type UserDataFirebase =
  | {
      email: string;
      id: string;
      nickname: string;
      role: string;
      points: number;
      colight: {
        received?: ForPhotoData;
        given?: ForPhotoData;
      };
      avatar: {
        directPath: string;
      };
    }
  | undefined;

export type VisibleLength = number | "" | undefined;

export type TruncateProps = {
  userData?: UserDataFirebase;
  onPressTruncate?: OnPress;
  visibleLength?: VisibleLength;
};

export type UserRowProps = TruncateProps & {
  label: string;
  value: string | undefined;
  isTruncateLabel: boolean;
};

type Row = {
  isTruncateLabel: boolean;
  label: string;
  value: string | undefined;
};

type TruncateData = Row & {
  specialFieldForTruncate?: TruncateProps;
};

export type TruncateUserData = (Row & TruncateData)[];

export type DialogWithUserInfoProps = {
  userData: UserDataFirebase;
  onPress?: OnPress;
  onPressTruncate: OnPress;
  visible: boolean;
  visibleLength: VisibleLength;
};

export type UserPhotosProps = {
  isUserPhotosLoaded: boolean;
  isPhotosNotExist: boolean;
  userPhotos: UserPhotosData[];
  userNameOfPhotos?: OptionalString;
  userName?: OptionalString;
};

type UserPhotosOnPressActions = {
  onPressOpenDialog: OnPress;
  onPressCloseDialog: OnPress;
  onPressTruncate: OnPress;
  onPressSignOut: OnPress;
};

type UserPhotosIsConditions = {
  isContentLoaded: boolean;
  isDialogVisible: boolean;
  isUserPhotosLoaded: boolean;
  isPhotosNotExist: boolean;
};

export type UserProfileAvatarWithButtonProps = UserPhotosOnPressActions & {
  userData: UserDataFirebase;
  isDialogVisible: boolean;
  visibleLength: VisibleLength;
};

export type UserPhotosContentProps = UserPhotosOnPressActions &
  UserPhotosIsConditions & {
    userData: UserDataFirebase;
    userPhotos: UserPhotosData[];
    visibleLength: VisibleLength;
  };

export type Users = {
  [key: string]: {
    avatar: {
      directPath: string;
    };
  };
};

export type UserAvatarPathProps = {
  uid: string;
  addedBy: UserDataInfo;
};

export type UserAvatarProps = {
  uid: string;
  addedBy: UserDataInfo;
  setUserAvatar: SetState<Children | null>;
  setIsContentLoaded: SetState<boolean>;
};

export type ImageItem = {
  id: number;
  source: string;
};

export type RenderItemProps = {
  item: ImageItem;
};

export type OptionalString = string | undefined;
export type OptionalNumber = number | undefined;

export type RenderFlatListProps = {
  data: Record<string, ImageItem[]>;
  activeCategory: string;
  tempSelectedAvatar: OptionalString;
  renderItem: (props: RenderItemProps) => JSX;
  renderAvatarItem: (
    selectAvatar: (...args: any[]) => void
  ) => (props: RenderItemProps) => JSX;
};

export type RenderAvatarProps = {
  tempSelectedAvatar: OptionalString;
  directPath: OptionalString;
  nickname: OptionalString;
};

export type RenderAvatarsCategoriesProps = {
  activeCategory: string;
  setActiveCategory: SetState<string>;
};

export type ModalAvatarsContentProps = RenderFlatListProps &
  RenderAvatarProps &
  RenderAvatarsCategoriesProps;

export type ModalAvatarsProps = ModalAvatarsContentProps & {
  isAvatarChangedMessage: boolean;
  isSaveAvatarButtonDisabled: boolean;
  onPressSaveAvatar: (...args: any[]) => void;
};

export type DialogUserProps = DialogWithUserInfoProps & {
  onPressOpenDialog: OnPress;
};

export type AvatarProps = {
  nickname: OptionalString;
  onPressOpenModal?: OnPress;
  source: ImageSourcePropType | undefined;
};

export type AvatarSourceProp = ImageSourcePropType | undefined;

export type ActionCallbackFunctionProps = (...args: any[]) => void;

export type SaveAvatarCallProps = {
  tempSelectedAvatar: OptionalString;
  setSelectedAvatar: SetState<AvatarSourceProp>;
  setIsAvatarChangedMessage: SetState<boolean>;
  dispatch: Dispatch<AnyAction>;
};

type AvatarAssetsData = {
  directPath: string | undefined;
};

export type AvatarAssets = {
  assets: AvatarAssetsData[];
};

export type UserProfileAvatarContentProps = DialogUserProps &
  AvatarProps &
  ModalAvatarsProps &
  ModalAvatarsContentProps & {
    selectedAvatar: AvatarSourceProp;
    onPressCloseDialog: OnPress;
    onPressSignOut: OnPress;
  };

export type BottomModalRef = BottomSheetModal;

export type BottomModalProps = {
  enableContentPanningGesture?: boolean | undefined;
  snapPointsValue: string | number;
  onPressCloseModal: OnPress;
  children: Children;
  isTitleExist?: boolean;
  isDefaultStyle?: boolean;
  styles?: StyleProp<ViewStyle | Animated.AnimatedProps<ViewStyle>>;
  title?: string;
};

export type SpinnerProps = {
  style?: StyleProp<ViewStyle>;
  isTextExist?: boolean;
  isDefaultOptions: boolean;
};

export type UserPathData = {
  uid: UserDataInfo;
  currentUid: OptionalString;
  createdAt: {
    time: string;
    date: string;
  };
  avatarPath: OptionalString;
  role: OptionalString;
  type: "image" | "video";
  forPhotoData: {
    forPhoto: {
      nickname: UserDataInfo;
      directUrl: string;
      value: number;
    };
  };
};

export type UserPhotoProps = {
  user: UserPathData;
};

export type ColightButtonProps = {
  user: UserPathData;
  isPathsLoaded: boolean;
  isColightExist: boolean;
  isLiked: boolean;
  onPressSetColight: OnPress;
};

type UserPathProps = UserPhotoProps & {
  isPathsLoaded: boolean;
  isColightExist: boolean;
  isLiked: boolean;
  onPressSetColight: OnPress;
};

export type PhotoDetailsContentProps = UserPathProps & {
  isContentLoaded: boolean;
  onPressGoBack: OnPress;
  points: number;
};

type ForPhotoAssets = {
  forPhoto: {
    nickname: UserDataInfo;
    directUrl: OptionalString;
    value: OptionalNumber;
  };
};

export type ColightAssets = {
  currentUserId: OptionalString;
  userId: UserDataInfo;
  colight: {
    received: ForPhotoAssets;
    given: ForPhotoAssets;
  };
};

export type PointsValue = {
  userId: UserDataInfo;
  points: OptionalNumber;
};

export type ParagraphProps = {
  firstPart: string;
  secondPart: string;
  thirdPart: string;
};

export type AmountOfColightsProps = {
  points: number;
};

export type OptionalUserDataFirebase = UserDataFirebase[] | undefined;

export type PositionIconsProps = {
  position: number;
  isDefaultStyle?: boolean;
  styles?: StyleProp<ViewStyle | Animated.AnimatedProps<ViewStyle>>;
};

export type ImageIconProps = {
  source: ImageSourcePropType;
};

export type ScoreBoardUserData = {
  uid: OptionalString;
  position: number;
  isUserLogged: boolean;
  avatarPath: OptionalString;
  userName: OptionalString;
  points: OptionalNumber;
};

export type ScoreBoardUserDataProps = {
  user: UserDataFirebase;
  index: number;
};

export type BoardWithUsersProps = {
  allUsersData: OptionalUserDataFirebase;
  isContentLoaded: boolean;
};

export type BoardRowProps = {
  data: ScoreBoardUserData;
  isContentLoaded?: boolean;
};

export type ScoreBoardHeaderProps = {
  onPressGoBack: OnPress;
  isTitleExist?: boolean;
};

export type TouchableAvatarWithUserInfoProps = {
  onPressGoToProfile: OnPress;
  userDataFirebase: UserDataFirebase;
};

export type BackgroundHeaderProps = ScoreBoardHeaderProps &
  TouchableAvatarWithUserInfoProps & {
    isContentLoaded: boolean;
  };

export type ScrollViewContainerWithBoardProps = {
  isContentLoaded: boolean;
  isBoardDataLoaded: boolean;
  insets: EdgeInsets;
  allUsersData: OptionalUserDataFirebase;
};

export type ScoreBoardContentProps = ScrollViewContainerWithBoardProps &
  ScoreBoardHeaderProps &
  TouchableAvatarWithUserInfoProps;

export type UseUserDataProps = {
  nick: string;
  email: string;
  password: string;
  setNick: SetState<string>;
  setEmail: SetState<string>;
  setPassword: SetState<string>;
};

export type ReduxAction =
  | typeof signUp
  | typeof login
  | typeof signOut
  | typeof getAuthToken;

type RedirectWithActionProps = {
  action: ReduxAction;
  redirect: (screenName: string) => void;
};

export type UseReduxAuthProps = RedirectWithActionProps & {
  email: string;
  password: string;
  nick?: string;
};

type UseReduxActionProps = RedirectWithActionProps;

export type UseReduxProps = UseReduxActionProps | UseReduxAuthProps;

export type UseLoadingWithDispatchEffectProps = {
  dispatchValue: ActionCreatorWithoutPayload<`${string}/clearError`>;
  loading: (state: RootState) => boolean;
};

type BoardUserInfoWithPhotosProps = {
  isUserPhotosLoaded: boolean;
  isPhotosNotExist: boolean;
  userPhotos: UserPhotosData[];
  data: ScoreBoardUserData;
  insets: EdgeInsets;
};

export type BoardUserPhotosProps = BoardUserInfoWithPhotosProps & {
  userName: OptionalString;
  userNameOfPhotos: OptionalString;
};

export type TouchableRowWithUserInfoProps = {
  data: ScoreBoardUserData;
  onPressGetPhotos: OnPress;
};

export type BoardBackgroundHeaderWithUserInfoProps = {
  onPressGoBack: OnPress;
  isContentLoaded?: boolean;
  data: ScoreBoardUserData;
};

export type BoardBottomModalContentProps = BoardUserInfoWithPhotosProps &
  BoardBackgroundHeaderWithUserInfoProps;

export type ArrayOperationProps<T, R> = (
  array: T[],
  method: keyof Array<T>,
  func: (element: T, index: number, array: T[]) => R,
  ...args: any[]
) => R[];

export type UserPointsProps = {
  moreThanZero: UserDataFirebase[];
  withZero: UserDataFirebase[];
};

export type FilteredBoardRowContentProps = {
  usersWithMoreThanZeroPoints: OptionalUserDataFirebase;
  usersWithZeroPoints: OptionalUserDataFirebase;
  isContentLoaded: boolean;
};

export type ModalForZeroPointsUsersProps = {
  user: UserDataFirebase;
  index?: number;
};

export type GalleryContentProps = {
  refreshing: boolean;
  onRefresh: OnPress;
  navigation: NavigationScreenProps<SCREEN.Gallery>;
  isContentLoaded: boolean;
  isPhotosLoaded: boolean;
  isPermissionRequest: boolean;
  mediaPermission: boolean | null;
  addedPhoto: string;
  photos: ImageAssetsData[];
  displayName: UserDataFirebaseInfo;
  colight: number | undefined;
  setIsPermissionRequest: SetState<boolean>;
  addPhoto: () => Promise<void>;
};

export type UseNavigationOnPressActionProps = {
  onPressGoToSignUp: OnPress;
  onPressGoToLogin: OnPress;
  onPressGoToSettings: OnPress;
  onPressGoToProfile: OnPress;
  onPressGoBack: OnPress;
};

export type UseLoadedProps = {
  isContentLoaded: boolean;
  isBoardDataLoaded: boolean;
  isPathsLoaded: boolean;
  isPhotosLoaded: boolean;
  isUserPhotosLoaded: boolean;
  refreshing: boolean;
  setIsContentLoaded: SetState<boolean>;
  setIsBoardDataLoaded: SetState<boolean>;
  setIsPathsLoaded: SetState<boolean>;
  setIsPhotosLoaded: SetState<boolean>;
  setIsUserPhotosLoaded: SetState<boolean>;
  setRefreshing: SetState<boolean>;
};

export type UseUserDataFirebaseProps = {
  userDataFirebase: UserDataFirebase;
  allUsersData: OptionalUserDataFirebase;
  data: UserDataFirebase;
  setUserDataFirebase: SetState<UserDataFirebase>;
  setAllUsersData: SetState<OptionalUserDataFirebase>;
  setData: SetState<UserDataFirebase>;
};

export type UseUserPhotosProps = {
  userPhotos: UserPhotosData[];
  photoPaths: string[];
  photos: ImageAssetsData[];
  addedPhoto: string;
  userAvatar: Children;
  isPhotosNotExist: boolean;
  setUserPhotos: SetState<UserPhotosData[]>;
  setPhotoPaths: SetState<string[]>;
  setPhotos: SetState<ImageAssetsData[]>;
  setAddedPhoto: SetState<string>;
  setUserAvatar: SetState<Children>;
  setIsPhotosNotExist: SetState<boolean>;
};

export type UseVisibleProps = {
  isDialogVisible: boolean;
  isUserVisible: boolean;
  visibleLength: VisibleLength;
  setDialogVisible: SetState<boolean>;
  setUserVisible: SetState<boolean>;
  setVisibleLength: SetState<VisibleLength>;
};

export type UsePhotoPermissionProps = {
  mediaPermission: boolean | null;
  isPermissionRequest: boolean;
  setMediaPermission: SetState<boolean | null>;
  setIsPermissionRequest: SetState<boolean>;
};

export type UsePointsProps = {
  isColightExist: boolean;
  pointsValue: number[];
  setIsColightExist: SetState<boolean>;
  setPointsValue: SetState<number[]>;
};

export type ActionProps = UseLoadingWithDispatchEffectProps & {
  action: typeof login | typeof signUp;
};
