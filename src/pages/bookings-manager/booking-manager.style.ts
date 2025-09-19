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
    minWidth: 0,
    m: largeLayout ? 4 : 2,
    gap: 2,
  },
  headerContainer: {
    px: largeLayout ? 4 : 2,
    py: 2,
    gap: 3,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionsContainer: {
    display: "flex",
    gap: 5,
    alignItems: "center",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    maxWidth: "100%",
  },
});
