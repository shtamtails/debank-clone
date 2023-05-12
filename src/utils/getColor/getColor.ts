import { ColorScheme, Colors, Variants } from "../../UI/models";
import { DEFAULT_COLORS } from "./defaultColors";
import { hexToRgba } from "./hexToRGBA";

export interface IGetColor {
  color: Colors;
  variant: Variants;
  theme?: ColorScheme;
}

export const getColor = ({ variant, color, theme }: IGetColor) => {
  type Styles = { outline: string; bgColor: string; color: string };

  interface IGetColorBoilerplate {
    regular: Styles;
    hover: Styles;
  }

  const getColorBoilerplate = ({ regular, hover }: IGetColorBoilerplate) => {
    const defaultStyles = {
      outline: regular.outline,
      backgroundColor: regular.bgColor,
      color: regular.color,
    };
    const hoverStyles = {
      outline: hover.outline,
      backgroundColor: hover.bgColor,
      color: hover.color,
    };
    return { defaultStyles, hoverStyles };
  };

  switch (variant) {
    case "subtle":
      return getColorBoilerplate({
        regular: {
          outline: `none`,
          bgColor: "transparent",
          color: DEFAULT_COLORS[color][6],
        },
        hover: {
          outline: DEFAULT_COLORS[color][6],
          bgColor:
            theme === "light"
              ? DEFAULT_COLORS[color][0]
              : hexToRgba(DEFAULT_COLORS[color][9], 0.2),
          color: `none`,
        },
      });
    case "filled":
      return getColorBoilerplate({
        regular: {
          outline: "none",
          bgColor: DEFAULT_COLORS[color][7],
          color: DEFAULT_COLORS.gray[2],
        },
        hover: {
          color: "none",
          bgColor: DEFAULT_COLORS[color][8],
          outline: DEFAULT_COLORS[color][8],
        },
      });
    case "light":
      return getColorBoilerplate({
        regular: {
          outline: `none`,
          bgColor:
            theme === "light"
              ? DEFAULT_COLORS[color][0]
              : hexToRgba(DEFAULT_COLORS[color][8], 0.2),
          color: DEFAULT_COLORS[color][5],
        },
        hover: {
          color: `none`,
          bgColor:
            theme === "light"
              ? DEFAULT_COLORS[color][1]
              : hexToRgba(DEFAULT_COLORS[color][9], 0.2),
          outline: DEFAULT_COLORS[color][5],
        },
      });
    case "outline":
      return getColorBoilerplate({
        regular: {
          outline: `1px solid ${DEFAULT_COLORS[color][6]}`,
          bgColor: "transparent",
          color: DEFAULT_COLORS[color][6],
        },
        hover: {
          outline: `1px solid ${DEFAULT_COLORS[color][6]}`,
          color: DEFAULT_COLORS[color][6],
          bgColor:
            theme === "light"
              ? DEFAULT_COLORS[color][0]
              : hexToRgba(DEFAULT_COLORS[color][9], 0.2),
        },
      });
  }
};
