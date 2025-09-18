import type { Theme } from "@mui/material";

export const getStyles = (theme: Theme, largeLayout: boolean) => ({
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.background.default,
    p: 2,
    borderRadius: 2,
    minWidth: largeLayout ? "400px" : "280px",
  },
});
