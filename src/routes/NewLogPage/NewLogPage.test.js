import React from "react";
import TestRenderer from "react-test-renderer";
import NewLogPage from "./NewLogPage";
import moment from "moment";

it(`Renders NewLogPage UI as expected`, () => {
  const tree = TestRenderer.create(<NewLogPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
