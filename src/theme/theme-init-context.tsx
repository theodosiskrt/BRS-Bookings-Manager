import { createTheme, type Theme } from "@mui/material";
import {
  createContext,
  useContext,
  type FC,
  type PropsWithChildren,
} from "react";
import { useColorTheme } from "./use-color-theme";

type ThemeContextType = {
  mode: string;
  toggleColorMode: () => void;
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggleColorMode: () => {},
  theme: createTheme(),
});

export const ThemeInitProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useColorTheme();

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useInitializeTheme = () => {
  return useContext(ThemeContext);
};
