import { onValue, DataSnapshot, DatabaseReference } from "firebase/database";

export const createPromiseWithValue = async (query: DatabaseReference) => {
  const promise: DataSnapshot = await new Promise((resolve, reject) => {
    onValue(query, resolve, reject);
  });
  return promise;
};
