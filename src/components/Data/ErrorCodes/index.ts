import textData from "../../../../textData.json";
import {
  ErrorCodes,
  ErrorMessageFields as ErrorCodeAuth,
} from "../../../types";

const firebaseErrorText: string = textData.value.firebaseTextError;

const firebaseErrorTooManyRequestsText: string =
  textData.value.firebaseManyRequestsTextError;

const errorCodes: ErrorCodes = {
  error: {
    missingEmail: `${firebaseErrorText} ${textData.value.error.missingEmail}`,
    invalidEmail: `${firebaseErrorText} ${textData.value.error.invalidEmail}`,
    emailAlreadyInUse: `${firebaseErrorText} ${textData.value.error.emailAlreadyInUse}`,
    missingPassword: `${firebaseErrorText} ${textData.value.error.missingPassword}`,
    wrongPassword: `${firebaseErrorText} ${textData.value.error.wrongPassword}`,
    userNotFound: `${firebaseErrorText} ${textData.value.error.userNotFound}`,
    tooManyRequests: `${firebaseErrorTooManyRequestsText} ${textData.value.error.tooManyRequests}`,
    emptyField: textData.value.customError.emptyField,
    nickLength: textData.value.customError.nickLength,
    nickSpecialCharacter: textData.value.customError.nickSpecialCharacter,
    passwordLength: textData.value.customError.passwordLength,
  },
  message: {
    missingEmail: textData.value.message.missingEmail,
    invalidEmail: textData.value.message.invalidEmail,
    emailAlreadyInUse: textData.value.message.emailAlreadyInUse,
    missingPassword: textData.value.message.missingPassword,
    wrongPassword: textData.value.message.wrongPassword,
    userNotFound: textData.value.message.userNotFound,
    tooManyRequests: textData.value.message.tooManyRequests,
    emptyField: textData.value.customError.emptyField,
    nickLength: textData.value.customError.nickLength,
    nickSpecialCharacter: textData.value.customError.nickSpecialCharacter,
    passwordLength: textData.value.customError.passwordLength,
  },
};

const errorCodeAuth: ErrorCodeAuth = {
  missingEmail: textData.value.error.codes.missingEmail,
  invalidEmail: textData.value.error.codes.invalidEmail,
  emailAlreadyInUse: textData.value.error.codes.emailAlreadyInUse,
  userNotFound: textData.value.error.codes.userNotFound,
  missingPassword: textData.value.error.codes.missingPassword,
  wrongPassword: textData.value.error.codes.wrongPassword,
  tooManyRequests: textData.value.error.codes.tooManyRequests,
  emptyField: textData.value.customError.emptyField,
  nickLength: textData.value.customError.nickLength,
  nickSpecialCharacter: textData.value.customError.nickSpecialCharacter,
  passwordLength: textData.value.customError.passwordLength,
};

export { errorCodes, errorCodeAuth };
