import { render, waitFor } from "@testing-library/react";
import React, { Ref } from "react";
import { Menu } from "./Menu";
import userEvent from "@testing-library/user-event";

describe("Menu", () => {
  it("should render in document", () => {
    const targetRef: Ref<HTMLButtonElement> = React.createRef();
    const { getByTestId } = render(
      <Menu
        width={200}
        target={targetRef}
        visible={true}
        setVisible={() => {}}
        testId="menu"
      >
        <Menu.Item>Item 1</Menu.Item>
      </Menu>
    );

    const menuElement = getByTestId("menu");
    expect(menuElement).toBeVisible();
  });

  it("should set opacity to 0 when clicked outside", async () => {
    const targetRef: Ref<HTMLButtonElement> = React.createRef();
    const { getByTestId } = render(
      <>
        <button ref={targetRef}>Toggle menu</button>
        <Menu
          width={200}
          target={targetRef}
          visible={true}
          setVisible={() => []}
          testId="menu"
        >
          <Menu.Item>Item 1</Menu.Item>
        </Menu>
        <button data-testid="outside-element">element outside menu</button>
      </>
    );
    const menuElement = getByTestId("menu");
    const outsideElement = getByTestId("outside-element");
    userEvent.click(outsideElement);
    await waitFor(() => {
      expect(menuElement).toHaveStyle({ opacity: 0 });
    });
  });

  it("should change width of menu container", () => {
    const targetRef: Ref<HTMLButtonElement> = React.createRef();
    const { getByTestId } = render(
      <div>
        <button ref={targetRef}>Target</button>
        <Menu
          width={200}
          target={targetRef}
          visible={true}
          setVisible={() => {}}
          testId="menu"
        >
          <Menu.Item>Item 1</Menu.Item>
        </Menu>
      </div>
    );

    const menuElement = getByTestId("menu");
    expect(menuElement).toHaveStyle({ width: "200px" });
  });

  it("should set the correct position of menu", () => {
    const targetRef1: Ref<HTMLButtonElement> = React.createRef();
    const { getByTestId } = render(
      <div>
        <button ref={targetRef1}>Target 1</button>
        <Menu
          target={targetRef1}
          visible={true}
          setVisible={() => {}}
          testId="menu"
        >
          <Menu.Item>Item 1</Menu.Item>
        </Menu>
      </div>
    );

    const menuElement = getByTestId("menu");
    expect(menuElement).toBeVisible();
    const targetCords = targetRef1.current!.getBoundingClientRect();
    expect(menuElement).toHaveStyle({
      top: `${targetCords.y + targetCords.height}px`,
      left: `${targetCords.x}px`,
    });
  });
});
