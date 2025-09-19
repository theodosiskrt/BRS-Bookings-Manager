import { Typography, Paper, Box, Link } from "@mui/material";
import { useMemo, useState } from "react";
import type { Filters } from "./types";
import { getStyles } from "./booking-manager.style";
import { BookingsList, BookingsSearch } from "./components";
import CreateBooking from "./components/create-booking/create-booking";
import { useLayoutSize } from "../../hooks";
import type { Booking } from "./types";
import { filterBookings } from "./utils";

const BookingsManager = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState<Filters>({
    status: "all",
    date: { from: "", to: "" },
  });
  const largeLayout = useLayoutSize();

  const filteredBookings = useMemo(
    () => filterBookings(filters, bookings),
    [filters, bookings]
  );
  const styles = getStyles(largeLayout);

  return (
    <Box sx={styles.container}>
      <Paper sx={styles.headerContainer}>
        <Box>
          <Typography variant="h4">Bookings Manager</Typography>
          <Link href="https://theodosiskrt.github.io/portfolio/">
            Theodosis Karataris
          </Link>
        </Box>
        <Box sx={styles.actionsContainer}>
          <Box
            sx={{
              flexGrow: 1,
              flexShrink: 1,
            }}
          >
            <BookingsSearch
              filters={filters}
              setFilters={setFilters}
              setBookings={setBookings}
              setError={setError}
            />
          </Box>

          <CreateBooking setBookings={setBookings} />
        </Box>
      </Paper>
      <BookingsList bookings={filteredBookings} error={error} />
    </Box>
  );
};
export default BookingsManager;
