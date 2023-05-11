import { ReactNode, forwardRef, useState } from "react";
import "./Button.style.scss";
import { getStyles } from "../../utils/getStyles/getStyles";
import { getClassName } from "../../utils/getClassName/getClassName";
import { SharedUIProps, Variants } from "../models";

export interface ButtonProps extends Omit<SharedUIProps, "variant"> {
  children: ReactNode | JSX.Element | string;
  type?: "button" | "submit" | "reset";
  variant?: Variants;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const [hovered, setHovered] = useState<boolean>(false);

    const styles = getStyles(props);

    const className = getClassName({
      defaultClassName: "button",
      props,
      component: "button",
      withIndents: true,
    });

    return (
      <button
        ref={ref}
        data-testid={props.testId}
        onClick={props.onClick}
        type={props.type}
        disabled={props.disabled}
        className={className}
        style={hovered ? styles.hoveredStyles : styles.defaultStyles}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        {props.leftIcon && (
          <div className="button-icon margin-right-md">{props.leftIcon}</div>
        )}
        {props.children}
        {props.rightIcon && (
          <div className="button-icon margin-left-md">{props.rightIcon}</div>
        )}
      </button>
    );
  }
);
