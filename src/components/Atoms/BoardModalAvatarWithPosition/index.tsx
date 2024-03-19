import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import {
  JSX,
  BoardRowProps as BoardModalAvatarWithPositionProps,
} from "../../../types";
import { COLORS } from "../../../colors";
import { Spinner } from "../Spinner";
import { PositionIcons } from "../PositionIcons";
import { BoardModalAvatarWithUserInfo } from "../BoardModalAvatarWithUserInfo";

export const BoardModalAvatarWithPosition = (
  props: BoardModalAvatarWithPositionProps
): JSX => {
  return (
    <>
      {props.isContentLoaded ? (
        <>
          <BoardModalAvatarWithUserInfo
            isContentLoaded={props.isContentLoaded}
            data={props.data}
          />
          <View style={styles.positionContainer}>
            <Text style={styles.positionValue}>No. </Text>
            <PositionIcons position={props.data.position} />
          </View>
        </>
      ) : (
        <Spinner isDefaultOptions />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  positionContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 30,
    right: 20,
    padding: 5,
    borderRadius: 20,
  },
  positionValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.white,
    fontFamily: "Open-Sans",
  },
});
