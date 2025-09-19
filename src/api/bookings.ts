import mockBookings from "../../data/bookings.json";
import type { Booking } from "../pages/bookings-manager/types";

/**
 * API methods for the bookings api
 *
 * Example:
 *
 * `const bookings = await bookingsApi.getBookings();`
 */
export const bookingsApi = {
  /**
   * Get the default list of bookings
   *
   * @returns A list of bookings
   */
  getBookings: async (query: string): Promise<Booking[]> => {
    // const response = await axios.get("api/bookings");

    return new Promise((resolve) => {
      const bookings = mockBookings.bookings.filter((booking) =>
        booking.customer.toLowerCase().includes(query.toLowerCase())
      );

      // Mock a BackEnd API
      setTimeout(() => {
        resolve(bookings);
        // reject("Failed to retrieve bookings from server.");
      }, 500);
    });
  },
};
