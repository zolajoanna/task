import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ColumnNames from "../components/ColumnNames";

describe("ColumnNames", () => {
  it("should render correct columns titles", () => {
    render(<ColumnNames />);
    const columntName = screen.getByText("Name");
    expect(columntName).toBeInTheDocument();
  });
});
