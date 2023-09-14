// useToast.ts
import { useState } from "react";
import { ToastAndroid } from "react-native";
import { ShowToastProps } from "../../types";

export const useToast = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = ({
    message,
    duration = ToastAndroid.SHORT,
  }: ShowToastProps) => {
    setToastMessage(message);
    ToastAndroid.show(message, duration);
  };

  return { toastMessage, showToast };
};
