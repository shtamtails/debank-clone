import { expect, describe, it } from "vitest";
import { MenuDivider } from "./MenuDivider";
import { render } from "@testing-library/react";

describe("MenuDivider", () => {
  it("should render the menu divider", () => {
    const { container } = render(<MenuDivider />);
    const menuDivider = container.firstChild;
    expect(menuDivider).toHaveClass("menu__divider");
  });
});
