import { ErrorMessage, AuthStateValues } from "../../types";
import { errorCodes } from "../../components/Data/ErrorCodes";

export const createErrorOption = (
  errorName: string,
  authStateError: AuthStateValues
) => {
  const error: ErrorMessage =
    authStateError === errorCodes.error[errorName] &&
    errorCodes.message[errorName];
  return error;
};
