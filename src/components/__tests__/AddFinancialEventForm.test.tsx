import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddFinancialEventForm from "../AddFinancialEventForm";

describe("AddFinancialEventForm.test", () => {
  it("render all necessary inputs - name, description, date, status", () => {
    render(<AddFinancialEventForm />);
    expect(screen.getByTestId("value")).toBeInTheDocument();
    expect(screen.getByTestId("description")).toBeInTheDocument();
    expect(screen.getByTestId("date")).toBeInTheDocument();
    expect(screen.getByTestId("status")).toBeInTheDocument();
  });

  it("render button to store new financial event", () => {
    render(<AddFinancialEventForm />);
    expect(screen.getByTestId("sendButton")).toBeInTheDocument();
  });

  it("render error if try store financial event without value", async () => {
    render(<AddFinancialEventForm />);
    const button = screen.getByTestId("sendButton");
    fireEvent.click(button);
    expect(
      await screen.findByText("This field is required")
    ).toBeInTheDocument();
  });

  it("render error if try store financial event with incorrect value", async () => {
    render(<AddFinancialEventForm />);
    const button = screen.getByTestId("sendButton");
    const valueInput = screen.getByTestId("value");

    fireEvent.change(valueInput, { target: { value: "abc" } });
    fireEvent.click(button);

    expect(
      await screen.findByText("This field is required")
    ).toBeInTheDocument();
  });

  it("render no error if try store financial event with correct value", async () => {
    render(<AddFinancialEventForm />);
    const button = screen.getByTestId("sendButton");
    const valueInput = screen.getByTestId("value");

    fireEvent.change(valueInput, { target: { value: "123" } });
    fireEvent.click(button);

    expect(
      await waitFor(() => screen.queryByText("This field is required"))
    ).not.toBeInTheDocument();
  });
});
