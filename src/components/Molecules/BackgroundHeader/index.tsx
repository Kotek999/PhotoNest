import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { JSX, BackgroundHeaderProps } from "../../../types";
import { screenHeight, screenWidth } from "../../../helpers/dimensions";
import { Spinner } from "../../../components/Atoms/Spinner";
import { rankingBgImg } from "../../../helpers/imageRequirements";
import { ScoreBoardHeader } from "../../Atoms/ScoreBoardHeader";
import { TouchableAvatarWithUserInfo } from "../../Atoms/TouchableAvatarWithUserInfo";

export const BackgroundHeader = (props: BackgroundHeaderProps): JSX => {
  return (
    <ImageBackground
      source={rankingBgImg}
      style={styles.imgBgContainer}
      resizeMode="cover"
      resizeMethod="scale"
      alt="photo"
    >
      <ScoreBoardHeader isTitleExist onPressGoBack={props.onPressGoBack} />
      {props.isContentLoaded ? (
        <View style={styles.container}>
          <TouchableAvatarWithUserInfo
            onPressGoToProfile={props.onPressGoToProfile}
            userDataFirebase={props.userDataFirebase}
          />
        </View>
      ) : (
        <Spinner isDefaultOptions />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBgContainer: {
    width: screenWidth,
    height: screenHeight / 3,
    alignSelf: "center",
    marginTop: 24,
  },
  container: {
    position: "absolute",
    bottom: 30,
    left: 20,
    padding: 5,
    borderRadius: 20,
  },
});
