import EvilIcons from "@expo/vector-icons/EvilIcons";
import React from "react";
import Modal from "react-native-modal";
import { TouchableOpacity, StyleSheet } from "react-native";
import { View, Text, Button } from "react-native-ui-lib";
import { COLORS } from "../../../colors";
import { screenHeight, screenWidth } from "../../../helpers/dimensions";
import { renderAvatarItem } from "../../Atoms/RenderAvatarItem";
import { ModalAvatarsContent } from "../ModalAvatarsContent";
import { JSX, ModalAvatarsProps } from "../../../types";

export const ModalAvatars = (props: ModalAvatarsProps): JSX => {
  return (
    <Modal
      isVisible={props.isModalVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      style={styles.modal}
      onBackdropPress={props.onPressCloseModal}
      onBackButtonPress={props.onPressCloseModal}
    >
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.titleValue}>Avatar Preview</Text>
            {props.isSaveAvatarButtonDisabled && (
              <TouchableOpacity>
                <EvilIcons
                  name="close"
                  size={34}
                  style={styles.icon}
                  color={COLORS.sunsetOrange}
                  onPress={props.onPressCloseModal}
                />
              </TouchableOpacity>
            )}
          </View>

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
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.purpleBg,
    height: screenHeight / 1.5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleValue: {
    color: COLORS.white,
    padding: 14,
    fontSize: 22,
    letterSpacing: 0.5,
    fontFamily: "Open-Sans",
  },
  icon: {
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginRight: 16,
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
});
