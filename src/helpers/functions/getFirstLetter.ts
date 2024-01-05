export const getFirstLetter = (word: string | undefined) => {
  if (!word || word.length === 0) {
    return undefined;
  }

  const firstLetter = word.charAt(0);

  if (firstLetter === firstLetter.toUpperCase()) {
    return firstLetter;
  } else {
    return firstLetter.toLowerCase();
  }
};
