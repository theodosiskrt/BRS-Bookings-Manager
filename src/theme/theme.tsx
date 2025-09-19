import { type PaletteMode } from "@mui/material";
import {
  blue,
  grey,
  green,
  orange,
  red,
  purple,
  indigo,
  teal,
} from "@mui/material/colors";

const lightTheme = {
  primary: {
    main: indigo[600], // Modern indigo instead of blue
    light: indigo[400],
    dark: indigo[800],
    contrastText: "#ffffff",
  },
  secondary: {
    main: teal[500], // Complementary teal
    light: teal[300],
    dark: teal[700],
    contrastText: "#ffffff",
  },
  background: {
    default: "#fafbfc", // Softer white with subtle warmth
    paper: "#ffffff", // Pure white for cards and surfaces
    accent: indigo[50], // Very light indigo accent
    card: "#ffffff", // White cards with shadows for elevation
    nav: "#ffffff", // Clean white navigation
  },
  text: {
    primary: grey[900],
    secondary: grey[600], // Better contrast
    disabled: grey[400],
    hint: grey[500],
    inverse: "#ffffff",
  },
  divider: grey[200], // Subtle dividers
  border: {
    main: grey[300],
    accent: indigo[200], // Subtle accent borders
  },
  success: {
    main: green[600],
    light: green[100],
    dark: green[800],
    contrastText: "#ffffff",
  },
  warning: {
    main: orange[600],
    light: orange[100],
    dark: orange[800],
    contrastText: "#ffffff",
  },
  destructive: {
    main: red[600],
    light: red[100],
    dark: red[800],
    contrastText: "#ffffff",
  },
  info: {
    main: blue[600],
    light: blue[100],
    dark: blue[800],
    contrastText: "#ffffff",
  },
  highlight: {
    main: purple[50], // Subtle highlight
    accent: indigo[50], // Consistent with primary theme
  },
};

const darkTheme = {
  primary: {
    main: indigo[400],
    light: indigo[300],
    dark: indigo[600],
    contrastText: "#ffffff",
  },
  secondary: {
    main: teal[400],
    light: teal[300],
    dark: teal[600],
    contrastText: "#ffffff",
  },
  background: {
    default: "#0a0e1a", // Deep dark blue for modern feel
    paper: "#1a1f2e", // Elevated surface color
    accent: indigo[900],
    card: "#1a1f2e", // Same as paper for consistency
    nav: "#1a1f2e", // Consistent navigation
  },
  text: {
    primary: "#ffffff",
    secondary: grey[300],
    disabled: grey[600],
    hint: grey[500],
    inverse: grey[900],
  },
  divider: grey[700],
  border: {
    main: grey[700],
    accent: indigo[600],
  },
  success: {
    main: green[400],
    light: green[100],
    dark: green[700],
    contrastText: "#ffffff",
  },
  warning: {
    main: orange[400],
    light: orange[100],
    dark: orange[700],
    contrastText: "#ffffff",
  },
  destructive: {
    main: red[400],
    light: red[100],
    dark: red[700],
    contrastText: "#ffffff",
  },
  info: {
    main: blue[400],
    light: blue[100],
    dark: blue[700],
    contrastText: "#ffffff",
  },
  highlight: {
    main: indigo[900],
    accent: teal[900],
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light" ? lightTheme : darkTheme),
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      fontSize: "1.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: 1.3,
    },
    body1: {
      fontSize: "0.9375rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 500,
      fontSize: "0.875rem",
      textTransform: "none" as const,
      letterSpacing: "0.01em",
    },
  },
  shape: {
    borderRadius: 12, // More modern rounded corners
  },
  shadows:
    mode === "light"
      ? ([
          "none",
          "0px 1px 3px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.1)",
          "0px 4px 6px rgba(0, 0, 0, 0.05), 0px 2px 4px rgba(0, 0, 0, 0.08)",
          "0px 10px 15px rgba(0, 0, 0, 0.08), 0px 4px 6px rgba(0, 0, 0, 0.05)",
          "0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)",
          ...Array(20).fill("0px 25px 50px rgba(0, 0, 0, 0.15)"),
        ] as const)
      : ([
          "none",
          "0px 1px 3px rgba(0, 0, 0, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.4)",
          "0px 4px 6px rgba(0, 0, 0, 0.3), 0px 2px 4px rgba(0, 0, 0, 0.35)",
          "0px 10px 15px rgba(0, 0, 0, 0.35), 0px 4px 6px rgba(0, 0, 0, 0.3)",
          "0px 20px 25px rgba(0, 0, 0, 0.4), 0px 10px 10px rgba(0, 0, 0, 0.25)",
          ...Array(20).fill("0px 25px 50px rgba(0, 0, 0, 0.5)"),
        ] as const),
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          textTransform: "none",
          padding: "10px 20px",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow:
              mode === "light"
                ? "0px 4px 12px rgba(0, 0, 0, 0.15)"
                : "0px 4px 12px rgba(0, 0, 0, 0.4)",
          },
        },
        contained: {
          boxShadow:
            mode === "light"
              ? "0px 2px 4px rgba(0, 0, 0, 0.1)"
              : "0px 2px 4px rgba(0, 0, 0, 0.3)",
          borderRadius: 50,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              boxShadow:
                mode === "light"
                  ? "0px 2px 8px rgba(0, 0, 0, 0.08)"
                  : "0px 2px 8px rgba(0, 0, 0, 0.25)",
            },
            "&.Mui-focused": {
              boxShadow:
                mode === "light"
                  ? "0px 2px 12px rgba(79, 70, 229, 0.15)"
                  : "0px 2px 12px rgba(129, 140, 248, 0.3)",
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border:
            mode === "light"
              ? "1px solid rgba(0, 0, 0, 0.06)"
              : "1px solid rgba(255, 255, 255, 0.1)",
        },
        elevation1: {
          boxShadow:
            mode === "light"
              ? "0px 1px 3px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.1)"
              : "0px 1px 3px rgba(0, 0, 0, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.4)",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor:
            mode === "light"
              ? "rgba(0, 0, 0, 0.06)"
              : "rgba(255, 255, 255, 0.1)",
        },
        head: {
          fontWeight: 600,
          fontSize: "0.875rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        },
      },
    },
  },
});
