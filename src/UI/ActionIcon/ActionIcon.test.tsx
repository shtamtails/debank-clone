import { expect, describe, it, vi } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ActionIcon } from "./ActionIcon";

describe("Action Icon component", () => {
  it("should render children text", () => {
    const { getByText } = render(
      <ActionIcon testId="action-icon">Test</ActionIcon>
    );
    const actionIcon = getByText("Test");
    expect(actionIcon).toBeInTheDocument();
    expect(actionIcon).toBe;
  });

  it("should call onClick function when clicked", () => {
    const onClick = vi.fn();
    const { getByTestId } = render(
      <ActionIcon onClick={onClick} testId="action-icon">
        Click me
      </ActionIcon>
    );
    const button = getByTestId("action-icon");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should disable the button when disabled prop is true", () => {
    const { getByTestId } = render(
      <ActionIcon disabled testId="action-icon">
        Test
      </ActionIcon>
    );
    const actionIcon = getByTestId("action-icon");
    expect(actionIcon).toBeDisabled();
    expect(actionIcon).toHaveClass("disabled");
  });

  it("should change styles when hovered and revert to default when not hovered", async () => {
    const { getByTestId } = render(
      <ActionIcon testId="action-icon" color="red" variant="filled">
        Test
      </ActionIcon>
    );
    const actionIcon = getByTestId("action-icon");
    expect(actionIcon).toHaveStyle("background-color: #f03e3e");
    userEvent.hover(actionIcon);
    await waitFor(() => {
      expect(actionIcon).toHaveStyle("background-color: #e03131");
    });
    userEvent.unhover(actionIcon);
    await waitFor(() => {
      expect(actionIcon).toHaveStyle("background-color: #f03e3e");
    });
  });
});
