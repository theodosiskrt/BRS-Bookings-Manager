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
  Chip,
} from "@mui/material";
import { getStyles } from "./bookings-list.style";
import type { Booking } from "../../types";
import { formatDateRange } from "../../../../utils";
import BookingPreview from "../booking-preview";
import { useLayoutSize } from "../../../../hooks";
import { Warning, CheckCircle, Schedule, Cancel } from "@mui/icons-material";

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

  // Status chip helper function
  const getStatusChip = (status: string) => {
    const statusConfig = {
      confirmed: {
        icon: <CheckCircle />,
        style: styles.statusConfirmed,
        label: "Confirmed"
      },
      pending: {
        icon: <Schedule />,
        style: styles.statusPending,
        label: "Pending"
      },
      cancelled: {
        icon: <Cancel />,
        style: styles.statusCancelled,
        label: "Cancelled"
      }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    
    return (
      <Chip
        icon={config.icon}
        label={config.label}
        size="small"
        sx={{ ...styles.statusChip, ...config.style }}
      />
    );
  };

  return (
    <Box sx={styles.container}>
      <TableContainer>
        <Table sx={styles.table} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={styles.headerCell}>ID</TableCell>
              <TableCell sx={styles.headerCell}>Customer</TableCell>
              <TableCell sx={styles.headerCell}>Vessel</TableCell>
              <TableCell sx={styles.headerCell}>Dates</TableCell>
              <TableCell sx={styles.headerCell}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {error ? (
              <TableRow>
                <TableCell align="center" colSpan={5}>
                  <Box sx={styles.errorContainer}>
                    <Warning />
                    <Typography variant="body1" fontWeight={500}>
                      {error}
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ) : bookings.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5}>
                  <Box sx={styles.emptyState}>
                    <Typography variant="body1" sx={styles.emptyStateText}>
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
                  aria-label={`View booking ${booking.id} for ${booking.customer}`}
                >
                  <TableCell sx={styles.tableCell}>
                    <Typography variant="body2" fontWeight={600} color="primary.main">
                      #{booking.id}
                    </Typography>
                  </TableCell>
                  <TableCell sx={styles.tableCell}>
                    <Typography variant="body1" fontWeight={500}>
                      {booking.customer}
                    </Typography>
                  </TableCell>
                  <TableCell sx={styles.tableCell}>
                    <Typography variant="body1">
                      {booking.vessel}
                    </Typography>
                  </TableCell>
                  <TableCell sx={styles.tableCell}>
                    <Typography variant="body2" color="text.secondary">
                      {formatDateRange(booking.startDate, booking.endDate)}
                    </Typography>
                  </TableCell>
                  <TableCell sx={styles.tableCell}>
                    {getStatusChip(booking.status)}
                  </TableCell>
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
