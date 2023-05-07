import { SharedUIProps } from "../models";

export interface InputProps extends Omit<SharedUIProps, "color"> {
  value?: string;
  setValue?: (arg0: string) => void;
  label?: string;
  required?: boolean;
  variant?: "dark" | "light";
  placeholder?: string;
  description?: string;
  error?: string;
}
