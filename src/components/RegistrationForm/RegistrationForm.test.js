import React from "react";
import ReactDOM from "react-dom";
import RegistrationForm from "./RegistrationForm";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
library.add(faUser, faEnvelope, faLock);

it("RegistrationForm renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<RegistrationForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
