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
      <Autocomplete testId="autocomplete" data={data} />
    );
    const inputElement = getByTestId("autocomplete");
    fireEvent.click(inputElement);
    const dropdownMenu = getByTestId("autocomplete-dropdown");
    const dropdownMenuElements = queryAllByTestId(
      "autocomplete-dropdown-element"
    );
    expect(dropdownMenu).toBeInTheDocument();
    expect(dropdownMenuElements.length).toBe(2);
    expect(dropdownMenuElements[0]).toHaveTextContent("Vue");
  });

  it("should select 'Vue' option when clicked", () => {
    const { getByTestId, queryAllByTestId } = render(
      <Autocomplete data={data} testId="autocomplete" />
    );

    const inputElement = getByTestId("autocomplete");
    fireEvent.click(inputElement);
    const dropdownMenuElements = queryAllByTestId(
      "autocomplete-dropdown-element"
    );
    fireEvent.click(dropdownMenuElements[0]);
    expect(inputElement).toHaveValue("Vue");
  });

  it("should filter options based on input value", () => {
    const { getByTestId, queryByText, queryAllByTestId } = render(
      <Autocomplete data={data} testId="autocomplete" />
    );

    const inputElement = getByTestId("autocomplete");
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: "Vu" } });

    const dropdownMenuElements = queryAllByTestId(
      "autocomplete-dropdown-element"
    );

    const unfilteredOption = queryByText("React");
    expect(dropdownMenuElements[0]).toBeInTheDocument();
    expect(unfilteredOption).toBeNull();
  });
});
