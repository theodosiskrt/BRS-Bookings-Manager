import { useState } from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Paper,
  useTheme,
  Typography,
  Box,
} from "@mui/material";
import { getStyles } from "./bookings-list.style";
import type { Booking } from "../../types";
import { formatDateRange } from "../../../../utils";
import BookingPreview from "../booking-preview";
import { useLayoutSize } from "../../../../hooks";
import { Warning } from "@mui/icons-material";

// Extend props for error support
type BookingsListProps = {
  bookings?: Booking[];
  error?: string | null;
};

const BookingsList = ({ bookings = [], error = null }: BookingsListProps) => {
  const largeLayout = useLayoutSize();
  const theme = useTheme();
  const styles = getStyles(theme, largeLayout);

  // Modal state
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const handleOpenModal = (booking: Booking) => {
    setSelectedBooking(booking);
  };

  const handleCloseModal = () => {
    setSelectedBooking(null);
  };

  const onRowPress = (booking: Booking, target?: EventTarget & HTMLElement) => {
    handleOpenModal(booking);
    target?.blur();
  };

  return (
    <Box sx={styles.container}>
      <TableContainer component={Paper}>
        <Table sx={styles.table} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell style={styles.headerCell}>ID</TableCell>
              <TableCell style={styles.headerCell}>Customer</TableCell>
              <TableCell style={styles.headerCell}>Vessel</TableCell>
              <TableCell style={styles.headerCell}>Dates</TableCell>
              <TableCell style={styles.headerCell}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {error ? (
              <TableRow>
                <TableCell align="center" colSpan={5}>
                  <Box sx={styles.errorContainer}>
                    <Warning color="action" />
                    {error}
                  </Box>
                </TableCell>
              </TableRow>
            ) : bookings.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5}>
                  <Box sx={styles.emptyState}>
                    <Typography variant="body1" color="text.secondary">
                      No bookings found. Try searching by customer name.
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ) : (
              bookings.map((booking) => (
                <TableRow
                  key={booking.id}
                  role="button"
                  tabIndex={0}
                  onClick={(e) => onRowPress(booking, e.currentTarget)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onRowPress(booking, e.currentTarget);
                    }
                  }}
                  sx={styles.row}
                >
                  <TableCell sx={styles.tableCell}>{booking.id}</TableCell>
                  <TableCell sx={styles.tableCell}>
                    {booking.customer}
                  </TableCell>
                  <TableCell sx={styles.tableCell}>{booking.vessel}</TableCell>
                  <TableCell sx={styles.tableCell}>
                    {formatDateRange(booking.startDate, booking.endDate)}
                  </TableCell>
                  <TableCell sx={styles.tableCell}>{booking.status}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <BookingPreview
        selectedBooking={selectedBooking}
        onClose={handleCloseModal}
      />
    </Box>
  );
};

export default BookingsList;
