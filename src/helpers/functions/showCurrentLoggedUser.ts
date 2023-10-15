import { LayoutAnimation, UIManager, Platform } from "react-native";
import { SetUserVisible } from "../../types";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const showCurrentLoggedUser = (
  setUserVisible: SetUserVisible,
  isUserVisible: boolean
) => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  setUserVisible(!isUserVisible);
};
