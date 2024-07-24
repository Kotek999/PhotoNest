import { useState } from "react";
import { AvatarSourceProp, OptionalString, SetState } from "../../types";

type UseAvatarProps = {
  selectedAvatar: AvatarSourceProp;
  activeCategory: string;
  tempSelectedAvatar: OptionalString;
  isAvatarChangedMessage: boolean;
  setSelectedAvatar: SetState<AvatarSourceProp>;
  setActiveCategory: SetState<string>;
  setTempSelectedAvatar: SetState<OptionalString>;
  setIsAvatarChangedMessage: SetState<boolean>;
};

export const useAvatar = (): UseAvatarProps => {
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarSourceProp>();
  const [activeCategory, setActiveCategory] = useState<string>("People");
  const [tempSelectedAvatar, setTempSelectedAvatar] =
    useState<OptionalString>();
  const [isAvatarChangedMessage, setIsAvatarChangedMessage] =
    useState<boolean>(false);

  return {
    selectedAvatar,
    activeCategory,
    tempSelectedAvatar,
    isAvatarChangedMessage,
    setSelectedAvatar,
    setActiveCategory,
    setTempSelectedAvatar,
    setIsAvatarChangedMessage,
  };
};
