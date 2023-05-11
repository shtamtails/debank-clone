import { ReactNode, RefObject } from "react";

export interface MenuProps {
  children: ReactNode;
  target: RefObject<HTMLButtonElement>;
  visible: boolean;
  setVisible: (arg0: boolean) => void;
  width: number | string;
}
