import { useState } from "react";
import { UseUserDataProps } from "../../types";

export const useUserData = (): UseUserDataProps => {
  const [nick, setNick] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return { nick, email, password, setNick, setEmail, setPassword };
};
