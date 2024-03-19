import { useUserData } from "../../hooks/userData/useUserData";
import { useNavigation } from "../../hooks/navigation/useNavigation";
import { NavigationScreenProps } from "../../../rootTypeList";
import { SCREEN } from "../../../routes";
import { ActionProps } from "../../types";
import { useReduxAction } from "../../hooks/dispatch/useReduxDispatch";
import { useLoadingWithDispatchEffect } from "../../hooks/dispatch/useReduxDispatch";

export const useAuth = (
  { navigation, route }: NavigationScreenProps<SCREEN>,
  { dispatchValue, loading, action }: ActionProps
) => {
  const { nick, setNick, email, password, setEmail, setPassword } =
    useUserData();

  const NAVIGATION = {
    navigation: navigation,
    route,
  };

  const EFFECT = {
    dispatchValue: dispatchValue,
    loading: loading,
  };

  const AUTH = {
    action: action,
    nick: nick,
    email: email,
    password: password,
    redirect: navigation.navigate,
  };

  const { onPressGoToLogin, onPressGoToSignUp } = useNavigation(NAVIGATION);
  const { isLoading } = useLoadingWithDispatchEffect(EFFECT);
  const { onPressAuth } = useReduxAction(AUTH);

  return {
    isLoading,
    nick,
    setNick,
    email,
    setEmail,
    password,
    setPassword,
    onPressAuth,
    onPressGoToSignUp,
    onPressGoToLogin,
  };
};
