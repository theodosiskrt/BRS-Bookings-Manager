export const getStyles = () => ({
  createButton: {
    borderRadius: 2,
    fontWeight: 500,
    px: 3,
    py: 1.5,
    minWidth: 140,
    boxShadow: 1,
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      transform: "translateY(-1px)",
      boxShadow: 2,
    },
  },
  dialogContent: {
    spacing: 2,
    mt: 1,
    "& .MuiTextField-root": {
      marginBottom: 2,
      "& .MuiOutlinedInput-root": {
        borderRadius: 2,
      },
    },
  },
  dialogTitle: {
    fontWeight: 600,
    fontSize: "1.5rem",
    background: "linear-gradient(135deg, primary.main, secondary.main)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  dialogActions: {
    p: 3,
    gap: 1.5,
  },
  cancelButton: {
    borderRadius: 2,
    color: "text.secondary",
    "&:hover": {
      backgroundColor: "action.hover",
    },
  },
  submitButton: {
    borderRadius: 2,
    fontWeight: 500,
    px: 3,
    minWidth: 100,
  },
});