import { parseDateAndTime } from "./parseDateAndTime";

export const generateDateMessage = (
  targetDateTime: string,
  currentDateTime: string
): string => {
  const targetDate = parseDateAndTime(targetDateTime);
  const currentDate = parseDateAndTime(currentDateTime);

  if (!targetDate || !currentDate) {
    return "Invalid date or time format.";
  }

  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
  const oneHourInMilliseconds = 60 * 60 * 1000;

  let dateDiffInMilliseconds = targetDate.getTime() - currentDate.getTime();
  const isFuture = dateDiffInMilliseconds < 0;
  dateDiffInMilliseconds = Math.abs(dateDiffInMilliseconds);

  const agoText = `${isFuture ? "ago" : "ago"}`;

  if (dateDiffInMilliseconds < oneHourInMilliseconds) {
    const minutes = Math.floor(Math.abs(dateDiffInMilliseconds) / (60 * 1000));
    return `Added: ${minutes} ${minutes === 1 ? "" : ""}minute${
      minutes === 1 ? "" : "s"
    } ${agoText}`;
  } else if (dateDiffInMilliseconds < oneDayInMilliseconds) {
    const hours = Math.floor(
      Math.abs(dateDiffInMilliseconds) / oneHourInMilliseconds
    );
    return `Added: ${hours} ${hours === 1 ? "" : ""}hour${
      hours === 1 ? "" : "s"
    } ${agoText}`;
  } else {
    const days = Math.floor(
      Math.abs(dateDiffInMilliseconds) / oneDayInMilliseconds
    );
    return `Added: ${days} ${days === 1 ? "" : ""}day${
      days === 1 ? "" : "s"
    } ${agoText}`;
  }
};
