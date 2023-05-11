import { MenuLabelProps } from "./MenuLabel.types";
import "./MenuLabel.styles.scss";

export const MenuLabel: React.FC<MenuLabelProps> = (props) => {
  return <div className="menu__label">{props.children}</div>;
};
