import React from "react";
import TestRenderer from "react-test-renderer";
import AccountPage from "./AccountPage";

it(`Renders AccountPage UI as expected`, () => {
  const tree = TestRenderer.create(<AccountPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
