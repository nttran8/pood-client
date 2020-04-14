import React from "react";
import ReactDOM from "react-dom";
import LogView from "./LogView";

it("LogView renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<LogView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
