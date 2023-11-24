import textData from "../../../textData.json";
import { ImageAssetsData, SetState } from "../../types";
import { ref } from "firebase/database";
import { db } from "../../../FirebaseConfig";
import { createPromiseWithValue } from "./createPromiseWithValue";

export const getPhotosFromFirebase = async (
  setImages: SetState<ImageAssetsData[]>,
  setImagesLoaded: SetState<boolean>
) => {
  const uniqueKeysRef = ref(db, textData.value.firebase.photoKeyRef);

  try {
    const snapshot = await createPromiseWithValue(uniqueKeysRef);

    if (snapshot.exists()) {
      const uniqueKeys = Object.keys(snapshot.val());
      const imagesArray: ImageAssetsData[] = [];

      for (const key of uniqueKeys) {
        const contentRef = ref(
          db,
          `${textData.value.firebase.photoContentRef}${key}${textData.value.firebase.photoPath}`
        );
        const contentSnapshot = await createPromiseWithValue(contentRef);

        if (contentSnapshot.exists()) {
          const content: ImageAssetsData = contentSnapshot.val();
          imagesArray.push(content);
        }
      }

      setImages(imagesArray);
      setImagesLoaded(true);
    }
  } catch (error) {
    console.error(textData.value.firebase.error.readingData, error);
  }
};
