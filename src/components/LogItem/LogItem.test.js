import React from "react";
import ReactDOM from "react-dom";
import LogItem from "./LogItem";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPoop } from "@fortawesome/free-solid-svg-icons";
library.add(faPoop);

describe("LogItem renders without crashing", () => {
  it("LogItem renders expanded view", () => {
    const div = document.createElement("div");
    const log = { id: 1, nickname: "test nickname" };
    ReactDOM.render(<LogItem log={log} expanded={true} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("LogItem renders condensed view", () => {
    const div = document.createElement("div");
    const log = { id: 1, nickname: "test nickname" };
    ReactDOM.render(<LogItem log={log} expanded={false} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
