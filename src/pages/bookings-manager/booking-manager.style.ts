export const getStyles = (largeLayout: boolean) => ({
  row: {
    "&:hover": {
      backgroundColor: "red",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    mt: largeLayout ? 4 : 2,
    mx: largeLayout ? 4 : 2,
    gap: 2,
  },
  headerContainer: {
    px: largeLayout ? 4 : 2,
    py: 2,
    display: "flex",
    flexDirection: largeLayout ? "row" : "column",
    gap: 3,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
