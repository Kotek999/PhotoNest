import React, { useCallback } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "react-native-ui-lib";
import { JSX, RenderItemProps } from "../../../types";

export const renderAvatarItem = (selectAvatar: (...args: any[]) => void) => {
  const item = useCallback(
    (props: RenderItemProps): JSX => {
      const uri = props.item.source;
      return (
        <TouchableOpacity onPress={() => selectAvatar({ uri: uri })}>
          <Image source={{ uri: uri }} style={styles.image} />
        </TouchableOpacity>
      );
    },
    [selectAvatar]
  );

  return item;
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
  },
});
