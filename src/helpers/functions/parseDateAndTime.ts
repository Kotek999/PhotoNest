export const parseDateAndTime = (dateTimeString: string): Date | null => {
  const parts = dateTimeString.match(/(\d+)/g);
  if (parts && parts.length === 5) {
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    const hour = parseInt(parts[3], 10);
    const minute = parseInt(parts[4], 10);
    return new Date(year, month, day, hour, minute);
  }
  return null;
};
