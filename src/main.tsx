import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeInitProvider } from "./theme/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeInitProvider>
      <App />
    </ThemeInitProvider>
  </StrictMode>
);
