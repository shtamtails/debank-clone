import { MenuItemProps } from "./MenuItem.types";
import "./MenuItem.styles.scss";

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <button className="menu__item" onClick={props.onClick}>
      {props.icon && (
        <div className="menu__item__icon menu__item__icon--left">
          {props.icon}
        </div>
      )}
      <div className="menu__item__children">{props.children}</div>
      {props.rightContent && (
        <div className="menu__item__icon menu__item__icon--right">
          {props.rightContent}
        </div>
      )}
    </button>
  );
};
