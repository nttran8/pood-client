import React from "react";
import TestRenderer from "react-test-renderer";
import DashboardPage from "./DashboardPage";
import { BrowserRouter as Router } from "react-router-dom";

it(`Renders DashboardPage UI as expected`, () => {
  const tree = TestRenderer.create(
    <Router>
      <DashboardPage />
    </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
