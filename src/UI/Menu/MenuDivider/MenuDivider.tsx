import { DefaultProps } from "../../models";
import "./MenuDivider.styles.scss";

interface MenuDividerProps extends DefaultProps {}

export const MenuDivider: React.FC<MenuDividerProps> = (props) => {
  const { variant, className, testId, style } = props;

  const getDividerClassName = () => {
    const defaultClassName = ["menu__divider"];
    className && defaultClassName.push(className);
    variant && defaultClassName.push(`menu__divider--${variant}`);
    return defaultClassName.join(" ").trim();
  };

  return (
    <div data-testid={testId} style={style} className={getDividerClassName()} />
  );
};
