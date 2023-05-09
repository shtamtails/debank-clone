import { ReactNode, RefObject } from "react";
import { SharedUIProps, Sizes } from "../models";

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

export interface DropdownMenuProps {
  value: string;
  data: SelectData[];
  variant: "dark" | "light";
  menuRef: RefObject<HTMLInputElement>;
  size: Sizes;
  setMenuOpened: (arg0: boolean) => void;
  setValue?: (arg0: string) => void;
  setInputValue: (arg0: string) => void;
}
