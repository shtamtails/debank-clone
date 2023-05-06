import { Button } from "./Button";
import { expect, describe, it, vi } from "vitest";
import { HiArchive } from "react-icons/hi";
import { render, fireEvent } from "@testing-library/react";

describe("Button component", () => {
  it("should render children text", () => {
    const { getByTestId } = render(<Button testId="button">Button</Button>);
    const button = getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button).toBe;
  });

  it("should call onClick function when clicked", () => {
    const onClick = vi.fn();
    const { getByTestId } = render(
      <Button onClick={onClick} testId="button">
        Click me
      </Button>
    );
    const button = getByTestId("button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should disable the button when disabled prop is true", () => {
    const { getByTestId } = render(
      <Button disabled testId="button">
        Click me
      </Button>
    );
    const button = getByTestId("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("disabled");
  });

  it("should display left icon when provided", () => {
    const { getByTestId } = render(
      <Button leftIcon={HiArchive}>Button</Button>
    );
    const icon = getByTestId("button-left-icon");
    expect(icon).toBeInTheDocument();
  });

  it("should display right icon when provided", () => {
    const { getByTestId } = render(
      <Button rightIcon={HiArchive}>Button</Button>
    );
    const icon = getByTestId("button-right-icon");
    expect(icon).toBeInTheDocument();
  });

  it("should work with margins/paddings/radiuses when provided", () => {
    const { getByTestId } = render(
      <Button ml="md" pl="md" radius="md" testId="button">
        Click me
      </Button>
    );
    const button = getByTestId("button");
    expect(button).toHaveClass("margin-left-md");
    expect(button).toHaveClass("padding-left-md");
    expect(button).toHaveClass("border-radius-md");
  });
});
