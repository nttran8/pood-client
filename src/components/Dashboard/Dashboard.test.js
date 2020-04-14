import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router } from "react-router-dom";

it("Dashboard renders without crashing", () => {
  const div = document.createElement("div");
  const component = (
    <Router>
      <Dashboard />
    </Router>
  );
  ReactDOM.render(component, div);
  ReactDOM.unmountComponentAtNode(div);
});
