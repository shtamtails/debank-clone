import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";
import { expect, describe, it, vi } from "vitest";
import { HiSearch } from "react-icons/hi";

describe("Input", () => {
  it("should render correctly with default props", () => {
    const { getByTestId } = render(<Input variant="light" testId="input" />);
    const inputElement = getByTestId("input");
    expect(inputElement).toBeInTheDocument();
  });

  it("should render label correctly", () => {
    const label = "Full name";
    render(<Input variant="light" label={label} />);
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
  });

  it("should render description correctly", () => {
    const description = "Description";
    render(<Input variant="light" description={description} />);
    const descriptionElement = screen.getByText(description);
    expect(descriptionElement).toBeInTheDocument();
  });

  it("should render error correctly", () => {
    const error = "Error";
    render(<Input variant="light" error={error} />);
    const errorElement = screen.getByText(error);
    expect(errorElement).toBeInTheDocument();
  });

  it("should render required indicator when required is true", () => {
    render(<Input variant="light" label="Full name" required />);
    const requiredIndicatorElement = screen.getByText("*");
    expect(requiredIndicatorElement).toBeInTheDocument();
  });

  it("should render value correctly", () => {
    const value = "John Doe";
    const { getByTestId } = render(
      <Input variant="light" testId="input" value={value} />
    );
    const inputElement = getByTestId("input") as HTMLInputElement;
    expect(inputElement.value).toBe(value);
  });

  it("should set value correctly on change", () => {
    const setValueMock = vi.fn();
    const newValue = "Jane Doe";
    const { getByTestId } = render(
      <Input
        variant="light"
        testId="input"
        value="John Doe"
        setValue={setValueMock}
      />
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
    const { getByTestId } = render(
      <Input variant="light" testId="input" width={width} />
    );
    const inputElement = getByTestId("input");
    expect(inputElement).toHaveStyle(`width: ${width}`);
  });

  it("should render correctly with custom height", () => {
    const height = "50px";
    const { getByTestId } = render(
      <Input variant="light" testId="input" height={height} />
    );
    const inputElement = getByTestId("input");
    expect(inputElement).toHaveStyle(`height: ${height}`);
  });

  it("should render container correctly with custom className", () => {
    const className = "my-custom-class";
    const { getByTestId } = render(
      <Input variant="light" testId="input" className={className} />
    );
    const inputContainer = getByTestId("input-wrapper");
    expect(inputContainer).toHaveClass(`input ${className}`);
  });

  it("should render icon when provided", () => {
    const { getByTestId } = render(
      <Input
        variant="light"
        testId="input-with-icon"
        icon={<HiSearch data-testid="icon" />}
      />
    );
    const inputElement = getByTestId("input-with-icon");
    expect(inputElement).toHaveClass("input--with-icon");
    expect(getByTestId("icon")).toBeInTheDocument();
  });

  it("should render with correct type", () => {
    render(<Input variant="light" type="email" testId="input-element" />);
    expect(screen.getByTestId("input-element")).toHaveAttribute(
      "type",
      "email"
    );
  });
});

// describe("Input - Autocomplete", () => {
//   const data = [
//     {
//       value: "vue",
//       label: "Vue",
//     },
//     {
//       value: "react",
//       label: "React",
//     },
//   ];

//   it("should render dropdown menu correctly when clicked", () => {
//     const { getByTestId, queryAllByTestId } = render(
//       <Input testId="autocomplete-input" data={data} type="autocomplete" />
//     );
//     const inputElement = getByTestId("autocomplete-input");
//     fireEvent.click(inputElement);
//     const dropdownMenu = getByTestId("autocomplete-dropdown-menu");

//     const dropdownMenuElements = queryAllByTestId(
//       "autocomplete-dropdown-menu-element"
//     );

//     expect(dropdownMenu).toBeInTheDocument();
//     expect(dropdownMenuElements.length).toBe(2);
//     expect(dropdownMenuElements[0]).toHaveTextContent("Vue");
//   });

//   it("should select 'Vue' option when clicked", () => {
//     const { getByTestId, queryAllByTestId } = render(
//       <Input data={data} type="autocomplete" testId="autocomplete-input" />
//     );

//     const inputElement = getByTestId("autocomplete-input");
//     fireEvent.click(inputElement);

//     const dropdownMenuElements = queryAllByTestId(
//       "autocomplete-dropdown-menu-element"
//     );

//     fireEvent.click(dropdownMenuElements[0]);

//     expect(inputElement).toHaveValue("Vue");
//   });

//   it("should filter options based on input value", () => {
//     const { getByTestId, queryByText, queryAllByTestId } = render(
//       <Input data={data} type="autocomplete" testId="autocomplete-input" />
//     );

//     const inputElement = getByTestId("autocomplete-input");
//     fireEvent.click(inputElement);
//     fireEvent.change(inputElement, { target: { value: "Vu" } });

//     const dropdownMenuElements = queryAllByTestId(
//       "autocomplete-dropdown-menu-element"
//     );

//     const unfilteredOption = queryByText("React");
//     expect(dropdownMenuElements[0]).toBeInTheDocument();
//     expect(unfilteredOption).toBeNull();
//   });
// });
