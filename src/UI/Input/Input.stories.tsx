import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["dark", "light"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Inputs = () => {
  return (
    <>
      <div className="story-container--dark">
        <Input placeholder="Placeholder" variant="dark" mb="lg" />
        <Input label="Full name" required variant="dark" value="Hello World!" />
      </div>
      <div className="story-container--light">
        <Input placeholder="Placeholder" variant="light" mb="lg" />
        <Input
          label="Full name"
          required
          variant="light"
          value="Hello World!"
        />
      </div>
    </>
  );
};

export const TextInput: Story = {
  args: {
    variant: "light",
    label: "Full name",
    required: true,
  },
};
