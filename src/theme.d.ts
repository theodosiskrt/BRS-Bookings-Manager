import { Theme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomTheme extends Theme {
    status: {
      danger: string;
    };
    palette: Theme["palette"] & {
      background: {
        default: string;
        paper: string;
        accent: string;
        card: string;
        nav: string;
      };
      border: {
        main: string;
        accent: string;
      };
      destructive: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      highlight: {
        main: string;
        accent: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
        hint: string;
        inverse: string;
      };
    };
  }

  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    status?: {
      danger?: string;
    };
    palette?: ThemeOptions["palette"] & {
      background?: {
        default?: string;
        paper?: string;
        accent?: string;
        card?: string;
        nav?: string;
      };
      border?: {
        main?: string;
        accent?: string;
      };
      destructive?: {
        main?: string;
        light?: string;
        dark?: string;
        contrastText?: string;
      };
      highlight?: {
        main?: string;
        accent?: string;
      };
      text?: {
        primary?: string;
        secondary?: string;
        disabled?: string;
        hint?: string;
        inverse?: string;
      };
    };
  }

  export type Theme = CustomTheme;
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
  export function useTheme(): CustomTheme;
}
