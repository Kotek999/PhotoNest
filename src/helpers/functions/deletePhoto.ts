import { Alert } from "react-native";

export const deletePhoto = () =>
  Alert.alert(
    "Confirmation",
    "Are you sure you want to delete this photo?",
    [
      {
        text: "Cancel",
        style: "cancel",
        onPress: () => {
          null;
        },
      },
      {
        text: "yes",
        onPress: () => {
          console.log("photo deleted");
        },
      },
    ],
    { cancelable: false },
  );
