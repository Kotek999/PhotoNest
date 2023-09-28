import { errorCodes } from "../ErrorCodes";

export const checkerErrorsMap: Record<string, string> = {
  [errorCodes.error.missingEmail]: errorCodes.message.missingEmail,
  [errorCodes.error.invalidEmail]: errorCodes.message.invalidEmail,
  [errorCodes.error.emailAlreadyInUse]: errorCodes.message.emailAlreadyInUse,
  [errorCodes.error.missingPassword]: errorCodes.message.missingPassword,
  [errorCodes.error.wrongPassword]: errorCodes.message.wrongPassword,
  [errorCodes.error.userNotFound]: errorCodes.message.userNotFound,
  [errorCodes.error.tooManyRequests]: errorCodes.message.tooManyRequests,
  [errorCodes.error.emptyField]: errorCodes.message.emptyField,
  [errorCodes.error.nickLength]: errorCodes.message.nickLength,
  [errorCodes.error.nickSpecialCharacter]:
    errorCodes.message.nickSpecialCharacter,
  [errorCodes.error.passwordLength]: errorCodes.message.passwordLength,
};
