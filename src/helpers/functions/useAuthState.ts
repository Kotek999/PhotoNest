import { useSelector } from "react-redux";
import { Selector } from "../../types";

export const useAuthState = (selector: Selector, stateName: string) => {
  const selectedState = useSelector(selector);
  const authState = selectedState[stateName];

  return authState;
};
