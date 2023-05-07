import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";
import { expect, describe, it, vi } from "vitest";

describe("Input", () => {
  it("should render correctly with default props", () => {
    const { getByTestId } = render(<Input testId="input" />);
    const inputElement = getByTestId("input");
    expect(inputElement).toBeInTheDocument();
  });

  it("should render label correctly", () => {
    const label = "Full name";
    render(<Input label={label} />);
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
  });

  it("should render description correctly", () => {
    const description = "Description";
    render(<Input description={description} />);
    const descriptionElement = screen.getByText(description);
    expect(descriptionElement).toBeInTheDocument();
  });

  it("should render error correctly", () => {
    const error = "Error";
    render(<Input error={error} />);
    const errorElement = screen.getByText(error);
    expect(errorElement).toBeInTheDocument();
  });

  it("should render required indicator when required is true", () => {
    render(<Input label="Full name" required />);
    const requiredIndicatorElement = screen.getByText("*");
    expect(requiredIndicatorElement).toBeInTheDocument();
  });

  it("should render value correctly", () => {
    const value = "John Doe";
    const { getByTestId } = render(<Input testId="input" value={value} />);
    const inputElement = getByTestId("input") as HTMLInputElement;
    expect(inputElement.value).toBe(value);
  });

  it("should set value correctly on change", () => {
    const setValueMock = vi.fn();
    const newValue = "Jane Doe";
    const { getByTestId } = render(
      <Input testId="input" value="John Doe" setValue={setValueMock} />
    );
    const inputElement = getByTestId("input");
    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(setValueMock).toHaveBeenCalledWith(newValue);
  });

  it('should render correctly with "light" variant', () => {
    const { getByTestId } = render(<Input testId="input" variant="light" />);
    const inputElement = getByTestId("input");
    expect(inputElement).toHaveClass("input--light");
  });

  it('should render correctly with "dark" variant', () => {
    const { getByTestId } = render(<Input testId="input" variant="dark" />);
    const inputElement = getByTestId("input");
    expect(inputElement).toHaveClass("input--dark");
  });

  it("should render correctly with custom width", () => {
    const width = "200px";
    const { getByTestId } = render(<Input testId="input" width={width} />);
    const inputElement = getByTestId("input");
    expect(inputElement).toHaveStyle(`width: ${width}`);
  });

  it("should render correctly with custom height", () => {
    const height = "50px";
    const { getByTestId } = render(<Input testId="input" height={height} />);
    const inputElement = getByTestId("input");
    expect(inputElement).toHaveStyle(`height: ${height}`);
  });

  it("should render container correctly with custom className", () => {
    const className = "my-custom-class";
    const { getByTestId } = render(
      <Input testId="input" className={className} />
    );
    const inputContainer = getByTestId("input-container");
    expect(inputContainer).toHaveClass(`input ${className}`);
  });
});
