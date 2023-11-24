export const getFirstLetter = (word: string | undefined) => {
  const letter = word && word.charAt(0).toUpperCase();
  return letter;
};
