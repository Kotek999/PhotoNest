import { useCallback } from "react";
import { BackHandler } from "react-native";
import { pressBackButton } from "./pressBackButton";

export const backHandlerCall = () => {
  const callback = useCallback(() => {
    BackHandler.addEventListener("hardwareBackPress", pressBackButton);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", pressBackButton);
    };
  }, []);

  return callback;
};
