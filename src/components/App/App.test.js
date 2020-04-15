import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

it("App renders without crashing", () => {
  const div = document.createElement("div");
  const component = (
    <Router>
      <App />
    </Router>
  );
  ReactDOM.render(component, div);
  ReactDOM.unmountComponentAtNode(div);
});
