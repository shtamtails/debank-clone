import { ReactNode } from "react";
import { InputProps } from "../Input/Input.model";

export interface InputWrapperProps extends InputProps {
  children: ReactNode;
}
