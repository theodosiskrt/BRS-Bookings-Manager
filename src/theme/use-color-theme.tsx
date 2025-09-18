import React from "react";
import { getDesignTokens } from "./theme";
import { createTheme, type PaletteMode } from "@mui/material/styles";

export const useColorTheme = () => {
  const [mode, setMode] = React.useState<PaletteMode>("light");

  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

  const modifiedTheme = React.useMemo(
    () => createTheme(getDesignTokens("light")),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};
