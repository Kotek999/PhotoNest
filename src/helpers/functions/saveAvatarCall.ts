import textData from "../../../textData.json";
import { Alert } from "react-native";
import { saveAvatar } from "../../redux/saveAvatar/action";
import { useCallbackFunction } from "../../helpers/functions/useCallbackFunction";
import { CancelStyle, SaveAvatarCallProps } from "../../types";

export const saveAvatarCall = (props: SaveAvatarCallProps) => {
  const call = useCallbackFunction(() => {
    if (props.tempSelectedAvatar) {
      Alert.alert(
        textData.value.alert.confirm,
        textData.value.alert.saveAvatarMessage,
        [
          {
            text: textData.value.alert.cancel,
            style: textData.value.alert.cancelStyle as CancelStyle,
            onPress: () => {
              props.setModalVisible(false);
            },
          },
          {
            text: textData.value.alert.option.yes,
            onPress: () => {
              props.setSelectedAvatar({ uri: props.tempSelectedAvatar });
              props.dispatch(
                saveAvatar({
                  assets: [{ directPath: props.tempSelectedAvatar }],
                })
              );
              props.setModalVisible(false);
            },
          },
        ],
        { cancelable: false }
      );
    }
  });
  return call;
};
