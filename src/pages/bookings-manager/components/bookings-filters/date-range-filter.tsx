import React, { useCallback, useState } from "react";
import {
  IconButton,
  Menu,
  TextField,
  Stack,
  Box,
  Button,
  Tooltip,
  InputLabel,
} from "@mui/material";
import { DateRange, EventAvailable } from "@mui/icons-material";
import { getStyles } from "./date-range-filter.style";

const DateRangeFilter = ({
  value,
  setValue,
}: {
  value: { from: string; to: string };
  setValue: (v: { from: string; to: string }) => void;
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [temp, setTemp] = useState(value);
  const styles = getStyles();

  const hasDate = !!(value.from || value.to);

  const openMenu = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      setTemp(value);
      setAnchorEl(e.currentTarget);
    },
    [value]
  );

  const closeMenu = useCallback(() => setAnchorEl(null), []);

  const apply = useCallback(() => {
    setValue(temp);
    setAnchorEl(null);
  }, [setValue, temp]);

  const clear = useCallback(() => {
    const cleared = { from: "", to: "" };
    setTemp(cleared);
    setValue(cleared);
    setAnchorEl(null);
  }, [setValue]);

  return (
    <>
      <Tooltip title="Filter bookings by date range">
        <IconButton
          aria-label="filter bookings by date"
          onClick={openMenu}
          color={hasDate ? "primary" : "default"}
        >
          {hasDate ? <EventAvailable /> : <DateRange />}
        </IconButton>
      </Tooltip>

      <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={closeMenu}>
        <Stack spacing={2} sx={styles.menuContent}>
          <Box sx={styles.dateInputContainer}>
            <InputLabel htmlFor="from-input">From date</InputLabel>
            <TextField
              id="from-input"
              type="date"
              value={temp.from}
              onChange={(e) => setTemp((p) => ({ ...p, from: e.target.value }))}
              fullWidth
            />
          </Box>
          <Box sx={styles.dateInputContainer}>
            <InputLabel htmlFor="to-input">To date</InputLabel>
            <TextField
              id="to-input"
              type="date"
              value={temp.to}
              onChange={(e) => setTemp((p) => ({ ...p, to: e.target.value }))}
              fullWidth
            />
          </Box>
          <Box sx={styles.buttonContainer}>
            <Button variant="outlined" size="small" onClick={clear}>
              Clear
            </Button>
            <Button variant="outlined" size="small" onClick={closeMenu}>
              Cancel
            </Button>
            <Button variant="contained" size="small" onClick={apply}>
              Apply
            </Button>
          </Box>
        </Stack>
      </Menu>
    </>
  );
};

export default DateRangeFilter;
