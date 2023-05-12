import { getClassName } from "../../utils/getClassName/getClassName";
import { getStyles } from "../../utils/getStyles/getStyles";
import { ReactNode, useState } from "react";
import { SharedUIProps, Variants } from "../models";
import "./ActionIcon.style.scss";

export interface ActionIconProps extends SharedUIProps {
  variant?: Variants;
  children: ReactNode;
  onClick?: () => void;
}

export const ActionIcon: React.FC<ActionIconProps> = (props) => {
  const {
    colorScheme = "light",
    variant = "filled",
    size = "sm",
    children,
    onClick,
    testId,
    disabled,
  } = props;

  const [hovered, setHovered] = useState<boolean>(false);

  const className = getClassName({
    defaultClassName: "action-icon",
    props,
    component: "action-icon",
    withIndents: true,
  });

  const styles = getStyles({ variant, size, ...props }, colorScheme);

  return (
    <button
      disabled={disabled}
      data-testid={testId}
      className={className}
      style={hovered ? styles.hoveredStyles : styles.defaultStyles}
      onClick={() => {
        onClick && onClick();
      }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      {children}
    </button>
  );
};
