import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

// Define your Material-UI theme
const theme = createTheme();

// Render the app
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
