import { ReactNode } from "react";
import { SharedUIProps } from "../models";

export type SelectData = { value: string; label: string };

export interface InputProps extends Omit<SharedUIProps, "color"> {
  data?: SelectData[];
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
    | "autocomplete"
    | "select";
}
