import { useState } from "react";
import {
  UserPhotosData,
  ImageAssetsData,
  Children,
  UseUserPhotosProps,
} from "../../types";

export const useUserPhotos = (): UseUserPhotosProps => {
  const [userPhotos, setUserPhotos] = useState<UserPhotosData[]>([]);
  const [photoPaths, setPhotoPaths] = useState<string[]>([]);
  const [photos, setPhotos] = useState<ImageAssetsData[]>([]);
  const [addedPhoto, setAddedPhoto] = useState<string>("");
  const [userAvatar, setUserAvatar] = useState<Children | null>(null);
  const [isPhotosNotExist, setIsPhotosNotExist] = useState<boolean>(false);

  return {
    userPhotos,
    photoPaths,
    photos,
    addedPhoto,
    userAvatar,
    isPhotosNotExist,
    setUserPhotos,
    setPhotoPaths,
    setPhotos,
    setAddedPhoto,
    setUserAvatar,
    setIsPhotosNotExist,
  };
};
