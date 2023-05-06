import { getColor, DEFAULT_COLORS } from "./getColor";

describe("getColor", () => {
  it('should return the correct colors for the "dark" color variant', () => {
    const { defaultStyles, hoverStyles } = getColor({
      variant: "filled",
      color: "dark",
    });

    const defaultExpected = {
      outline: "none",
      backgroundColor: DEFAULT_COLORS.dark[7],
      color: DEFAULT_COLORS.gray[2],
    };

    const hoverExpected = {
      color: "none",
      backgroundColor: DEFAULT_COLORS.dark[8],
      outline: DEFAULT_COLORS.dark[8],
    };

    expect(defaultStyles).toEqual(defaultExpected);
    expect(hoverStyles).toEqual(hoverExpected);
  });
});
