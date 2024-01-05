import { useCallback } from "react";
import { ActionCallbackFunctionProps } from "../../types";

export const useCallbackFunction = (action: ActionCallbackFunctionProps) => {
  return useCallback(
    (...args: any[]) => {
      action(...args);
    },
    [action]
  );
};
