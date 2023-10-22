import { useCallback } from "react";
import { RefreshProps } from "../../types";

export const useRefresh = (props: RefreshProps) => {
  const refresh = useCallback(() => {
    props.setRefreshing(true);
    setTimeout(() => {
      props.setRefreshing(false);
    }, 1500);
    props.getPhotos();
  }, []);
  return refresh;
};
