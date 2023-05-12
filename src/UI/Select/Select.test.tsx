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
      <Select colorScheme="light" testId="select" data={data} />
    );

    const inputElement = getByTestId("select");
    fireEvent.click(inputElement);

    const dropdownMenu = getByTestId("select-dropdown");
    const dropdownMenuElements = queryAllByTestId("select-dropdown-element");
    expect(dropdownMenu).toBeInTheDocument();
    expect(dropdownMenuElements.length).toBe(2);
    expect(dropdownMenuElements[0]).toHaveTextContent("Vue");
  });

  it("should select 'Vue' option when clicked", () => {
    const { getByTestId, queryAllByTestId } = render(
      <Select data={data} testId="select" />
    );

    const inputElement = getByTestId("select");
    fireEvent.click(inputElement);
    const dropdownMenuElements = queryAllByTestId("select-dropdown-element");
    fireEvent.click(dropdownMenuElements[0]);
    expect(inputElement).toHaveValue("Vue");
  });
});
