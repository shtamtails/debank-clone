import { DEFAULT_COLORS } from "./defaultColors";
import { getColor } from "./getColor";
import { hexToRgba } from "./hexToRgba";

describe("getColor", () => {
  it('should return the correct "light" colors for the "dark" color variant', () => {
    const { defaultStyles, hoverStyles } = getColor({
      variant: "light",
      color: "blue",
    });

    const defaultExpected = {
      outline: "none",
      backgroundColor: hexToRgba(DEFAULT_COLORS.blue[8], 0.2),
      color: DEFAULT_COLORS.blue[5],
    };

    const hoverExpected = {
      color: "none",
      backgroundColor: hexToRgba(DEFAULT_COLORS.blue[9], 0.2),
      outline: DEFAULT_COLORS.blue[5],
    };

    expect(defaultStyles).toEqual(defaultExpected);
    expect(hoverStyles).toEqual(hoverExpected);
  });
});
