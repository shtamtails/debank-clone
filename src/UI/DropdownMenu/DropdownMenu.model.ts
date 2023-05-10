import { Sizes } from "../models";

export type DropdownMenuData = { value: string; label: string };

export interface DropdownMenuProps {
  data: DropdownMenuData[];
  variant: "light" | "dark";
  size: Sizes;
  setMenuOpened: (arg0: boolean) => void;
  setLabel: (arg0: string) => void;
  value?: string;
  setValue?: (arg0: string) => void;
}
