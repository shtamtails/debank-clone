import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { BiLockAlt } from "react-icons/bi";
import { HiSave, HiSearch } from "react-icons/hi";
import { useState } from "react";
import { SelectData } from "./Input.model";

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
          variant="dark"
          description="Description"
          mb="lg"
        />
        <Input
          fullWidth
          label="Full name"
          required
          variant="dark"
          value="Hello World!"
          description="Description"
          error="Error"
        />
      </div>
      <div className="story-container--light">
        <Input fullWidth placeholder="Placeholder" variant="light" mb="lg" />
        <Input
          fullWidth
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
      label="Input with icon"
      description="Input with icon"
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
          icon={<HiSave />}
          placeholder="Placeholder"
          description="Description"
          label="Label"
          variant="light"
          mb="lg"
          size="xs"
        />
        <Input
          icon={<HiSave />}
          placeholder="Placeholder"
          description="Description"
          label="Label"
          variant="light"
          mb="lg"
          size="sm"
        />
        <Input
          icon={<HiSave />}
          placeholder="Placeholder"
          description="Description"
          label="Label"
          variant="light"
          mb="lg"
          size="md"
        />
        <Input
          icon={<HiSave />}
          placeholder="Placeholder"
          description="Description"
          label="Label"
          variant="light"
          mb="lg"
          size="lg"
        />
        <Input
          icon={<HiSave />}
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

export const Autocomplete = () => {
  const data: SelectData[] = [
    {
      value: "test",
      label: "Test",
    },
  ];

  const [value, setValue] = useState<string>("");

  return (
    <Input
      type="autocomplete"
      data={data}
      variant="light"
      label="Autocomplete"
      description="Input with autocomplete"
      value={value}
      setValue={setValue}
    />
  );
};

export const Select = () => {
  const data: SelectData[] = [
    {
      value: "test",
      label: "Test",
    },
  ];

  const [value, setValue] = useState<string>("");

  return (
    <Input
      icon={<HiSearch />}
      type="select"
      data={data}
      variant="light"
      label="Select"
      description="Select input"
      value={value}
      setValue={setValue}
    />
  );
};
