import React from "react";
import { Text } from "react-native-ui-lib";
import { ContentData, JSX } from "../../../types";
import { COLORS } from "../../../colors";

type SubSectionNumberProps = {
  item: ContentData;
  contentItem: ContentData;
  moreThanValue: number;
  isDefault: boolean;
};

export const SubSectionNumber = (props: SubSectionNumberProps): JSX => {
  const newCondition = props.isDefault ? 3 : props.moreThanValue;
  return (
    <>
      {props.item.id >= newCondition ? null : (
        <>
          <Text
            style={{
              fontSize: 14,
              color: COLORS.emerald,
            }}
          >
            {`${props.contentItem.id}.`}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: COLORS.white,
            }}
          >
            {props.item.id}
          </Text>
        </>
      )}
    </>
  );
};
