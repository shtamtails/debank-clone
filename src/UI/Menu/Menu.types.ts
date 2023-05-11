import { ReactNode, RefObject } from "react";

export type CordsType = {
  x: number;
  y: number;
  height: number;
  width: number;
};

export interface MenuProps {
  children: ReactNode;
  target: RefObject<HTMLButtonElement>;
  visible: boolean;
  setVisible: (arg0: boolean) => void;
  width?: number | string;
  testId?: string;
}
