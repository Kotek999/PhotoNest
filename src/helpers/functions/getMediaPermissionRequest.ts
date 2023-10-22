import appJSON from "../../../app.json";
import * as MediaLibrary from "expo-media-library";
import { Alert, Linking } from "react-native";
import { SetState } from "../../types";

export const getMediaPermissionRequest = async (
  setPermission: SetState<boolean | null>
) => {
  const { granted } = await MediaLibrary.requestPermissionsAsync();
  setPermission(granted);

  if (!granted) {
    Alert.alert(
      "Permission needed",
      `In order to use the media library, you must give permission for ${`${appJSON.expo.name}`} to access the camera. You can grant this permission in the Settings app.`,
      [
        {
          text: "Cancel",
          onPress: () => {
            return;
          },
          style: "cancel",
        },
        {
          text: "Go to Settings",
          onPress: () => Linking.openSettings(),
        },
      ],
      { cancelable: true }
    );
  }
};
