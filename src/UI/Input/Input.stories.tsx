import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { BiLockAlt } from "react-icons/bi";
import { HiSave } from "react-icons/hi";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    colorScheme: {
      control: { type: "select" },
      options: ["dark", "light"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Inputs = () => {
  const [value, setValue] = useState("");

  return (
    <>
      {value}
      <div className="story-container--dark">
        <Input
          value={value}
          setValue={setValue}
          fullWidth
          label="Full name"
          required
          colorScheme="dark"
          description="Description"
          mb="lg"
        />
        <Input
          fullWidth
          label="Full name"
          required
          colorScheme="dark"
          value="Hello World!"
          description="Description"
          error="Error"
        />
      </div>
      <div className="story-container--light">
        <Input
          fullWidth
          placeholder="Placeholder"
          colorScheme="light"
          mb="lg"
        />
        <Input
          fullWidth
          label="Full name"
          required
          colorScheme="light"
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
      label="Input with icon"
      description="Input with icon"
      placeholder="Password"
      colorScheme="light"
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
          icon={<HiSave />}
          placeholder="Placeholder"
          description="Description"
          label="Label"
          colorScheme="light"
          mb="lg"
          size="xs"
        />
        <Input
          icon={<HiSave />}
          placeholder="Placeholder"
          description="Description"
          label="Label"
          colorScheme="light"
          mb="lg"
          size="sm"
        />
        <Input
          icon={<HiSave />}
          placeholder="Placeholder"
          description="Description"
          label="Label"
          colorScheme="light"
          mb="lg"
          size="md"
        />
        <Input
          icon={<HiSave />}
          placeholder="Placeholder"
          description="Description"
          label="Label"
          colorScheme="light"
          mb="lg"
          size="lg"
        />
        <Input
          icon={<HiSave />}
          placeholder="Placeholder"
          description="Description"
          label="Label"
          colorScheme="light"
          mb="lg"
          size="xl"
        />
      </div>
    </>
  );
};

export const TextInput: Story = {
  args: {
    colorScheme: "light",
    label: "Full name",
    required: true,
  },
};
