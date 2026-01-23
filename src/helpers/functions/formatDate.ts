export const formatDate = (dateString: string): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [day, month, year] = dateString.split(".");

  const monthName = months[parseInt(month) - 1];

  return `${parseInt(day)} ${monthName} ${year}`;
};
