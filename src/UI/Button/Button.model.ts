import { ReactNode } from "react";
import { SharedUIProps, Variants } from "../models";

export interface ButtonProps extends SharedUIProps {
  children: ReactNode | JSX.Element | string;
  type?: "button" | "submit" | "reset";
  variant?: Variants;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: () => void;
}
