import { Search } from "@mui/icons-material";
import { Button, Grid, TextField } from "@mui/material";
import type { Booking } from "../../../../types";
import { useCallback, useState } from "react";
import { bookingsApi } from "../../../../api";

const BookingsSearch = ({
  setBookings,
  setError,
}: {
  setBookings: (bookings: Booking[]) => void;
  setError: (error: string) => void;
}) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(query);

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
