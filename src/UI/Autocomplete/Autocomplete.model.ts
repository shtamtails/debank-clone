import { InputProps } from "../Input/Input.model";

export type AutocompleteData = { value: string; label: string };

export interface AutocompleteProps extends Omit<InputProps, "type"> {
  data: AutocompleteData[];
}
