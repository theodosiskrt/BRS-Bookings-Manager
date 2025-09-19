import { Search } from "@mui/icons-material";
import { Button, Grid, TextField } from "@mui/material";
import type { Booking, Filters } from "../../types";
import { useCallback, useState } from "react";
import { bookingsApi } from "../../../../api";
import BookingsFilters from "../bookings-filters";

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
      <Grid size={12} sx={{ display: "flex", gap: 2 }}>
        <BookingsFilters filters={filters} setFilters={setFilters} />
        <TextField
          value={query}
          autoComplete=""
          color="primary"
          inputMode="search"
          type="search"
          label="Search bookings..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          type="submit"
          startIcon={<Search />}
          loading={loading}
          size="large"
          variant="contained"
        >
          Search
        </Button>
      </Grid>
    </form>
  );
};

export default BookingsSearch;
