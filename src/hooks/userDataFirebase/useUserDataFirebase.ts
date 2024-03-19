import { useState } from "react";
import { UserDataFirebase, UseUserDataFirebaseProps } from "../../types";

export const useUserDataFirebase = (): UseUserDataFirebaseProps => {
  const [userDataFirebase, setUserDataFirebase] = useState<UserDataFirebase>();
  const [allUsersData, setAllUsersData] = useState<UserDataFirebase[]>();
  const [data, setData] = useState<UserDataFirebase>();

  return {
    userDataFirebase,
    allUsersData,
    data,
    setUserDataFirebase,
    setAllUsersData,
    setData,
  };
};
