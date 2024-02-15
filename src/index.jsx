import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";
import Globalstyle from "./theme/globalstyle.js";
import Theme from "./theme/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Globalstyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
