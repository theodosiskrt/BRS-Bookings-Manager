import "@testing-library/jest-dom";
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Mock window.matchMedia used by MUI's useMediaQuery/breakpoints
if (typeof window !== "undefined" && !window.matchMedia) {
  // @ts-ignore - define minimal matchMedia mock
  window.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

const theme = createTheme();

function render(ui: React.ReactElement, options: any = {}) {
  // Use createElement instead of JSX to keep this file .ts-friendly
  return rtlRender(React.createElement(ThemeProvider, { theme }, ui), options);
}

// re-export everything
export * from "@testing-library/react";
export { render };
