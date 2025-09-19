import type { Filters } from "../types";
import type { Booking } from "../types";

/**
 *
 * Filters the bookings list based on what the user has selected
 *
 * @param filters The selected filters
 * @param bookings The list of bookings to filter
 * @returns The filtered bookings
 */
export const filterBookings = (filters: Filters, bookings: Booking[]) => {
  const { status, date } = filters;

  return bookings.filter((booking) => {
    // Status filter
    if (status && status !== "all" && booking.status !== status) return false;

    // Date range filter (compare startDate)
    const start = booking.startDate;

    const { from, to } = date;
    if (from) {
      if (start < from) return false; // ISO dates compare lexicographically
    }
    if (to) {
      if (start > to) return false;
    }

    return true;
  });
};
