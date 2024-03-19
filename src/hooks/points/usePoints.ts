import { useState } from "react";
import { UsePointsProps } from "../../types";

export const usePoints = (): UsePointsProps => {
  const [isColightExist, setIsColightExist] = useState<boolean>(true);
  const [pointsValue, setPointsValue] = useState<number[]>([]);

  return { isColightExist, pointsValue, setIsColightExist, setPointsValue };
};
