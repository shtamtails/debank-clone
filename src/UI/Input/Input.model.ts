import { ReactNode } from "react";
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
  icon?: ReactNode;
  type?: "number" | "password" | "search" | "text" | "url";
}
