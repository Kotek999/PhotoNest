import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Button } from "react-native-ui-lib";
import { COLORS } from "../../../colors";
import { screenHeight, screenWidth } from "../../../helpers/dimensions";
import { renderAvatarItem } from "../../Atoms/RenderAvatarItem";
import { ModalAvatarsContent } from "../ModalAvatarsContent";
import { JSX, ModalAvatarsProps } from "../../../types";

export const ModalAvatars = (props: ModalAvatarsProps): JSX => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <ModalAvatarsContent
          data={props.data}
          activeCategory={props.activeCategory}
          setActiveCategory={props.setActiveCategory}
          tempSelectedAvatar={props.tempSelectedAvatar}
          directPath={props.directPath}
          nickname={props.nickname}
          renderItem={props.renderItem}
          renderAvatarItem={renderAvatarItem}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={props.onPressSaveAvatar}
            style={[
              styles.button,
              {
                backgroundColor: props.isSaveAvatarButtonDisabled
                  ? COLORS.grayItemMenu
                  : COLORS.emerald,
              },
            ]}
            color={COLORS.white}
            size="large"
            label="Save"
            labelStyle={[
              styles.buttonLabel,
              {
                color: props.isSaveAvatarButtonDisabled
                  ? COLORS.lightGrayInput
                  : COLORS.white,
              },
            ]}
            disabled={props.isSaveAvatarButtonDisabled}
          />
        </View>
        {props.isAvatarChangedMessage && (
          <Text style={styles.changedAvatarValue}>Your Avatar has changed</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.purpleBg,
    height: screenHeight / 1.3,
  },
  titleValue: {
    color: COLORS.white,
    padding: 14,
    fontSize: 22,
    letterSpacing: 0.5,
    fontFamily: "Open-Sans",
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    width: screenWidth / 2,
    borderRadius: 50,
  },
  buttonLabel: {
    fontFamily: "Open-Sans",
    letterSpacing: 1.1,
    fontSize: 18,
    fontWeight: "700",
  },
  changedAvatarValue: {
    marginTop: 20,
    textAlign: "center",
    color: COLORS.grayField,
    fontSize: 18,
    letterSpacing: 0.6,
    fontFamily: "Open-Sans",
  },
});
