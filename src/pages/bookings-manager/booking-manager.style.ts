export const getStyles = (largeLayout: boolean) => ({
  row: {
    "&:hover": {
      backgroundColor: "red",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    m: largeLayout ? 4 : 2,
    gap: 2,
  },
  headerContainer: {
    px: largeLayout ? 4 : 2,
    py: 2,
    gap: 3,
    display: "flex",
    flexDirection: largeLayout ? "row" : "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionsContainer: {
    display: "flex",
    gap: 3,
    alignItems: "center",
  },
});
