import { getColor } from "../getColor/getColor";

export const getStyles = (props: any) => {
  const styles = { width: props.width, height: props.height };

  const colors = getColor({
    color: props.color || "blue",
    variant: props.variant || "filled",
  });

  const defaultStyles = {
    ...styles,
    ...colors.defaultStyles,
  };

  const hoveredStyles = {
    ...styles,
    ...colors.hoverStyles,
  };

  return { defaultStyles, hoveredStyles };
};
