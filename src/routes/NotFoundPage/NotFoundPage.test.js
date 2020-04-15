import React from "react";
import TestRenderer from "react-test-renderer";
import NotFoundPage from "./NotFoundPage";

it(`Renders NotFoundPage UI as expected`, () => {
  const tree = TestRenderer.create(<NotFoundPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
