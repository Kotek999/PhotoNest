import React, { useMemo } from "react";
import { FlatList } from "react-native";
import { JSX, RenderFlatListProps } from "../../../types";
import { renderAvatarItem } from "../../Atoms/RenderAvatarItem";

export const RenderAvatarsList = (props: RenderFlatListProps): JSX => {
  const flatList: JSX = useMemo(() => {
    const data = props.data[props.activeCategory] || [];
    return (
      <FlatList
        horizontal
        data={data}
        renderItem={props.renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        extraData={props.tempSelectedAvatar}
      />
    );
  }, [props.activeCategory, props.tempSelectedAvatar, renderAvatarItem]);

  return flatList;
};
