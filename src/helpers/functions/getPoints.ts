export const getPoints = (numbers: number[]): number => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum;
};
