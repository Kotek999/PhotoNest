import textData from "../../../textData.json";
import { BackHandler, Alert } from "react-native";
import { CancelStyle } from "../../types";

export const pressBackButton = () => {
  Alert.alert(
    textData.value.alert.confirm,
    textData.value.alert.exitTheAppMessage,
    [
      {
        text: textData.value.alert.cancel,
        style: textData.value.alert.cancelStyle as CancelStyle,
      },
      {
        text: textData.value.alert.option.yes,
        onPress: () => BackHandler.exitApp(),
      },
    ]
  );
  return true;
};
