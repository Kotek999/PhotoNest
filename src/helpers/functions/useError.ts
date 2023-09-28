import { useAuthState } from "../../helpers/functions/useAuthState";
import { Selector } from "../../types";

export const useError = (authStateError: Selector) => {
  const authError = useAuthState(authStateError, "error");
  return authError;
};
