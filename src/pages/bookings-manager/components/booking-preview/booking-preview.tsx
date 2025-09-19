import {
  Modal,
  Box,
  Typography,
  IconButton,
  useTheme,
  Grid,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import type { Booking } from "../../types";
import { formatDateRange } from "../../../../utils";
import { getStyles } from "./booking-preview.style";
import { useLayoutSize } from "../../../../hooks";

const BookingPreview = ({
  selectedBooking,
  onClose,
}: {
  selectedBooking: Booking | null;
  onClose: () => void;
}) => {
  const theme = useTheme();
  const largeLayout = useLayoutSize();
  const styles = getStyles(theme, largeLayout);

  return (
    <Modal
      open={!!selectedBooking}
      onClose={onClose}
      aria-labelledby="booking-modal-title"
      aria-describedby="booking-modal-description"
    >
      <Box sx={styles.container}>
        {selectedBooking && (
          <>
            <Grid sx={styles.headerGrid}>
              <Grid sx={styles.actionsGrid}>
                <Typography variant="h6" id="booking-modal-title">
                  Booking Details
                </Typography>
                <Tooltip title="Edit booking">
                  <IconButton aria-label="edit booking" size="small">
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete booking">
                  <IconButton aria-label="delete booking" size="small">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Grid>
              <IconButton aria-label="close" onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Grid>

            <Typography>
              <strong>ID:</strong> {selectedBooking.id}
            </Typography>
            <Typography>
              <strong>Customer:</strong> {selectedBooking.customer}
            </Typography>
            <Typography>
              <strong>Vessel:</strong> {selectedBooking.vessel}
            </Typography>
            <Typography>
              <strong>Dates:</strong>{" "}
              {formatDateRange(
                selectedBooking.startDate,
                selectedBooking.endDate
              )}
            </Typography>
            <Typography>
              <strong>Status:</strong> {selectedBooking.status}
            </Typography>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default BookingPreview;
