// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Context provider
import { LogListProvider } from "./contexts/LogListContext";

// Component and style
import "./index.css";
import App from "./components/App/App";

ReactDOM.render(
  <BrowserRouter>
    <LogListProvider>
      <App />
    </LogListProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
