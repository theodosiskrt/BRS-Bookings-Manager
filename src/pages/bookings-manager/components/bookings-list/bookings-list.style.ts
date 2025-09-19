import type { Theme } from "@mui/material";

export const getStyles = (theme: Theme, largeLayout: boolean) => ({
  row: {
    "&:hover": {
      backgroundColor: theme.palette.background.card,
      cursor: "pointer",
    },
    "&:focus": {
      backgroundColor: theme.palette.background.card,
    },
    "&:focus-visible": {
      backgroundColor: theme.palette.background.card,
    },
  },

  errorContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
  },
  headerCell: {
    backgroundColor: theme.palette.background.paper,
  },
  tableCell: {
    p: largeLayout ? 2 : 1,
  },
  table: {
    minWidth: 625,
  },
  container: {
    display: "flex",
    flex: 1,
    minHeight: 0,
  },
  emptyState: {
    py: 3,
    textAlign: "center",
  },
});
