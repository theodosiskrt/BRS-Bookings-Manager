import { useCallback } from "react";
import { Box } from "@mui/material";
import StatusFilter from "./status-filter";
import DateRangeFilter from "./date-range-filter";
import type { Filters } from "../../types";
import { getStyles } from "./bookings-filters.style";

const BookingsFilters = ({
  filters,
  setFilters,
}: {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}) => {
  const styles = getStyles();

  // helper to update one of the filters while keeping the rest
  const changeSingleFilter = useCallback(
    (filter: "status" | "date", value: any) => {
      setFilters({ ...filters, [filter]: value });
    },
    [setFilters, filters]
  );

  return (
    <Box sx={styles.container}>
      {/* Status Filter */}
      <StatusFilter
        value={filters.status}
        setValue={(v) => changeSingleFilter("status", v)}
      />

      {/* Date Range Filter */}
      <DateRangeFilter
        value={filters.date}
        setValue={(v) => changeSingleFilter("date", v)}
      />
    </Box>
  );
};

export default BookingsFilters;
