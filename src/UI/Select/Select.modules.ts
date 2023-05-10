import { DropdownMenuData } from "../DropdownMenu/DropdownMenu.model";
import { InputProps } from "../Input/Input.model";

export interface SelectProps extends Omit<InputProps, "type"> {
  data: DropdownMenuData[];
}
