import { Meta, StoryObj } from "@storybook/react";
import { Autocomplete } from "./Autocomplete";
import { useState } from "react";

const meta: Meta<typeof Autocomplete> = {
  title: "UI/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["dark", "light"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Autocomplete>;

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

export const AutocompleteDefault = () => {
  const [value, setValue] = useState("");

  return (
    <>
      {value}
      <Autocomplete
        data={data}
        value={value}
        setValue={setValue}
        placeholder="Select the best framework!"
        label="Autocomplete Input"
        description="Type value"
        variant="light"
      />
    </>
  );
};
