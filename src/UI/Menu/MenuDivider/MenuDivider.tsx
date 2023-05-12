import { DefaultProps } from "../../models";
import "./MenuDivider.styles.scss";

interface MenuDividerProps extends DefaultProps {}

export const MenuDivider: React.FC<MenuDividerProps> = (props) => {
  const { colorScheme, className, testId, style } = props;

  const getDividerClassName = () => {
    const defaultClassName = ["menu__divider"];
    className && defaultClassName.push(className);
    colorScheme && defaultClassName.push(`menu__divider--${colorScheme}`);
    return defaultClassName.join(" ").trim();
  };

  return (
    <div data-testid={testId} style={style} className={getDividerClassName()} />
  );
};
