import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import DataTable from "../components/DataTable";

describe("Data table component", () => {
  it("should render correct data", () => {});
  render(
    <DataTable
      id="1"
      name="Test account"
      currency="$"
      prof={2309}
      accountType="Test account type"
    />
  );
  const accountName = screen.getByTestId("accountName");
  expect(accountName).toBeInTheDocument();
});
