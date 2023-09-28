import { AuthStateValues, ErrorMessage } from "../../types";

export const createCustomErrorOption = (
  nameOfError: ErrorMessage,
  stateError: AuthStateValues
) => {
  const error = stateError === nameOfError && nameOfError;
  return error;
};
