import { render, fireEvent } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import { Autocomplete } from "./Autocomplete";

describe("Autocomplete", () => {
  const data = [
    {
      value: "vue",
      label: "Vue",
    },
    {
      value: "react",
      label: "React",
    },
  ];

  it("should render dropdown menu correctly when clicked", () => {
    const { getByTestId, queryAllByTestId } = render(
      <Autocomplete variant="light" testId="autocomplete-input" data={data} />
    );
    const inputElement = getByTestId("autocomplete-input");
    fireEvent.click(inputElement);
    const dropdownMenu = getByTestId("dropdown-menu");
    const dropdownMenuElements = queryAllByTestId("dropdown-menu-element");
    expect(dropdownMenu).toBeInTheDocument();
    expect(dropdownMenuElements.length).toBe(2);
    expect(dropdownMenuElements[0]).toHaveTextContent("Vue");
  });

  it("should select 'Vue' option when clicked", () => {
    const { getByTestId, queryAllByTestId } = render(
      <Autocomplete data={data} variant="light" testId="autocomplete-input" />
    );

    const inputElement = getByTestId("autocomplete-input");
    fireEvent.click(inputElement);
    const dropdownMenuElements = queryAllByTestId("dropdown-menu-element");
    fireEvent.click(dropdownMenuElements[0]);
    expect(inputElement).toHaveValue("Vue");
  });

  it("should filter options based on input value", () => {
    const { getByTestId, queryByText, queryAllByTestId } = render(
      <Autocomplete variant="light" data={data} testId="autocomplete-input" />
    );

    const inputElement = getByTestId("autocomplete-input");
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: "Vu" } });

    const dropdownMenuElements = queryAllByTestId("dropdown-menu-element");

    const unfilteredOption = queryByText("React");
    expect(dropdownMenuElements[0]).toBeInTheDocument();
    expect(unfilteredOption).toBeNull();
  });
});
