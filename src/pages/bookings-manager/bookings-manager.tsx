import { Typography, Paper, Box } from "@mui/material";
import { useState } from "react";
import { getStyles } from "./booking-manager.style";
import { BookingsList, BookingsSearch } from "./components";
import { useLayoutSize } from "../../hooks";
import type { Booking } from "../../types";

const BookingsManager = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [error, setError] = useState("");
  const largeLayout = useLayoutSize();
  const styles = getStyles(largeLayout);

  console.log(bookings);

  return (
    <Box sx={styles.container}>
      <Paper sx={styles.headerContainer}>
        <Typography variant="h4">Bookings Manager</Typography>
        <BookingsSearch setBookings={setBookings} setError={setError} />
      </Paper>
      <BookingsList bookings={bookings} error={error} />
    </Box>
  );
};
export default BookingsManager;
