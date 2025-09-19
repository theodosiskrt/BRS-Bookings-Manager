import { useCallback } from "react";
import { Box } from "@mui/material";
import StatusFilter from "./status-filter";
import DateRangeFilter from "./date-range-filter";
import type { Filters } from "../../types";

const BookingsFilters = ({
  filters,
  setFilters,
}: {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}) => {
  // helper to update one of the filters while keeping the rest
  const changeSingleFilter = useCallback(
    (filter: "status" | "date", value: any) => {
      setFilters({ ...filters, [filter]: value });
    },
    [setFilters, filters]
  );

  return (
    <Box display="flex" gap={1} alignItems="center">
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
