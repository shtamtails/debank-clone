import { ReactNode } from "react";
import "./MenuItem.styles.scss";
import { DefaultProps } from "../../models";

export interface MenuItemProps extends DefaultProps {
  children: ReactNode;
  icon?: ReactNode;
  rightSection?: ReactNode;
  onClick?: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const {
    children,
    icon,
    rightSection,
    onClick,
    className,
    testId,
    style,
    variant,
  } = props;

  const getItemClassName = () => {
    const defaultClassName = ["menu__item"];
    variant && defaultClassName.push(`menu__item--${variant}`);
    className && defaultClassName.push(className);
    return defaultClassName.join(" ").trim();
  };

  return (
    <button
      className={getItemClassName()}
      onClick={onClick}
      data-testid={testId}
      style={style}
    >
      {icon && (
        <div
          className="menu__item__icon menu__item__icon--left"
          data-testid="menu-item-left-icon"
        >
          {icon}
        </div>
      )}
      <div className="menu__item__children">{children}</div>
      {rightSection && (
        <div
          className="menu__item__icon menu__item__icon--right"
          data-testid="menu-item-right-section"
        >
          {rightSection}
        </div>
      )}
    </button>
  );
};
