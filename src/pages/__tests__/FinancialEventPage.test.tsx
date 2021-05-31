import { render, screen, fireEvent } from "@testing-library/react";
import FinancialEventPage from "../FinancialEventPage";

describe("FinancialEventPage", () => {
  it("render header", () => {
    render(<FinancialEventPage />);
    expect(screen.getByText("Zdarzenie")).toBeInTheDocument();
  });

  it("add new income", async () => {
    render(<FinancialEventPage />);
    const inputValue = screen.getByTestId("value");
    const inputDescription = screen.getByTestId("description");
    const inputStatus = screen.getByTestId("status");
    const sendButton = screen.getByTestId("sendButton");

    fireEvent.change(inputValue, { target: { value: 10 } });
    fireEvent.change(inputDescription, {
      target: { value: "Test input - description" },
    });
    fireEvent.click(inputStatus);
    fireEvent.click(sendButton);

    expect(await screen.findByText(10)).toBeInTheDocument();
    expect(
      await screen.findByText("Test input - description")
    ).toBeInTheDocument();
    expect(await screen.findByTestId("financialEventItemList")).toHaveClass(
      "bg-green-200"
    );
  });

  it("add new expense", async () => {
    render(<FinancialEventPage />);
    const inputValue = screen.getByTestId("value");
    const inputDescription = screen.getByTestId("description");
    const sendButton = screen.getByTestId("sendButton");

    fireEvent.change(inputValue, { target: { value: 10 } });
    fireEvent.change(inputDescription, {
      target: { value: "Test input - description" },
    });
    fireEvent.click(sendButton);

    expect(await screen.findByText(10)).toBeInTheDocument();
    expect(
      await screen.findByText("Test input - description")
    ).toBeInTheDocument();
    expect(await screen.findByTestId("financialEventItemList")).toHaveClass(
      "bg-red-200"
    );
  });

  it("change status", async () => {
    render(<FinancialEventPage />);
    const inputValue = screen.getByTestId("value");
    const inputDescription = screen.getByTestId("description");
    const sendButton = screen.getByTestId("sendButton");

    fireEvent.change(inputValue, { target: { value: 10 } });
    fireEvent.change(inputDescription, {
      target: { value: "Test input - description" },
    });

    fireEvent.click(sendButton);
    expect(await screen.findByTestId("financialEventItemList")).toHaveClass(
      "bg-red-200"
    );

    const changeStatusButton = await screen.findByTestId("changeStatusButton");
    fireEvent.click(changeStatusButton);
    expect(await screen.findByTestId("financialEventItemList")).toHaveClass(
      "bg-green-200"
    );
  });
});
