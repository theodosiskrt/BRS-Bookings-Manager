import { Search } from "@mui/icons-material";
import { Button, Box, TextField } from "@mui/material";
import type { Booking, Filters } from "../../types";
import { useCallback, useState } from "react";
import { bookingsApi } from "../../../../api";
import BookingsFilters from "../bookings-filters";
import { getStyles } from "./bookings-search.style";
import { useLayoutSize } from "../../../../hooks";

const BookingsSearch = ({
  setBookings,
  setError,
  filters,
  setFilters,
}: {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  setBookings: (bookings: Booking[]) => void;
  setError: (error: string) => void;
}) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const largeLayout = useLayoutSize();

  const styles = getStyles(largeLayout);

  const onSearch = useCallback(() => {
    setLoading(true);
    bookingsApi
      .getBookings(query)
      .then(setBookings)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [setBookings, query]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
    >
      <Box sx={styles.container}>
        <Box sx={styles.bar}>
          <TextField
            size="medium"
            value={query}
            autoComplete="off"
            color="primary"
            inputMode="search"
            type="search"
            label="Search bookings..."
            placeholder="Enter customer name..."
            onChange={(e) => setQuery(e.target.value)}
            sx={styles.query}
            InputProps={{
              sx: {
                borderRadius: 2,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "divider",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.main",
                },
              },
            }}
          />
          <Button
            type="submit"
            startIcon={<Search />}
            disabled={loading}
            size="large"
            variant="contained"
            sx={styles.submit}
          >
            {loading ? "Searching..." : "Search"}
          </Button>
        </Box>
        <Box sx={styles.filters}>
          <BookingsFilters filters={filters} setFilters={setFilters} />
        </Box>
      </Box>
    </form>
  );
};

export default BookingsSearch;
