import type { Theme } from "@mui/material";

export const getStyles = (theme: Theme, largeLayout: boolean) => ({
  container: {
    display: "flex",
    flex: 1,
    minHeight: 0,
  },
  table: {
    minWidth: 625,
  },
  headerCell: {
    backgroundColor: "transparent",
    borderBottom: "2px solid",
    borderBottomColor: "divider",
    fontWeight: 600,
    fontSize: "0.875rem",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "text.primary",
    py: 2,
  },
  tableCell: {
    p: largeLayout ? 2.5 : 1.5,
    borderBottom: "1px solid",
    borderBottomColor: "divider",
    fontSize: "0.9375rem",
    transition: "all 0.2s ease-in-out",
  },
  row: {
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      backgroundColor: "action.hover",
      transform: "translateY(-1px)",
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
    },
    "&:focus": {
      backgroundColor: "action.focus",
      outline: "2px solid",
      outlineColor: "primary.main",
      outlineOffset: "-2px",
    },
    "&:focus-visible": {
      backgroundColor: "action.focus",
      outline: "2px solid",
      outlineColor: "primary.main",
      outlineOffset: "-2px",
    },
    "&:last-child td": {
      borderBottom: "none",
    },
  },
  errorContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1.5,
    p: 4,
    color: "error.main",
    backgroundColor: "error.light",
    borderRadius: 1,
    m: 2,
  },
  emptyState: {
    py: 6,
    px: 3,
    textAlign: "center",
    color: "text.secondary",
    backgroundColor: "background.default",
  },
  emptyStateText: {
    fontSize: "1rem",
    fontWeight: 500,
  },
  statusChip: {
    fontWeight: 500,
    fontSize: "0.8125rem",
    borderRadius: 2,
    textTransform: "capitalize",
    minWidth: 80,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4px 12px",
  },
  statusConfirmed: {
    backgroundColor: "success.light",
    color: "success.dark",
  },
  statusPending: {
    backgroundColor: "warning.light", 
    color: "warning.dark",
  },
  statusCancelled: {
    backgroundColor: "error.light",
    color: "error.dark",
  },
});
