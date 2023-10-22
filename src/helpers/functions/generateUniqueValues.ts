export const generateUniqueValues = (
  length: number
): {
  uniqueIdValue: string;
  uniqueIdFileName: string;
} => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let uniqueId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uniqueId += characters.charAt(randomIndex);
  }

  const uniqueIdValue = uniqueId;
  const uniqueIdFileName = uniqueId + ".jpg";

  return { uniqueIdValue, uniqueIdFileName };
};
