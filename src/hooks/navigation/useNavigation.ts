import { UseNavigationOnPressActionProps } from "../../types";
import { NavigationScreenProps } from "../../../rootTypeList";
import { SCREEN } from "../../../routes";

export const useNavigation = <T extends NavigationScreenProps<SCREEN>>(
  navigation: T
): UseNavigationOnPressActionProps => {
  const onPressGoToSignUp = () => navigation.navigation.navigate(SCREEN.SignUp);
  const onPressGoToLogin = () => navigation.navigation.navigate(SCREEN.Login);
  const onPressGoToSettings = () =>
    navigation.navigation.navigate(SCREEN.Settings);
  const onPressGoToProfile = () =>
    navigation.navigation.navigate(SCREEN.Profile);
  const onPressGoBack = () => navigation.navigation.goBack();
  return {
    onPressGoToSignUp,
    onPressGoToLogin,
    onPressGoToSettings,
    onPressGoToProfile,
    onPressGoBack,
  };
};
