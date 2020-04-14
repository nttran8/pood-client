import React from "react";
import ReactDOM from "react-dom";
import LogForm from "./LogForm";

it("LogForm renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<LogForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
