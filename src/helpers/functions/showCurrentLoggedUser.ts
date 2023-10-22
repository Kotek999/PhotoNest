import { LayoutAnimation, UIManager, Platform } from "react-native";
import { SetState } from "../../types";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const showCurrentLoggedUser = (
  setUserVisible: SetState<boolean>,
  isUserVisible: boolean
) => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  setUserVisible(!isUserVisible);
};
