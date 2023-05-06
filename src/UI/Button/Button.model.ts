import { ReactNode } from "react";
import { SharedUIProps } from "../models";
import { IconType } from "react-icons";

export interface ButtonProps extends SharedUIProps {
  children: ReactNode | JSX.Element | string;
  type?: "button" | "submit" | "reset";
  leftIcon?: IconType;
  rightIcon?: IconType;
  onClick?: () => void;
}
