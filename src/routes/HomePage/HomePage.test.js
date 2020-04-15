import React from "react";
import TestRenderer from "react-test-renderer";
import HomePage from "./HomePage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
library.add(faUser, faLock);

it(`Renders HomePage UI as expected`, () => {
  const tree = TestRenderer.create(<HomePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
