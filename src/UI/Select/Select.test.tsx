import { render, fireEvent } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import { Select } from "./Select";

describe("Select", () => {
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
      <Select variant="light" testId="select-input" data={data} />
    );
    const inputElement = getByTestId("select-input");
    fireEvent.click(inputElement);
    const dropdownMenu = getByTestId("dropdown-menu");
    const dropdownMenuElements = queryAllByTestId("dropdown-menu-element");
    expect(dropdownMenu).toBeInTheDocument();
    expect(dropdownMenuElements.length).toBe(2);
    expect(dropdownMenuElements[0]).toHaveTextContent("Vue");
  });

  it("should select 'Vue' option when clicked", () => {
    const { getByTestId, queryAllByTestId } = render(
      <Select data={data} variant="light" testId="select-input" />
    );

    const inputElement = getByTestId("select-input");
    fireEvent.click(inputElement);
    const dropdownMenuElements = queryAllByTestId("dropdown-menu-element");
    fireEvent.click(dropdownMenuElements[0]);
    expect(inputElement).toHaveValue("Vue");
  });
});
