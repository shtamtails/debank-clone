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

export interface SharedUIProps {
  borderRadius?: Sizes;
  fullWidth?: boolean;
  disabled?: boolean;
  size?: Sizes;
  variant?: Variants;
  color?: Colors;
  testId?: string;
  width?: string | number;
  height?: string | number;
  pl?: Sizes;
  pr?: Sizes;
  pt?: Sizes;
  pb?: Sizes;
  ml?: Sizes;
  mr?: Sizes;
  mt?: Sizes;
  mb?: Sizes;
  radius?: Sizes;
}
