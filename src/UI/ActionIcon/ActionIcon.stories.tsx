import { Meta, StoryObj } from "@storybook/react";
import { ActionIcon } from "./ActionIcon";
import { HiSearch } from "react-icons/hi";
import { Colors, Variants } from "../models";

const meta: Meta<typeof ActionIcon> = {
  title: "UI/ActionIcon",
  component: ActionIcon,
  tags: ["autodocs"],
  argTypes: {
    //   ...defaultArgTypes,
  },
};

export default meta;

type Story = StoryObj<typeof ActionIcon>;

export const ActionIcons = () => {
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
    <div className="action-icon-story">
      {variants.map((variant) => (
        <div className="action-icon-story__container margin-bottom-lg">
          {colors.map((color) => (
            <ActionIcon color={color} variant={variant} colorScheme="light">
              <HiSearch />
            </ActionIcon>
          ))}
        </div>
      ))}
    </div>
  );
};
