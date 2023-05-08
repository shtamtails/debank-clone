import { ReactNode } from "react";
import { SharedUIProps, Variants } from "../models";

export interface ActionIconProps extends SharedUIProps {
  variant?: Variants;
  children: ReactNode;
  onClick?: () => void;
}
