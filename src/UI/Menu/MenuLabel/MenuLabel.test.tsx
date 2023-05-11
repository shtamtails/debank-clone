import { expect, describe, it } from "vitest";
import { MenuLabel } from "./MenuLabel";
import { render } from "@testing-library/react";

describe("MenuLabel", () => {
  it("should render the menu label text", () => {
    const { getByText } = render(
      <MenuLabel testId="menu-label">Menu Label</MenuLabel>
    );
    const menuLabelText = getByText("Menu Label");
    expect(menuLabelText).toBeInTheDocument();
  });

  it("should have the class name 'menu__label'", () => {
    const { container } = render(
      <MenuLabel testId="menu-label">Item</MenuLabel>
    );
    const menuLabel = container.firstChild;
    expect(menuLabel).toHaveClass("menu__label");
  });
});
