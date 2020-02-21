// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Context provider
import { PoodProvider } from "./contexts/PoodContext";

// Component and style
import "./index.css";
import App from "./components/App/App";

console.log(process.env);
ReactDOM.render(
  <BrowserRouter>
    <PoodProvider>
      <App />
    </PoodProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
