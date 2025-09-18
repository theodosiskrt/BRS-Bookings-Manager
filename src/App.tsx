import { ThemeProvider } from "@emotion/react";
import { BookingsManager } from "./pages";
import { useInitializeTheme } from "./theme/index.ts";

const App = () => {
  const { theme } = useInitializeTheme();

  return (
    <ThemeProvider theme={theme}>
      <BookingsManager />
    </ThemeProvider>
  );
};

export default App;
