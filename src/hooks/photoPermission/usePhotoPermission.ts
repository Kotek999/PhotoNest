import { useState } from "react";
import { UsePhotoPermissionProps } from "../../types";

export const usePhotoPermission = (): UsePhotoPermissionProps => {
  const [mediaPermission, setMediaPermission] = useState<boolean | null>(null);
  const [isPermissionRequest, setIsPermissionRequest] =
    useState<boolean>(false);

  return {
    mediaPermission,
    isPermissionRequest,
    setMediaPermission,
    setIsPermissionRequest,
  };
};
