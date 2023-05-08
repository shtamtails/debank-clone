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
      <div className="button-icon">
        {props.leftIcon && (
          <props.leftIcon
            className="margin-right-md"
            data-testid="button-left-icon"
          />
        )}
      </div>
      {props.children}
      <div className="button-icon">
        {props.rightIcon && (
          <props.rightIcon
            className="margin-left-md"
            data-testid="button-right-icon"
          />
        )}
      </div>
    </button>
  );
};
