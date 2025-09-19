export const getStyles = (largeLayout: boolean) => ({
  container: {
    display: "flex",
    gap: largeLayout ? 2 : 1.5,
    alignItems: "center",
    flexWrap: "wrap",
  },
  bar: {
    display: "flex",
    flexWrap: "wrap",
    gap: 1.5,
    alignItems: "center",
    flex: 1,
  },
  query: {
    flexGrow: 1,
    flexBasis: largeLayout ? 280 : 200,
    minWidth: 180,
  },
  submit: {
    flexGrow: 0,
    flexShrink: 0,
    height: 56, // Match TextField height
    borderRadius: 2,
    fontWeight: 500,
    px: 3,
    minWidth: largeLayout ? 100 : 80,
    boxShadow: 1,
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      transform: "translateY(-1px)",
      boxShadow: 2,
    },
  },
  filters: {
    display: "flex",
    gap: 1,
    alignItems: "center",
  },
  filterButton: {
    minWidth: 44,
    height: 44,
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "background.paper",
    color: "text.secondary",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      borderColor: "primary.main",
      backgroundColor: "primary.light",
      color: "primary.contrastText",
      transform: "translateY(-1px)",
      boxShadow: 1,
    },
    "&.active": {
      borderColor: "primary.main",
      backgroundColor: "primary.main",
      color: "primary.contrastText",
      boxShadow: 1,
    },
  },
});
