import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";
import type { Booking } from "../../types";
import type React from "react";
import { Add } from "@mui/icons-material";
import { useLayoutSize } from "../../../../hooks";

const STATUS_OPTIONS = ["confirmed", "pending", "cancelled"] as const;

const CreateBooking = ({
  setBookings,
}: {
  setBookings: React.Dispatch<React.SetStateAction<Booking[]>>;
}) => {
  const largeLayout = useLayoutSize();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    id: "",
    customer: "",
    vessel: "",
    status: "confirmed" as const,
    startDate: "",
    endDate: "",
  });
  const [touched, setTouched] = useState<{
    [K in keyof typeof form]?: boolean;
  }>({});

  const openModal = () => setOpen(true);

  const closeModal = () => {
    setOpen(false);
    // Reset form and touched state when closing
    setForm({
      id: "",
      customer: "",
      vessel: "",
      status: "confirmed",
      startDate: "",
      endDate: "",
    });
    setTouched({});
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));

    // Clear touched state when user starts typing
    if (touched[field]) {
      setTouched((t) => ({ ...t, [field]: false }));
    }
  };

  const handleBlur = (field: keyof typeof form) => {
    setTouched((t) => ({ ...t, [field]: true }));
  };

  const isValid = () => {
    return form.customer.trim() && form.vessel.trim() && form.startDate;
  };

  const getFieldError = (
    field: keyof typeof form,
    message: string,
    filler?: boolean
  ) => {
    const hasError = touched[field] && !form[field].trim();
    return {
      error: !filler && hasError,
      helperText: !filler && hasError ? message : " ", // Space to maintain height
    };
  };

  const handleSubmit = () => {
    // Mark all required fields as touched to show validation
    const requiredFields = ["customer", "vessel", "startDate"] as const;
    const newTouched = { ...touched };
    requiredFields.forEach((field) => {
      newTouched[field] = true;
    });
    setTouched(newTouched);

    if (!isValid()) return;

    const newBooking: Booking = {
      id: form.id.trim() || `BK-${Date.now()}`,
      customer: form.customer.trim(),
      vessel: form.vessel.trim(),
      status: form.status,
      startDate: form.startDate,
      endDate: form.endDate || form.startDate,
    };

    setBookings((prev) => [newBooking, ...prev]);
    closeModal();
  };

  return (
    <>
      <Button
        onClick={openModal}
        size={largeLayout ? "large" : "small"}
        variant="contained"
        startIcon={<Add />}
      >
        Create Booking
      </Button>

      <Dialog open={open} onClose={closeModal} fullWidth maxWidth="sm">
        <DialogTitle>Create Booking</DialogTitle>
        <DialogContent>
          <Stack spacing={1} mt={1}>
            <TextField
              label="ID (optional)"
              value={form.id}
              onChange={(e) => handleChange("id", e.target.value)}
              fullWidth
              placeholder="Auto-generated if empty"
              {...getFieldError("id", " ", true)}
            />

            <TextField
              label="Customer"
              value={form.customer}
              onChange={(e) => handleChange("customer", e.target.value)}
              onBlur={() => handleBlur("customer")}
              {...getFieldError("customer", "Customer is required")}
              fullWidth
              required
            />

            <TextField
              label="Vessel"
              value={form.vessel}
              onChange={(e) => handleChange("vessel", e.target.value)}
              onBlur={() => handleBlur("vessel")}
              {...getFieldError("vessel", "Vessel is required")}
              fullWidth
              required
            />

            <TextField
              select
              label="Status"
              value={form.status}
              onChange={(e) => handleChange("status", e.target.value)}
              fullWidth
              {...getFieldError("status", " ", true)}
            >
              {STATUS_OPTIONS.map((status) => (
                <MenuItem key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Start Date"
              type="date"
              value={form.startDate}
              onChange={(e) => handleChange("startDate", e.target.value)}
              onBlur={() => handleBlur("startDate")}
              {...getFieldError("startDate", "Start date is required")}
              fullWidth
              required
              slotProps={{ inputLabel: { shrink: true } }}
            />

            <TextField
              label="End Date"
              type="date"
              value={form.endDate}
              onChange={(e) => handleChange("endDate", e.target.value)}
              slotProps={{
                inputLabel: { shrink: true },
              }}
              fullWidth
              helperText="Optional - defaults to start date if empty"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!isValid()}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateBooking;
