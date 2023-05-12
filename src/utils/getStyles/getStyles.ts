import { ColorScheme } from "../../UI/models";
import { getColor } from "../getColor/getColor";

export const getStyles = (props: any, theme: ColorScheme) => {
  const { width, height, color, variant } = props;
  const styles = { width, height };

  const colors = getColor({
    color: color || "blue",
    variant: variant || "filled",
    theme,
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
