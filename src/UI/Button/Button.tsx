import { ReactNode, forwardRef, useState } from "react";
import "./Button.style.scss";
import { getStyles } from "../../utils/getStyles/getStyles";
import { getClassName } from "../../utils/getClassName/getClassName";
import { ColorScheme, SharedUIProps, Variants } from "../models";

export interface ButtonProps extends Omit<SharedUIProps, "variant"> {
  children: ReactNode | JSX.Element | string;
  type?: "button" | "submit" | "reset";
  variant?: Variants;
  colorScheme: ColorScheme;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = "filled",
      size = "sm",
      colorScheme = "light",
      type = "button",
      children,
      testId,
      leftIcon,
      rightIcon,
      onClick,
      disabled,
    } = props;
    const [hovered, setHovered] = useState<boolean>(false);

    const styles = getStyles({ size, variant, ...props }, colorScheme);

    const className = getClassName({
      defaultClassName: "button",
      props,
      component: "button",
      withIndents: true,
    });

    return (
      <button
        ref={ref}
        data-testid={testId}
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={className}
        style={hovered ? styles.hoveredStyles : styles.defaultStyles}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        {leftIcon && (
          <div className="button-icon margin-right-md">{leftIcon}</div>
        )}
        {children}
        {rightIcon && (
          <div className="button-icon margin-left-md">{rightIcon}</div>
        )}
      </button>
    );
  }
);
