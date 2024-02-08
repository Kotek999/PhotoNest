import React, { useState, useEffect, useCallback } from "react";
import { JSX, UserDataFirebase } from "../../types";
import { SCREEN } from "../../../routes";
import { PhotoDetailsScreenProps } from "../../../rootTypeList";
import { useFocusEffect } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setColight, setPoints } from "../../redux/setColight/action";
import { getUserDataByUid } from "../../helpers/functions/getUserDataByUid";
import { getUserRightPathByUid } from "../../helpers/functions/getUserRightPathByUid";
import { getPoints } from "../../helpers/functions/getPoints";
import { useUserData } from "../../helpers/functions/useUserData";
import { PhotoDetailsContent } from "../../components/Organisms/PhotoDetailsContent";
import { Screen } from "../../components/Atoms/Screen";

export const PhotoDetails = ({
  navigation,
  route,
}: PhotoDetailsScreenProps<SCREEN.PhotoDetails>): JSX => {
  const { photoData } = route.params;

  const dispatch = useDispatch();

  const onPressGoBack = () => navigation.goBack();
  const onPressSetColight = useCallback(() => {
    dispatch(
      setColight({
        colight: {
          given: user.forPhotoData,
          received: user.forPhotoData,
        },
        currentUserId: user.currentUid,
        userId: user.uid,
      })
    );
    setIsColightExist(!isColightExist);
  }, []);

  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);
  const [isPathsLoaded, setIsPathsLoaded] = useState<boolean>(false);
  const [isColightExist, setIsColightExist] = useState<boolean>(true);
  const [pointsValue, setPointsValue] = useState<number[]>([]);
  const [photoPaths, setPhotoPaths] = useState<string[]>([]);
  const [data, setData] = useState<UserDataFirebase>();

  const user = useUserData(photoData, data);
  const points = getPoints(pointsValue);
  const isLiked = photoPaths.includes(user.forPhotoData.forPhoto.directUrl);

  useEffect(() => {
    getUserDataByUid(user.uid, setData, setIsContentLoaded);
    getUserRightPathByUid(
      user.currentUid,
      user.uid,
      setPointsValue,
      setPhotoPaths,
      setIsPathsLoaded
    );
  }, []);

  useFocusEffect(() => {
    dispatch(setPoints({ points: points, userId: user.uid }));
  });

  return (
    <Screen styleOfStatusBar="light">
      <PhotoDetailsContent
        isContentLoaded={isContentLoaded}
        isPathsLoaded={isPathsLoaded}
        isColightExist={isColightExist}
        isLiked={isLiked}
        onPressGoBack={onPressGoBack}
        onPressSetColight={onPressSetColight}
        user={user}
        points={points}
      />
    </Screen>
  );
};
