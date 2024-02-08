import textData from "../../../textData.json";
import { UserDataInfo, SetState } from "../../types";
import { db } from "../../../FirebaseConfig";
import { ref, get } from "firebase/database";

export const getUserRightPathByUid = async (
  uid: string | undefined,
  receivedUid: UserDataInfo,
  setPointsValue: SetState<number[]>,
  setPhotoPaths: SetState<string[]>,
  setIsPathsLoaded: SetState<boolean>
) => {
  try {
    const fetchData = async (
      userUidPath: string | undefined | UserDataInfo,
      forRightColightPath: boolean
    ) => {
      const pathType = forRightColightPath
        ? textData.value.firebase.field.received
        : textData.value.firebase.field.given;
      const userDataRef = ref(
        db,
        `${textData.value.firebase.usersPath}${userUidPath}${textData.value.firebase.colightPathRef}${pathType}`
      );
      const userDataSnapshot = await get(userDataRef);

      if (userDataSnapshot.exists()) {
        const data = userDataSnapshot.val();
        const values: (string | number)[] = [];

        Object.values(data).forEach((item: any) => {
          const path =
            item.forPhoto?.[
              forRightColightPath
                ? textData.value.firebase.field.value
                : textData.value.firebase.field.directUrl
            ];

          if (path) {
            values.push(path);
          }
        });

        if (forRightColightPath) {
          setPointsValue(values as number[]);
        } else {
          setPhotoPaths(Array.from(new Set(values as string[])));
        }
        setIsPathsLoaded(true);
      } else {
        console.warn(textData.value.firebase.error.dataNotExist);
      }
    };

    await Promise.all([fetchData(uid, false), fetchData(receivedUid, true)]);
  } catch (error) {
    console.error(textData.value.firebase.error.readingData, error);
  }
};
