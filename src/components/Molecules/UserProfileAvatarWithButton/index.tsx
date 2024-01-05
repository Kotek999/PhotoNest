import React, { useState } from "react";
import {
  JSX,
  AvatarSourceProp,
  UserProfileAvatarWithButtonProps,
  OptionalString,
} from "../../../types";
import { useDispatch } from "react-redux";
import { useCallbackFunction } from "../../../helpers/functions/useCallbackFunction";
import { renderAvatarItem } from "../../Atoms/RenderAvatarItem";
import { UserProfileAvatarContent } from "../../Organisms/UserProfileAvatarContent";
import { selectAvatar } from "../../../helpers/functions/selectAvatar";
import { saveAvatarCall } from "../../../helpers/functions/saveAvatarCall";
import { avatarsImages } from "../../Data/Avatars";

export const UserProfileAvatarWithButton = (
  props: UserProfileAvatarWithButtonProps
): JSX => {
  const dispatch = useDispatch();

  const [selectedAvatar, setSelectedAvatar] = useState<AvatarSourceProp>();
  const [tempSelectedAvatar, setTempSelectedAvatar] =
    useState<OptionalString>();
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>("People");

  const getAvatar = selectAvatar(setTempSelectedAvatar);

  const onCloseCallback = useCallbackFunction(
    (callback: (value: boolean) => void) => {
      callback(false);
    }
  );

  const modalVisible = () => setModalVisible(true);
  const closeModal = () => onCloseCallback(setModalVisible);

  const onPressSaveAvatar = saveAvatarCall({
    tempSelectedAvatar: tempSelectedAvatar,
    setModalVisible: setModalVisible,
    setSelectedAvatar: setSelectedAvatar,
    dispatch: dispatch,
  });

  const isSaveAvatarButtonDisabled = !tempSelectedAvatar;
  const renderItem = renderAvatarItem(getAvatar);

  return (
    <UserProfileAvatarContent
      directPath={props.userData?.avatar.directPath}
      nickname={props.userData?.nickname}
      selectedAvatar={selectedAvatar}
      source={selectedAvatar}
      isModalVisible={isModalVisible}
      isSaveAvatarButtonDisabled={isSaveAvatarButtonDisabled}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      tempSelectedAvatar={tempSelectedAvatar}
      renderItem={renderItem}
      renderAvatarItem={renderAvatarItem}
      data={avatarsImages}
      userData={props.userData}
      visible={props.isDialogVisible}
      visibleLength={props.visibleLength}
      onPressTruncate={props.onPressTruncate}
      onPressOpenDialog={props.onPressOpenDialog}
      onPressCloseDialog={props.onPressCloseDialog}
      onPress={modalVisible}
      onPressCloseModal={closeModal}
      onPressSignOut={props.onPressSignOut}
      onPressSaveAvatar={onPressSaveAvatar}
    />
  );
};
