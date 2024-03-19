import { useEffect } from "react";
import {
  ReduxAction,
  UseReduxAuthProps,
  UseReduxProps,
  UseLoadingWithDispatchEffectProps,
} from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import { useToast } from "../toast/useToast";
import { ToastAndroid } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export const useReduxActionWithDispatch = () => {
  const dispatch = useDispatch();
  const onPressStartAction = (action: ReduxAction, data: any): any => {
    dispatch(action(data));
  };

  const useDispatchEffect = (dispatchData: AnyAction, useFocus: boolean) => {
    useEffect(() => {
      if (!useFocus) {
        dispatch(dispatchData);
      }
    }, [dispatch]);

    useFocusEffect(() => {
      if (useFocus) {
        dispatch(dispatchData);
      }
    });
  };

  return { dispatch, onPressStartAction, useDispatchEffect };
};

export const useLoadingWithDispatchEffect = (
  props: UseLoadingWithDispatchEffectProps
) => {
  const { useDispatchEffect } = useReduxActionWithDispatch();
  const isLoading = useSelector(props.loading);
  useDispatchEffect(props.dispatchValue(), false);
  return { isLoading };
};

export const useReduxAction = <T extends UseReduxProps>(props: T) => {
  const { showToast } = useToast();
  const { onPressStartAction } = useReduxActionWithDispatch();

  const authProps = props as UseReduxAuthProps;

  const onPressAuth = () => {
    onPressStartAction(authProps.action, { ...authProps });
  };

  const onPressSignOut = () => {
    onPressStartAction(props.action, { ...props });
    showToast({ message: "Correct Logout", duration: ToastAndroid.SHORT });
  };

  return { onPressAuth, onPressSignOut };
};
