import { Meta, StoryObj } from "@storybook/react";
import { Autocomplete } from "./Autocomplete";
import { HiSearch } from "react-icons/hi";
import { useState } from "react";
import { AutocompleteData } from "./Autocomplete.model";

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

export const RegularAutocomplete = () => {
  const data: AutocompleteData[] = [
    {
      value: "react",
      label: "React",
    },
    {
      value: "angular",
      label: "Angular",
    },
    {
      value: "vue",
      label: "Vue",
    },
  ];

  const [value, setValue] = useState<string>("");

  return (
    <>
      <Autocomplete
        icon={<HiSearch />}
        data={data}
        variant="light"
        label="Light"
        value={value}
        setValue={setValue}
      />
    </>
  );
};
