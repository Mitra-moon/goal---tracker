import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { GoalProvider } from "./context/GoalContext";
import { SettingsProvider } from "./context/SettingsContext";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7b2ff7"
    },
    secondary: {
      main: "#00c6ff"
    },
    background: {
      default: "#0f172a",
      paper: "#1e293b"
    }
  },
  shape: {
    borderRadius: 12
  }
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SettingsProvider>
        <GoalProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </GoalProvider>
      </SettingsProvider>
    </BrowserRouter>
  </StrictMode>
);