import React from "react";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { View, Text } from "react-native-ui-lib";
import { JSX, UserSettingsAvatarWithNameProps } from "../../../types";
import { COLORS } from "../../../colors";
import { renderAvatarItem } from "../../../components/Atoms/RenderAvatarItem";
import { avatarsImages } from "../../../components/Data/Avatars";
import { useBottomModal } from "../../../helpers/functions/useBottomModal";
import { BottomModal } from "../../../components/Atoms/BottomModal";
import { ModalAvatars } from "../../../components/Molecules/ModalAvatars";
import { selectAvatar } from "../../../helpers/functions/selectAvatar";
import { saveAvatarCall } from "../../../helpers/functions/saveAvatarCall";
import { UserAvatarWithIcon } from "../../Atoms/UserAvatarWithIcon";
import { useAvatar } from "../../../hooks/avatar/useAvatar";

export const UserSettingsAvatarWithName = (
  props: UserSettingsAvatarWithNameProps
): JSX => {
  const dispatch = useDispatch();
  const {
    selectedAvatar,
    activeCategory,
    tempSelectedAvatar,
    isAvatarChangedMessage,
    setSelectedAvatar,
    setActiveCategory,
    setTempSelectedAvatar,
    setIsAvatarChangedMessage,
  } = useAvatar();

  const onPressSaveAvatar = saveAvatarCall({
    tempSelectedAvatar: tempSelectedAvatar,
    setSelectedAvatar: setSelectedAvatar,
    setIsAvatarChangedMessage: setIsAvatarChangedMessage,
    dispatch: dispatch,
  });

  const isSaveAvatarButtonDisabled = !tempSelectedAvatar;
  const getAvatar = selectAvatar(setTempSelectedAvatar);
  const renderItem = renderAvatarItem(getAvatar);

  const modal = useBottomModal();
  const openModal = () => modal.onPressOpenModal(0);

  return (
    <View style={styles.mainContainer}>
      <View>
        <UserAvatarWithIcon
          userData={props.userData}
          selectedAvatar={selectedAvatar}
          openModal={openModal}
        />

        <BottomModal
          ref={modal.bottomSheetModalRef}
          snapPointsValue="100%"
          enableContentPanningGesture={false}
          onPressCloseModal={modal.onPressCloseModal}
          isTitleExist
          title="Avatar Preview"
        >
          <ModalAvatars
            isAvatarChangedMessage={isAvatarChangedMessage}
            isSaveAvatarButtonDisabled={isSaveAvatarButtonDisabled}
            data={avatarsImages}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            tempSelectedAvatar={tempSelectedAvatar}
            directPath={props.userData?.avatar.directPath}
            nickname={props.userData?.nickname}
            renderItem={renderItem}
            renderAvatarItem={renderAvatarItem}
            onPressSaveAvatar={onPressSaveAvatar}
          />
        </BottomModal>
      </View>
      <Text style={styles.value}>{props.userData?.nickname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
  },
  value: {
    marginTop: 10,
    color: COLORS.white,
    fontSize: 24,
    fontFamily: "Open-Sans",
    letterSpacing: 0.5,
  },
});
