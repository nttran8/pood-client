import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
library.add(faUser, faLock);

it("LoginForm renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<LoginForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
