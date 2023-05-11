import { ReactNode } from "react";

export interface ModalProps {
  isOpened: boolean;
  setIsOpened: (arg0: boolean) => void;
  variant?: "light" | "dark";
  title: string;
  children: ReactNode;
  width?: string | number;
  testId?: string;
}
