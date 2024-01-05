import * as ImagePicker from "expo-image-picker";
import { ImageAssetsData, PhotoInfoProps } from "../../types";
import { savePhoto } from "../../redux/savePhotos/action";
import {
  getStorage,
  ref as firebaseStorageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { generateUniqueValues } from "./generateUniqueValues";
import { getCurrent } from "./getCurrent";
import { getPhotosFromFirebase } from "./getPhotosFromFirebase";
import { showCurrentLoggedUser } from "./showCurrentLoggedUser";
import { auth } from "../../../FirebaseConfig";

export const getPhotoInfo = async (props: PhotoInfoProps) => {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    const storage = getStorage();
    const ref = firebaseStorageRef(
      storage,
      generateUniqueValues(9).uniqueIdFileName
    );

    const img = await fetch(result.assets[0].uri);
    const bytes = await img.blob();

    await uploadBytes(ref, bytes);

    const downloadURL = await getDownloadURL(ref);

    const assets: ImageAssetsData[] = [
      {
        directUrl: downloadURL,
        addedBy: props.userDataFirebase?.nickname as string,
        createdAt: {
          date: getCurrent().date,
          time: getCurrent().time,
        },
        type: "image",
        userId: auth.currentUser?.uid as string,
      },
    ];
    props.setAddedPhoto(downloadURL);
    props.dispatch(savePhoto({ assets: assets }));
    getPhotosFromFirebase(props.setPhotos, props.setIsPhotosLoaded);
    showCurrentLoggedUser(props.setUserVisible, props.isUserVisible);
  }
};
