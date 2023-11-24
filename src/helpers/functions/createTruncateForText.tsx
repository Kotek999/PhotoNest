import React from "react";
import { Text } from "react-native-ui-lib";
import { JSX } from "../../types";
import { COLORS } from "../../colors";

export const createTruncateForText = (
  text: string | undefined,
  limit: number
): string | JSX => {
  if (text && text.length <= limit) {
    return text;
  } else {
    return (
      <Text style={{ color: COLORS.grayItemMenu, letterSpacing: 0.5 }}>
        {text && text.substring(0, limit)}
        <Text style={{ color: COLORS.white }}>...</Text>
      </Text>
    );
  }
};
