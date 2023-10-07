import cryptoes from "crypto-es";

export const getHashedValue = (valueToHash: string): string => {
  const hashValue = cryptoes.SHA256(valueToHash).toString(cryptoes.enc.Hex);
  return hashValue;
};
