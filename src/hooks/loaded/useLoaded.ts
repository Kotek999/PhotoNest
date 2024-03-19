import { useState } from "react";
import { UseLoadedProps } from "../../types";

export const useLoaded = (): UseLoadedProps => {
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);
  const [isBoardDataLoaded, setIsBoardDataLoaded] = useState<boolean>(false);
  const [isPathsLoaded, setIsPathsLoaded] = useState<boolean>(false);
  const [isPhotosLoaded, setIsPhotosLoaded] = useState<boolean>(false);
  const [isUserPhotosLoaded, setIsUserPhotosLoaded] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  return {
    isContentLoaded,
    isBoardDataLoaded,
    isPathsLoaded,
    isPhotosLoaded,
    isUserPhotosLoaded,
    refreshing,
    setIsContentLoaded,
    setIsBoardDataLoaded,
    setIsPathsLoaded,
    setIsPhotosLoaded,
    setIsUserPhotosLoaded,
    setRefreshing,
  };
};
