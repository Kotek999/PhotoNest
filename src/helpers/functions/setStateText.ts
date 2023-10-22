import { SetState } from "../../types";

export const setStateText = (setValue: SetState<string>) => {
  return (text: string) => setValue(text);
};
