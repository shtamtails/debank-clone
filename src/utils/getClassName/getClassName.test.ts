import { SharedUIProps } from "../../UI/models";
import { getClassName } from "./getClassName";

describe("getClassName", () => {
  const defaultProps: SharedUIProps = {
    borderRadius: "sm",
    size: "sm",
  };

  it("should return the default class name when no props are passed", () => {
    expect(getClassName({ defaultClassName: "my-class", props: {} })).toBe(
      "my-class"
    );
  });

  it("should add the default class name to the generated class name", () => {
    expect(
      getClassName({ defaultClassName: "my-class", props: defaultProps })
    ).toContain("my-class");
  });

  it("should add the border radius class name to the generated class name", () => {
    expect(
      getClassName({
        defaultClassName: "",
        props: { ...defaultProps, borderRadius: "lg" },
      })
    ).toContain("border-radius-lg");
  });

  it("should add the component size class name to the generated class name", () => {
    expect(
      getClassName({
        defaultClassName: "",
        props: { ...defaultProps, size: "md" },
        component: "my-component",
      })
    ).toContain("my-component--md");
  });

  it("should add the disabled class name to the generated class name", () => {
    expect(
      getClassName({
        defaultClassName: "",
        props: { ...defaultProps, disabled: true },
      })
    ).toContain("disabled");
  });

  it("should add the fullWidth class name to the generated class name", () => {
    expect(
      getClassName({
        defaultClassName: "",
        props: { ...defaultProps, fullWidth: true },
      })
    ).toContain("fullWidth");
  });

  it("should add the padding class names to the generated class name", () => {
    expect(
      getClassName({
        defaultClassName: "",
        props: { ...defaultProps, pl: "lg", pr: "md", pt: "sm", pb: "xs" },
      })
    ).toContain(
      "padding-left-lg padding-right-md padding-top-sm padding-bottom-xs"
    );
  });

  it("should add the margin class names to the generated class name", () => {
    expect(
      getClassName({
        defaultClassName: "",
        props: { ...defaultProps, ml: "lg", mr: "md", mt: "sm", mb: "xs" },
      })
    ).toContain(
      "margin-left-lg margin-right-md margin-top-sm margin-bottom-xs"
    );
  });

  it("should add the border radius class name to the generated class name", () => {
    expect(
      getClassName({
        defaultClassName: "",
        props: { ...defaultProps, radius: "md" },
      })
    ).toContain("border-radius-md");
  });
});
