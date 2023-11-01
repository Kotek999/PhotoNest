import { errorCodes } from "../ErrorCodes";
import { LeadingIcon } from "../../../components/Atoms/LeadingIcon";
import { JSX } from "../../../types";

const checkerErrorsMap: Record<string, string> = {
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

const leadingIconMap: Record<string, JSX> = {
  ["nick"]: (
    <>
      <LeadingIcon name="account-circle" />
    </>
  ),
  ["email"]: (
    <>
      <LeadingIcon name="email" />
    </>
  ),
  ["password"]: (
    <>
      <LeadingIcon name="lock" />
    </>
  ),
};

const leadingAccessoryIcon = (name: string): JSX =>
  leadingIconMap[name] || "Invalid icon name";

export { checkerErrorsMap, leadingAccessoryIcon };
