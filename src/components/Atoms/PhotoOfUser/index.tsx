import { Image, StyleSheet } from "react-native";
import { PhotoProps, JSX } from "../../../types";
import { screenWidth } from "../../../helpers/dimensions";

export const PhotoOfUser = (props: PhotoProps): JSX => {
  return (
    <Image
      source={{ uri: props.uri }}
      style={{ ...styles.image, marginBottom: props.mb }}
      resizeMode="cover"
      resizeMethod="scale"
      alt="photo"
    />
  );
};

const styles = StyleSheet.create({
  image: {
    flexGrow: 1,
    alignSelf: "center",
    width: screenWidth - 20,
    height: "100%",
    borderRadius: 16,
  },
});
