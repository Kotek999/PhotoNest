export const formatPoints = (points: number): string => {
  if (points >= 1000) {
    const formatted = Math.floor(points / 1000);
    return formatted + "k";
  }
  return points.toString();
};
