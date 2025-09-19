export const getStyles = (largeLayout: boolean) => ({
  container: {
    display: "flex",
    gap: largeLayout ? 2 : 1,
    alignItems: "center",
    flexWrap: "wrap",
  },
  filters: {
    display: "flex",
    gap: 1,
    alignItems: "center",
  },
  query: {
    flexGrow: 1,
    flexBasis: 180,
  },
  submit: {
    flexGrow: 0,
    flexShrink: 0,
  },
  // inner bar grouping for the search input + button
  bar: {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
    alignItems: "center",
  },
});
