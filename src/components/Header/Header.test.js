import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

it("Header renders without crashing", () => {
  const div = document.createElement("div");
  const component = (
    <Router>
      <Header />
    </Router>
  );
  ReactDOM.render(component, div);
  ReactDOM.unmountComponentAtNode(div);
});
