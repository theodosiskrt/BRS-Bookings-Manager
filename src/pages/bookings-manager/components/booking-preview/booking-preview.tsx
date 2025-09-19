import {
  Modal,
  Box,
  Typography,
  IconButton,
  useTheme,
  Grid,
  Tooltip,
  Chip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import { CheckCircle, Schedule, Cancel } from "@mui/icons-material";
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

  // Status chip helper function
  const getStatusChip = (status: string) => {
    const statusConfig = {
      confirmed: {
        icon: <CheckCircle />,
        color: "success" as const,
        label: "Confirmed"
      },
      pending: {
        icon: <Schedule />,
        color: "warning" as const,
        label: "Pending"
      },
      cancelled: {
        icon: <Cancel />,
        color: "error" as const,
        label: "Cancelled"
      }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    
    return (
      <Chip
        icon={config.icon}
        label={config.label}
        color={config.color}
        size="small"
        variant="filled"
      />
    );
  };

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
            <Box sx={styles.headerGrid}>
              <Box sx={styles.actionsGrid}>
                <Typography variant="h6" id="booking-modal-title" sx={styles.title}>
                  Booking Details
                </Typography>
                <Tooltip title="Edit booking">
                  <IconButton 
                    aria-label="edit booking" 
                    size="small"
                    sx={styles.actionButton}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete booking">
                  <IconButton 
                    aria-label="delete booking" 
                    size="small"
                    sx={styles.actionButton}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
              <IconButton 
                aria-label="close" 
                onClick={onClose}
                sx={styles.closeButton}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <Box sx={styles.detailRow}>
              <Typography component="span" sx={styles.label}>
                ID:
              </Typography>
              <Typography component="span" sx={styles.value}>
                #{selectedBooking.id}
              </Typography>
            </Box>

            <Box sx={styles.detailRow}>
              <Typography component="span" sx={styles.label}>
                Customer:
              </Typography>
              <Typography component="span" sx={styles.value}>
                {selectedBooking.customer}
              </Typography>
            </Box>

            <Box sx={styles.detailRow}>
              <Typography component="span" sx={styles.label}>
                Vessel:
              </Typography>
              <Typography component="span" sx={styles.value}>
                {selectedBooking.vessel}
              </Typography>
            </Box>

            <Box sx={styles.detailRow}>
              <Typography component="span" sx={styles.label}>
                Dates:
              </Typography>
              <Typography component="span" sx={styles.value}>
                {formatDateRange(
                  selectedBooking.startDate,
                  selectedBooking.endDate
                )}
              </Typography>
            </Box>

            <Box sx={styles.detailRow}>
              <Typography component="span" sx={styles.label}>
                Status:
              </Typography>
              <Box component="span" sx={{ ml: 1 }}>
                {getStatusChip(selectedBooking.status)}
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default BookingPreview;
