import { ErrorValues, AuthStateValues } from "../../types";
import { errorCodeAuth } from "../../components/Data/ErrorCodes";
import { createErrorOption } from "./createErrorOption";
import { useSelector } from "react-redux";
import { signUpErrorState } from "../../selectors/userAuth";
import { createCustomErrorOption } from "./createCustomErrorOption";

export const createError = (authStateError: AuthStateValues) => {
  const customAuthStateError = useSelector(signUpErrorState);

  const ERROR: ErrorValues = {
    missingEmail: createErrorOption(errorCodeAuth.missingEmail, authStateError),
    invalidEmail: createErrorOption(errorCodeAuth.invalidEmail, authStateError),
    emailAlreadyInUse: createErrorOption(
      errorCodeAuth.emailAlreadyInUse,
      authStateError
    ),
    userNotFound: createErrorOption(errorCodeAuth.userNotFound, authStateError),
    missingPassword: createErrorOption(
      errorCodeAuth.missingPassword,
      authStateError
    ),
    wrongPassword: createErrorOption(
      errorCodeAuth.wrongPassword,
      authStateError
    ),
    tooManyRequests: createErrorOption(
      errorCodeAuth.tooManyRequests,
      authStateError
    ),
    emptyField: createCustomErrorOption(
      errorCodeAuth.emptyField,
      customAuthStateError
    ),
    nickLength: createCustomErrorOption(
      errorCodeAuth.nickLength,
      customAuthStateError
    ),
    nickSpecialCharacter: createCustomErrorOption(
      errorCodeAuth.nickSpecialCharacter,
      customAuthStateError
    ),
    passwordLength: createCustomErrorOption(
      errorCodeAuth.passwordLength,
      customAuthStateError
    ),
  };

  return ERROR;
};
