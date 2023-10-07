import reduxKeys from "../../../reduxKeys.json";
import cryptoes from "crypto-es";
import { getHashedValue } from "./getHashedValue";
import { HashedValue } from "../../types";

const ACCESS_KEY: string = reduxKeys.auth.security.accessKey;

const key = getHashedValue(ACCESS_KEY);

export const getHashedMethod = (value: string): HashedValue => {
  const encrypt = cryptoes.AES.encrypt(value, key).toString();
  const decryptedBytes = cryptoes.AES.decrypt(value, key);
  const decrypt = decryptedBytes.toString(cryptoes.enc.Utf8);

  return { encrypt, decrypt };
};
