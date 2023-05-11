import { ReactNode } from "react";

export interface MenuItemProps {
  children: ReactNode;
  icon?: ReactNode;
  rightContent?: ReactNode;
  onClick?: () => void;
}
