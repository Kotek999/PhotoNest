import { ImageSourcePropType } from "react-native";
import { useCallbackFunction } from "./useCallbackFunction";
import { SetState } from "../../types";

export const selectAvatar = (setAction: SetState<string | undefined>) => {
  const avatar = useCallbackFunction((image: ImageSourcePropType) => {
    if (typeof image === "object" && "uri" in image) {
      setAction(image.uri);
    }
  });

  return avatar;
};
