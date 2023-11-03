import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { JSX, AddPhotoButtonProps } from "../../../types";
import { COLORS } from "../../../colors";

export const AddPhotoButton = (props: AddPhotoButtonProps): JSX => {
  const permission = props.mediaPermission;

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.opacityContainer}
        onPress={
          permission === false
            ? () => props.setIsPermissionRequest(true)
            : () => props.addPhoto()
        }
      >
        <View
          style={{
            ...styles.container,
            backgroundColor:
              permission === false || permission === null
                ? COLORS.grayField
                : COLORS.emerald,
          }}
        >
          <FontAwesome5 name="plus" size={20} color={COLORS.white} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    bottom: 40,
    right: 20,
  },
  opacityContainer: {
    top: -30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: COLORS.darkOpacity,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 35,
  },
});
