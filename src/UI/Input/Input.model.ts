import { ReactNode } from "react";
import { SharedUIProps } from "../models";
import { AutocompleteData } from "../Autocomplete/Autocomplete.model";

export interface InputProps extends Omit<SharedUIProps, "color"> {
  data?: AutocompleteData[];
  value?: string;
  setValue?: (arg0: string) => void;
  label?: string;
  required?: boolean;
  variant?: "dark" | "light";
  placeholder?: string;
  description?: string;
  error?: string;
  icon?: ReactNode;
  type?:
    | "number"
    | "password"
    | "search"
    | "text"
    | "url"
    | "email"
    | "autocomplete";
}
