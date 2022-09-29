import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./app/constants/theme";

ReactDOM.render(

    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  document.getElementById("root")
);

