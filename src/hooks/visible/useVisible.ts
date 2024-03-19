import { useState } from "react";
import { VisibleLength, UseVisibleProps } from "../../types";

export const useVisible = (): UseVisibleProps => {
  const [isDialogVisible, setDialogVisible] = useState<boolean>(false);
  const [isUserVisible, setUserVisible] = useState<boolean>(false);
  const [visibleLength, setVisibleLength] = useState<VisibleLength>(10);

  return {
    isDialogVisible,
    isUserVisible,
    visibleLength,
    setDialogVisible,
    setUserVisible,
    setVisibleLength,
  };
};
