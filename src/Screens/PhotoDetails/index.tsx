import React, { useEffect, useCallback } from "react";
import { JSX } from "../../types";
import { SCREEN } from "../../../routes";
import { PhotoDetailsScreenProps } from "../../../rootTypeList";
import { useDispatch } from "react-redux";
import { setColight, setPoints } from "../../redux/setColight/action";
import { getUserDataByUid } from "../../helpers/functions/getUserDataByUid";
import { getUserRightPathByUid } from "../../helpers/functions/getUserRightPathByUid";
import { getPoints } from "../../helpers/functions/getPoints";
import { useUserData } from "../../helpers/functions/useUserData";
import { PhotoDetailsContent } from "../../components/Organisms/PhotoDetailsContent";
import { Screen } from "../../components/Atoms/Screen";
import { useReduxActionWithDispatch } from "../../hooks/dispatch/useReduxDispatch";
import { useNavigation } from "../../hooks/navigation/useNavigation";
import { useLoaded } from "../../hooks/loaded/useLoaded";
import { usePoints } from "../../hooks/points/usePoints";
import { useUserPhotos } from "../../hooks/userPhotos/useUserPhotos";
import { useUserDataFirebase } from "../../hooks/userDataFirebase/useUserDataFirebase";

export const PhotoDetails = ({
  navigation,
  route,
}: PhotoDetailsScreenProps<SCREEN.PhotoDetails>): JSX => {
  const {
    isContentLoaded,
    isPathsLoaded,
    setIsContentLoaded,
    setIsPathsLoaded,
  } = useLoaded();
  const { isColightExist, pointsValue, setIsColightExist, setPointsValue } =
    usePoints();
  const { photoPaths, setPhotoPaths } = useUserPhotos();
  const { data, setData } = useUserDataFirebase();

  const { photoData } = route.params;

  const dispatch = useDispatch();
  const { useDispatchEffect } = useReduxActionWithDispatch();
  const { onPressGoBack } = useNavigation({ navigation, route });
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

  useDispatchEffect(setPoints({ points: points, userId: user.uid }), true);

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
