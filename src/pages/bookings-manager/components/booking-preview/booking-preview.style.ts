import type { Theme } from "@mui/material";

export const getStyles = (theme: Theme, largeLayout: boolean) => ({
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "background.paper",
    borderRadius: 3,
    boxShadow: 4,
    p: largeLayout ? 4 : 3,
    minWidth: largeLayout ? 480 : 320,
    maxWidth: largeLayout ? 600 : "90vw",
    border: "1px solid",
    borderColor: "divider",
    outline: "none",
  },
  headerGrid: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 3,
    pb: 2,
    borderBottom: "1px solid",
    borderBottomColor: "divider",
  },
  actionsGrid: {
    display: "flex",
    alignItems: "center",
    gap: 1,
  },
  title: {
    fontWeight: 600,
    background: "linear-gradient(135deg, primary.main, secondary.main)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  actionButton: {
    color: "text.secondary",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      backgroundColor: "action.hover",
      transform: "scale(1.1)",
    },
  },
  closeButton: {
    color: "text.secondary",
    "&:hover": {
      backgroundColor: "error.light",
      color: "error.main",
    },
  },
  detailRow: {
    mb: 2,
    p: 1.5,
    borderRadius: 2,
    backgroundColor: "background.default",
    border: "1px solid",
    borderColor: "divider",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      borderColor: "primary.light",
      backgroundColor: "primary.50",
    },
  },
  label: {
    fontWeight: 600,
    color: "text.primary",
    marginRight: 1,
  },
  value: {
    color: "text.secondary",
    fontSize: "0.9375rem",
  },
  statusValue: {
    textTransform: "capitalize",
    fontWeight: 500,
  },
});
