import { type PaletteMode } from "@mui/material";
import {
  blue,
  lightBlue,
  grey,
  green,
  orange,
  red,
  cyan,
  purple,
  pink,
} from "@mui/material/colors";

const lightTheme = {
  primary: {
    main: blue[700],
    light: blue[400],
    dark: blue[900],
    contrastText: grey[50],
  },
  secondary: {
    main: lightBlue[500],
    light: lightBlue[200],
    dark: lightBlue[700],
    contrastText: grey[900],
  },
  background: {
    default: grey[50], // main background, neutral
    paper: grey[200], // slightly stronger, for surfaces
    accent: blue[50], // cooler, more separation from default
    card: blue[100], // stronger than accent, distinct from paper
    nav: grey[200], // more visible for navigation, not same as paper
  },
  text: {
    primary: grey[900],
    secondary: grey[700],
    disabled: grey[400],
    hint: grey[500],
    inverse: grey[50],
  },
  divider: blue[100], // cooler tone, more visible than before
  border: {
    main: grey[300],
    accent: blue[300], // clearer accent border
  },
  success: {
    main: green[600],
    light: green[300],
    dark: green[900],
    contrastText: grey[50],
  },
  warning: {
    main: orange[600],
    light: orange[200],
    dark: orange[900],
    contrastText: grey[900],
  },
  destructive: {
    main: red[600],
    light: red[300],
    dark: red[900],
    contrastText: grey[50],
  },
  info: {
    main: cyan[600],
    light: cyan[200],
    dark: cyan[900],
    contrastText: grey[50],
  },
  highlight: {
    main: pink[100], // stronger than before
    accent: purple[100], // more visible accent
  },
};

const darkTheme = {
  primary: {
    main: blue[400],
    light: blue[200],
    dark: blue[700],
    contrastText: grey[900],
  },
  secondary: {
    main: lightBlue[300],
    light: lightBlue[200],
    dark: lightBlue[400],
    contrastText: grey[900],
  },
  background: {
    default: grey[900],
    paper: grey[800],
    accent: blue[900],
    card: grey[900],
    nav: grey[800],
  },
  text: {
    primary: grey[50],
    secondary: grey[300],
    disabled: grey[600],
    hint: grey[500],
    inverse: grey[900],
  },
  divider: grey[700],
  border: {
    main: grey[700],
    accent: blue[700],
  },
  success: {
    main: green[400],
    light: green[200],
    dark: green[700],
    contrastText: grey[900],
  },
  warning: {
    main: orange[400],
    light: orange[200],
    dark: orange[800],
    contrastText: grey[900],
  },
  destructive: {
    main: red[400],
    light: red[200],
    dark: red[700],
    contrastText: grey[900],
  },
  info: {
    main: cyan[400],
    light: cyan[200],
    dark: cyan[700],
    contrastText: grey[900],
  },
  highlight: {
    main: purple[700],
    accent: pink[700],
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light" ? lightTheme : darkTheme),
  },
});
