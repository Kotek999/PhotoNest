import textData from "../../../textData.json";
import React from "react";
import { Avatar } from "react-native-ui-lib";
import { Children, Users, UserAvatarPathProps } from "../../types";
import { COLORS } from "../../colors";
import { getFirstLetter } from "../../helpers/functions/getFirstLetter";
import { get, ref } from "firebase/database";
import { db } from "../../../FirebaseConfig";

export const getUserAvatarPath = async (
  props: UserAvatarPathProps
): Promise<Children> => {
  try {
    const userRef = ref(db, textData.value.firebase.usersPath);
    const snapshot = await get(userRef);
    const users: Users = snapshot.val();

    const userAvatarPath = users[props.uid].avatar.directPath;

    const renderAvatar =
      userAvatarPath === "" ? (
        <Avatar
          label={getFirstLetter(props.addedBy as string)}
          labelColor="white"
          size={40}
          backgroundColor={COLORS.darkOpacity}
        />
      ) : (
        <Avatar size={40} source={{ uri: userAvatarPath }} />
      );
    return renderAvatar;
  } catch (error) {
    console.error(textData.value.firebase.error.readingData, error);
  }
};
