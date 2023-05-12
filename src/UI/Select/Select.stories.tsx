import { Meta } from "@storybook/react";
import { useState } from "react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    colorScheme: {
      control: { type: "select" },
      options: ["dark", "light"],
    },
  },
};

export default meta;

// type Story = StoryObj<typeof Select>;

const data = [
  {
    label: "React",
    value: "react",
  },
  {
    label: "Vue",
    value: "vue",
  },
  {
    label: "Angular",
    value: "angular",
  },
];

export const defaultSelect = () => {
  const [value, setValue] = useState(data[0].value);
  return (
    <>
      {value}
      <Select
        data={data}
        value={value}
        setValue={setValue}
        colorScheme="light"
        placeholder="Select the best framework"
        label="Select Input"
        description="Chose variant"
      />
    </>
  );
};
