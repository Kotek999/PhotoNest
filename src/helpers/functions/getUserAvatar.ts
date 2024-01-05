import { UserAvatarProps } from "../../types";
import { getUserAvatarPath } from "./getUserAvatarPath";

export const getUserAvatar = async (props: UserAvatarProps) => {
  const avatar = await getUserAvatarPath({
    uid: props.uid,
    addedBy: props.addedBy,
  });
  props.setUserAvatar(avatar);
  props.setIsContentLoaded(true);
};
