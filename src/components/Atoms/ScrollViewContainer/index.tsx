import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { JSX, ScrollViewContainerProps } from "../../../types";
import { COLORS } from "../../../colors";
import { screenWidth, screenHeight } from "../../../helpers/dimensions";

export const ScrollViewContainer = (props: ScrollViewContainerProps): JSX => {
  return (
    <ScrollView
      style={props.isDefaultOptions ? styles.scrollView : props.style}
      contentContainerStyle={
        props.isDefaultOptions
          ? styles.scrollViewContent
          : props.contentContainerStyle
      }
      showsVerticalScrollIndicator={false}
      refreshControl={props.refreshControl}
    >
      {props.children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: screenWidth,
    height: screenHeight,
  },
  scrollViewContent: {
    flexGrow: 1,
    bottom: 0,
    backgroundColor: COLORS.purpleBg,
  },
});
