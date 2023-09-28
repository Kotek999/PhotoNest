import { SetValue } from "../../types";

export const setStateText = (setValue: SetValue) => {
  return (text: string) => setValue(text);
};
