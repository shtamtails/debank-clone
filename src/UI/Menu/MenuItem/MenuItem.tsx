import { MenuItemProps } from "./MenuItem.types";
import "./MenuItem.styles.scss";

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <button
      className={`menu__item menu__item--${props.variant}`}
      onClick={props.onClick}
      data-testid={props.testId}
    >
      {props.icon && (
        <div
          className="menu__item__icon menu__item__icon--left"
          data-testid="menu-item-left-icon"
        >
          {props.icon}
        </div>
      )}
      <div className="menu__item__children">{props.children}</div>
      {props.rightContent && (
        <div
          className="menu__item__icon menu__item__icon--right"
          data-testid="menu-item-right-section"
        >
          {props.rightContent}
        </div>
      )}
    </button>
  );
};
