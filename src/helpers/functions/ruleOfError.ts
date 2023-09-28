import { ErrorMessage } from "../../types";

export const ruleOfError = (
  rule: boolean,
  error: ErrorMessage
): ErrorMessage => {
  const ruleError = rule ? "" : error;
  return ruleError;
};
