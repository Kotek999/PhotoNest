import { ImageAssetsData, SetState } from "../../types";
import { ref, onValue, DataSnapshot } from "firebase/database";
import { db } from "../../../FirebaseConfig";

export const getPhotosFromFirebase = async (
  setImages: SetState<ImageAssetsData[]>,
  setImagesLoaded: SetState<boolean>
) => {
  const uniqueKeysRef = ref(db, `public/photos`);

  try {
    const snapshot: DataSnapshot = await new Promise((resolve, reject) => {
      onValue(uniqueKeysRef, resolve, reject);
    });

    if (snapshot.exists()) {
      const uniqueKeys = Object.keys(snapshot.val());
      const imagesArray: ImageAssetsData[] = [];

      for (const key of uniqueKeys) {
        const contentRef = ref(db, `public/photos/${key}/photo`);
        const contentSnapshot: DataSnapshot = await new Promise(
          (resolve, reject) => {
            onValue(contentRef, resolve, reject);
          }
        );

        if (contentSnapshot.exists()) {
          const content: ImageAssetsData = contentSnapshot.val();
          imagesArray.push(content);
        }
      }

      setImages(imagesArray);
      setImagesLoaded(true);
    }
  } catch (error) {
    console.error("Error while reading data:", error);
  }
};
