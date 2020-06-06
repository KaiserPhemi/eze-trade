/* eslint-disable no-undef */
// react libraries
import React from "react";

// testing libraries
import { render } from "@testing-library/react";

// components
import App from "../App";

// test cases
describe("App component", () => {
  const container = render(<App />);
  test("should render container", () => {
    expect(container.div).toBe(true);
  });
});
