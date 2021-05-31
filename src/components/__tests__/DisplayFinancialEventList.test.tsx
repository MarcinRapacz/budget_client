import { screen, render } from "@testing-library/react";
import DisplayFinancialEventList from "../DisplayFinancialEventList";

describe("DisplayFinancialEventList.test", () => {
  it("render headers of table", () => {
    render(<DisplayFinancialEventList />);

    expect(screen.queryByText("Data")).toBeInTheDocument();
    expect(screen.queryByText("Wartość")).toBeInTheDocument();
    expect(screen.queryByText("Opis")).toBeInTheDocument();
    expect(screen.queryByText("Zmień status")).toBeInTheDocument();
  });
});
