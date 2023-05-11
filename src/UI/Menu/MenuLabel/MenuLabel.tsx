import { ReactNode } from "react";
import "./MenuLabel.styles.scss";
import { DefaultProps } from "../../models";

export interface MenuLabelProps extends DefaultProps {
  children: ReactNode;
}

export const MenuLabel: React.FC<MenuLabelProps> = (props) => {
  const { className, style, children, testId } = props;

  const getLabelClassName = () => {
    const defaultClassName = ["menu__label"];
    className && defaultClassName.push(className);
    return defaultClassName.join(" ").trim();
  };

  return (
    <div data-testid={testId} className={getLabelClassName()} style={style}>
      {children}
    </div>
  );
};
