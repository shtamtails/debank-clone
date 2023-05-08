import "./ActionIcon.style.scss";
import { getClassName } from "../../utils/getClassName/getClassName";
import { getStyles } from "../../utils/getStyles/getStyles";
import { useState } from "react";
import { ActionIconProps } from "./ActionIcon.model";

export const ActionIcon: React.FC<ActionIconProps> = (props) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const className = getClassName({
    defaultClassName: "action-icon",
    props,
    component: "action-icon",
    withIndents: true,
  });

  const styles = getStyles(props);

  return (
    <button
      disabled={props.disabled}
      data-testid={props.testId}
      className={className}
      style={hovered ? styles.hoveredStyles : styles.defaultStyles}
      onClick={() => {
        props.onClick && props.onClick();
      }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      {props.children}
    </button>
  );
};
