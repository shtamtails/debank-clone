import { FC, useState } from "react";
import { ButtonProps } from "./Button.model";
import "./Button.style.scss";
import { getStyles } from "../../utils/getStyles/getStyles";
import { getClassName } from "../../utils/getClassName/getClassName";

export const Button: FC<ButtonProps> = (props) => {
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
};
