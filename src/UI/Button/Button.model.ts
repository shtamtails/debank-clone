import { ReactNode } from "react";
import { SharedUIProps, Variants } from "../models";
import { IconType } from "react-icons";

export interface ButtonProps extends SharedUIProps {
  children: ReactNode | JSX.Element | string;
  type?: "button" | "submit" | "reset";
  variant?: Variants;
  leftIcon?: IconType;
  rightIcon?: IconType;
  onClick?: () => void;
}
