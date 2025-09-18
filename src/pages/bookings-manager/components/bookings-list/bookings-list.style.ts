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
  table: {
    minWidth: 600,
  },
  errorContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
  },
  tableCell: { p: largeLayout ? 2 : 1 },
});
