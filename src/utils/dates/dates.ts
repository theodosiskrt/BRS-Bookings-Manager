/**
 *
 * Formats a date string to a presentable way (Ex. Jun 28, 2027)
 *
 * @param dateString The date string
 * @returns The formatted date
 */
export const formatSingleDate = (dateString: string): string => {
  const date = new Date(dateString);
  // Handles invalid date gracefully
  if (isNaN(date.getTime())) return "";
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

/**
 * Formats two ISO date strings into a readable range: "Jun 28, 2027 - Jul 7, 2027".
 * Returns empty string if either date is invalid.
 *
 * @param start The first date
 * @param end The second date
 *
 * @returns The two days formatted
 */
export const formatDateRange = (start: string, end: string): string => {
  const formattedStart = formatSingleDate(start);
  const formattedEnd = formatSingleDate(end);

  if (!formattedStart || !formattedEnd) return "";

  return `${formattedStart} - ${formattedEnd}`;
};
