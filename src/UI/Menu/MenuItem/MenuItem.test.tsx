import { render, fireEvent } from "@testing-library/react";
import { MenuItem } from "./MenuItem";
import { vi } from "vitest";

describe("MenuItem", () => {
  const onClick = vi.fn();

  it("should render the menu item text", () => {
    const { getByText } = render(
      <MenuItem testId="menu-item" onClick={onClick}>
        Home
      </MenuItem>
    );
    expect(getByText("Home")).toBeInTheDocument();
  });

  it("should render the left icon when provided", () => {
    const { getByTestId } = render(
      <MenuItem testId="menu-item" onClick={onClick} icon={<div>Icon</div>}>
        Home
      </MenuItem>
    );
    expect(getByTestId("menu-item-left-icon")).toBeInTheDocument();
  });

  it("should render the right content when provided", () => {
    const { getByTestId } = render(
      <MenuItem
        testId="menu-item"
        onClick={onClick}
        rightSection={<div>Content</div>}
      >
        Home
      </MenuItem>
    );
    expect(getByTestId("menu-item-right-section")).toBeInTheDocument();
  });

  it("should call the onClick function when clicked", () => {
    const { getByTestId } = render(
      <MenuItem testId="menu-item" onClick={onClick}>
        Home
      </MenuItem>
    );
    const button = getByTestId("menu-item");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
