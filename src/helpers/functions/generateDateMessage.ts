import textData from "../../../textData.json";
import { parseDateAndTime } from "./parseDateAndTime";

export const generateDateMessage = (
  targetDateTime: string,
  currentDateTime: string
): string => {
  const targetDate = parseDateAndTime(targetDateTime);
  const currentDate = parseDateAndTime(currentDateTime);

  if (!targetDate || !currentDate) {
    return textData.value.generally.dateMessages.invalidFormat;
  }

  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
  const oneHourInMilliseconds = 60 * 60 * 1000;

  let dateDiffInMilliseconds = targetDate.getTime() - currentDate.getTime();
  const isFuture = dateDiffInMilliseconds < 0;
  dateDiffInMilliseconds = Math.abs(dateDiffInMilliseconds);

  const agoValue = textData.value.generally.dateMessages.agoText;
  const agoText = `${isFuture ? agoValue : agoValue}`;

  const addedText = textData.value.generally.dateMessages.addedText;
  const minute = textData.value.generally.dateMessages.time.minute;
  const hour = textData.value.generally.dateMessages.time.hour;
  const day = textData.value.generally.dateMessages.time.day;
  const second = textData.value.generally.dateMessages.time.second;

  if (dateDiffInMilliseconds < oneHourInMilliseconds) {
    const minutes = Math.floor(Math.abs(dateDiffInMilliseconds) / (60 * 1000));
    return `${addedText} ${minutes} ${minutes === 1 ? "" : ""}${minute}${
      minutes === 1 ? "" : second
    } ${agoText}`;
  } else if (dateDiffInMilliseconds < oneDayInMilliseconds) {
    const hours = Math.floor(
      Math.abs(dateDiffInMilliseconds) / oneHourInMilliseconds
    );
    return `${addedText} ${hours} ${hours === 1 ? "" : ""}${hour}${
      hours === 1 ? "" : second
    } ${agoText}`;
  } else {
    const days = Math.floor(
      Math.abs(dateDiffInMilliseconds) / oneDayInMilliseconds
    );
    return `${addedText} ${days} ${days === 1 ? "" : ""}${day}${
      days === 1 ? "" : second
    } ${agoText}`;
  }
};
