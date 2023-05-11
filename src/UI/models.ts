import { CSSProperties } from "react";

export type Sizes = "xs" | "sm" | "md" | "lg" | "xl";

export type Colors =
  | "dark"
  | "gray"
  | "red"
  | "pink"
  | "grape"
  | "violet"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "green"
  | "lime"
  | "yellow"
  | "orange";

export type Variants = "filled" | "light" | "outline" | "subtle";

export type ColorScheme = "light" | "dark";

export interface DefaultProps {
  className?: string;
  testId?: string;
  style?: CSSProperties;
  variant?: ColorScheme;
}

export interface Indents {
  pl?: Sizes;
  pr?: Sizes;
  pt?: Sizes;
  pb?: Sizes;
  ml?: Sizes;
  mr?: Sizes;
  mt?: Sizes;
  mb?: Sizes;
}

export interface SharedUIProps extends DefaultProps, Indents {
  fullWidth?: boolean;
  disabled?: boolean;
  size?: Sizes;
  radius?: Sizes;
  color?: Colors;
  width?: string | number;
  height?: string | number;
}
