import React, { useState } from "react";
import {
  JSX,
  AvatarSourceProp,
  UserProfileAvatarWithButtonProps,
  OptionalString,
} from "../../../types";
import { useDispatch } from "react-redux";
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
  const [activeCategory, setActiveCategory] = useState<string>("People");
  const [isAvatarChangedMessage, setIsAvatarChangedMessage] =
    useState<boolean>(false);

  const getAvatar = selectAvatar(setTempSelectedAvatar);

  const onPressSaveAvatar = saveAvatarCall({
    tempSelectedAvatar: tempSelectedAvatar,
    setSelectedAvatar: setSelectedAvatar,
    setIsAvatarChangedMessage: setIsAvatarChangedMessage,
    dispatch: dispatch,
  });

  const isSaveAvatarButtonDisabled = !tempSelectedAvatar;
  const renderItem = renderAvatarItem(getAvatar);

  return (
    <UserProfileAvatarContent
      isAvatarChangedMessage={isAvatarChangedMessage}
      isSaveAvatarButtonDisabled={isSaveAvatarButtonDisabled}
      directPath={props.userData?.avatar.directPath}
      nickname={props.userData?.nickname}
      selectedAvatar={selectedAvatar}
      source={selectedAvatar}
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
      onPressSignOut={props.onPressSignOut}
      onPressSaveAvatar={onPressSaveAvatar}
    />
  );
};
