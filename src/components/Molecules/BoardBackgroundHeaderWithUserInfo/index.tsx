import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { JSX, BoardBackgroundHeaderWithUserInfoProps } from "../../../types";
import { screenWidth, screenHeight } from "../../../helpers/dimensions";
import { rankingBgImg } from "../../../helpers/imageRequirements";
import { ScoreBoardHeader } from "../../Atoms/ScoreBoardHeader";
import { BoardModalAvatarWithPosition } from "../../Atoms/BoardModalAvatarWithPosition";

export const BoardBackgroundHeaderWithUserInfo = (
  props: BoardBackgroundHeaderWithUserInfoProps
): JSX => {
  return (
    <ImageBackground
      source={rankingBgImg}
      style={styles.imgBg}
      resizeMode="cover"
      resizeMethod="scale"
      alt="photo"
    >
      <ScoreBoardHeader onPressGoBack={props.onPressGoBack} />
      <BoardModalAvatarWithPosition
        isContentLoaded={props.isContentLoaded}
        data={props.data}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBg: {
    width: screenWidth,
    height: screenHeight / 3,
    alignSelf: "center",
    marginTop: 0,
  },
});
