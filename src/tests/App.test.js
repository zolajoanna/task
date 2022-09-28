import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component tests", () => {
  it("should render title bar", () => {
    render(<App />);
    const titleBar = screen.getByText("FRONTEND COMPETENCY TEST");
    expect(titleBar).toBeInTheDocument();
  });

  it("should render a spinner", () => {
    render(<App />);
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });
});
