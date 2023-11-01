import textData from "../../../textData.json";
import appJSON from "../../../app.json";
import * as MediaLibrary from "expo-media-library";
import { Alert, Linking } from "react-native";
import { CancelStyle, SetState } from "../../types";

export const getMediaPermissionRequest = async (
  setPermission: SetState<boolean | null>
) => {
  const { granted } = await MediaLibrary.requestPermissionsAsync();
  setPermission(granted);

  if (!granted) {
    Alert.alert(
      textData.value.alert.permission.title,
      `${
        textData.value.alert.permission.content.part1
      } ${`${appJSON.expo.name}`} ${
        textData.value.alert.permission.content.part2
      } `,
      [
        {
          text: textData.value.alert.cancel,
          onPress: () => {
            return;
          },
          style: textData.value.alert.cancelStyle as CancelStyle,
        },
        {
          text: textData.value.alert.permission.settings,
          onPress: () => Linking.openSettings(),
        },
      ],
      { cancelable: true }
    );
  }
};
