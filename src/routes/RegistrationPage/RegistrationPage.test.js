import React from "react";
import TestRenderer from "react-test-renderer";
import RegistrationPage from "./RegistrationPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
library.add(faUser, faEnvelope, faLock);

it(`Renders RegistrationPage UI as expected`, () => {
  const tree = TestRenderer.create(<RegistrationPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
