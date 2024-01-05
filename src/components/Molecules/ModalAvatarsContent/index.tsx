import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { renderAvatarItem } from "../../Atoms/RenderAvatarItem";
import { RenderAvatar } from "../../Atoms/RenderAvatar";
import { RenderAvatarsList } from "../../Atoms/RenderAvatarsFlatList";
import { RenderAvatarsCategories } from "../../Atoms/RenderAvatarsCategories";
import { JSX, ModalAvatarsContentProps } from "../../../types";

export const ModalAvatarsContent = (props: ModalAvatarsContentProps): JSX => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <RenderAvatar
          tempSelectedAvatar={props.tempSelectedAvatar}
          directPath={props.directPath}
          nickname={props.nickname}
        />
        <RenderAvatarsCategories
          activeCategory={props.activeCategory}
          setActiveCategory={props.setActiveCategory}
        />
        <RenderAvatarsList
          data={props.data}
          activeCategory={props.activeCategory}
          tempSelectedAvatar={props.tempSelectedAvatar}
          renderItem={props.renderItem}
          renderAvatarItem={renderAvatarItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "70%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
});
