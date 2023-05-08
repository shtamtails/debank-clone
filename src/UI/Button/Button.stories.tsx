import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { defaultArgTypes } from "../../../.storybook/defaultArgTypes";
import { HiOutlineDatabase } from "react-icons/hi";
import { Colors, Variants } from "../models";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    ...defaultArgTypes,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Buttons = () => {
  const colors: Colors[] = [
    "dark",
    "gray",
    "red",
    "pink",
    "grape",
    "violet",
    "indigo",
    "blue",
    "cyan",
    "teal",
    "green",
    "lime",
    "yellow",
    "orange",
  ];
  const variants: Variants[] = ["filled", "light", "outline", "subtle"];
  return (
    <div className="buttons-story">
      {variants.map((variant) => (
        <div className="buttons-story__container margin-bottom-lg">
          {colors.map((color) => (
            <Button color={color} variant={variant}>
              {color}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Regular: Story = {
  args: {
    children: "Regular button",
  },
};

export const Colored: Story = {
  args: {
    color: "pink",
    children: "Colored button",
  },
};

export const DifferentVariant: Story = {
  args: {
    variant: "light",
    children: "Light button",
  },
};

export const WithIcon: Story = {
  args: {
    leftIcon: <HiOutlineDatabase />,
    children: "Database",
  },
};
