import { getColor } from "../getColor/getColor";
import { getStyles } from "./getStyles";

describe("getStyles", () => {
  it("returns default styles when not hovered", () => {
    const props = {
      width: "100px",
      height: "50px",
      color: "blue",
      variant: "filled",
    };
    const expectedStyles = {
      width: "100px",
      height: "50px",
      backgroundColor: "#0077FF",
      color: "#FFFFFF",
    };
    const colors = getColor({
      color: "blue",
      variant: "filled",
    });

    const actualStyles = getStyles(props).defaultStyles;

    expect(actualStyles).toEqual({
      ...expectedStyles,
      ...colors.defaultStyles,
    });
  });

  it("returns hover styles when hovered", () => {
    const props = {
      width: "100px",
      height: "50px",
      color: "blue",
      variant: "filled",
    };
    const expectedStyles = {
      width: "100px",
      height: "50px",
      backgroundColor: "#0077FF",
      color: "#FFFFFF",
    };
    const colors = getColor({
      color: "blue",
      variant: "filled",
    });

    const actualStyles = getStyles({ ...props, hovered: true }).hoveredStyles;

    expect(actualStyles).toEqual({
      ...expectedStyles,
      ...colors.hoverStyles,
    });
  });
});
