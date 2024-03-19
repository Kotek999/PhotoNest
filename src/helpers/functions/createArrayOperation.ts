import { ArrayOperationProps } from "../../types";

export const createArrayOperation: ArrayOperationProps<any, any> = (
  array,
  func,
  ...args
) => {
  return array[func](...args);
};
