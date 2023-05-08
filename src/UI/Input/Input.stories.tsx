import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { BiLockAlt } from "react-icons/bi";

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
        <Input
          label="Full name"
          required
          variant="dark"
          value="Hello World!"
          description="Description"
          mb="lg"
        />
        <Input
          label="Full name"
          required
          variant="dark"
          value="Hello World!"
          description="Description"
          error="Error"
        />
      </div>
      <div className="story-container--light">
        <Input placeholder="Placeholder" variant="light" mb="lg" />
        <Input
          label="Full name"
          required
          variant="light"
          value="Hello World!"
          description="Description"
          error="Error"
        />
      </div>
    </>
  );
};

export const InputWithIcon = () => {
  return (
    <Input
      placeholder="Password"
      variant="light"
      icon={<BiLockAlt />}
      type="password"
    />
  );
};

export const InputSizes = () => {
  return (
    <>
      <div className="story-container--light">
        <Input
          placeholder="Placeholder"
          description="Description"
          label="Label"
          variant="light"
          mb="lg"
          size="xs"
        />
        <Input
          placeholder="Placeholder"
          description="Description"
          label="Label"
          variant="light"
          mb="lg"
          size="sm"
        />
        <Input
          placeholder="Placeholder"
          description="Description"
          label="Label"
          variant="light"
          mb="lg"
          size="md"
        />
        <Input
          placeholder="Placeholder"
          description="Description"
          label="Label"
          variant="light"
          mb="lg"
          size="lg"
        />
        <Input
          placeholder="Placeholder"
          description="Description"
          label="Label"
          variant="light"
          mb="lg"
          size="xl"
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
