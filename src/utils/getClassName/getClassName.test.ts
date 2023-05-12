import { SharedUIProps } from "../../UI/models";
import { getClassName } from "./getClassName";

describe("getClassName", () => {
  const defaultClassName = "test";
  const component = "component";

  const props: SharedUIProps = {
    fullWidth: true,
    disabled: true,
    size: "md",
    pl: "sm",
    pr: "md",
    pt: "lg",
    pb: "xl",
    ml: "xs",
    mr: "sm",
    mt: "md",
    mb: "lg",
    radius: "xl",
  };

  it("should return defaultClassName when no props are passed", () => {
    expect(getClassName({ defaultClassName, props: {} })).toBe(
      defaultClassName
    );
  });

  it("should return className with props", () => {
    const expectedClassName = `${defaultClassName} component--md disabled fullWidth padding-left-sm padding-right-md padding-top-lg padding-bottom-xl margin-left-xs margin-right-sm margin-top-md margin-bottom-lg border-radius-xl`;
    expect(
      getClassName({ defaultClassName, component, props, withIndents: true })
    ).toBe(expectedClassName);
  });

  it("should return className with only size prop", () => {
    const expectedClassName = `${defaultClassName} component--md`;
    expect(
      getClassName({ defaultClassName, component, props: { size: "md" } })
    ).toBe(expectedClassName);
  });

  it("should return className with only disabled prop", () => {
    const expectedClassName = `${defaultClassName} disabled`;
    expect(getClassName({ defaultClassName, props: { disabled: true } })).toBe(
      expectedClassName
    );
  });

  it("should return className with only fullWidth prop", () => {
    const expectedClassName = `${defaultClassName} fullWidth`;

    expect(getClassName({ defaultClassName, props: { fullWidth: true } })).toBe(
      expectedClassName
    );
  });

  it("should return className with only pl prop", () => {
    const expectedClassName = `${defaultClassName} padding-left-sm`;

    expect(
      getClassName({ defaultClassName, props: { pl: "sm" }, withIndents: true })
    ).toBe(expectedClassName);
  });

  it("should return className with only pr prop", () => {
    const expectedClassName = `${defaultClassName} padding-right-md`;

    expect(
      getClassName({ defaultClassName, props: { pr: "md" }, withIndents: true })
    ).toBe(expectedClassName);
  });

  it("should return className with only pt prop", () => {
    const expectedClassName = `${defaultClassName} padding-top-lg`;

    expect(
      getClassName({ defaultClassName, props: { pt: "lg" }, withIndents: true })
    ).toBe(expectedClassName);
  });

  it("should return className with only pb prop", () => {
    const expectedClassName = `${defaultClassName} padding-bottom-xl`;

    expect(
      getClassName({ defaultClassName, props: { pb: "xl" }, withIndents: true })
    ).toBe(expectedClassName);
  });

  it("should return className with only ml prop", () => {
    const expectedClassName = `${defaultClassName} margin-left-xs`;

    expect(
      getClassName({ defaultClassName, props: { ml: "xs" }, withIndents: true })
    ).toBe(expectedClassName);
  });

  it("should return className with only mr prop", () => {
    const expectedClassName = `${defaultClassName} margin-right-sm`;

    expect(
      getClassName({ defaultClassName, props: { mr: "sm" }, withIndents: true })
    ).toBe(expectedClassName);
  });

  it("should return className with only mt prop", () => {
    const expectedClassName = `${defaultClassName} margin-top-md`;

    expect(
      getClassName({ defaultClassName, props: { mt: "md" }, withIndents: true })
    ).toBe(expectedClassName);
  });

  it("should return className with only mb prop", () => {
    const expectedClassName = `${defaultClassName} margin-bottom-lg`;
    expect(
      getClassName({ defaultClassName, props: { mb: "lg" }, withIndents: true })
    ).toBe(expectedClassName);
  });

  it("should return className with only radius prop", () => {
    const expectedClassName = `${defaultClassName} border-radius-xl`;
    expect(
      getClassName({
        defaultClassName,
        props: { radius: "xl" },
        withIndents: true,
      })
    ).toBe(expectedClassName);
  });
});
