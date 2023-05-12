import { ActionIconProps } from "../../UI/ActionIcon/ActionIcon";
import { ButtonProps } from "../../UI/Button/Button";
import { SharedUIProps } from "../../UI/models";

export interface IGetClassName {
  defaultClassName?: string;
  props: SharedUIProps | ActionIconProps | ButtonProps;
  component?: string;
  withIndents?: boolean;
}

export const getClassName = ({
  defaultClassName = "",
  props: {
    size = "sm",
    colorScheme = "light",
    disabled,
    fullWidth,
    pl,
    pr,
    pt,
    pb,
    ml,
    mr,
    mt,
    mb,
    radius,
  } = {},
  component = "",
  withIndents = false,
}: IGetClassName) => {
  const className = [defaultClassName];

  // Size
  if (component && size) {
    className.push(`${component}--${size}`);
  }

  // Disabled
  if (disabled) {
    className.push("disabled");
  }

  // FullWidth
  if (fullWidth) {
    className.push("fullWidth");
  }

  // ColorScheme
  if (component && colorScheme) {
    className.push(`${component}--${colorScheme}`);
  }

  // Margins / Paddings / Border Radius
  if (withIndents) {
    if (pl) className.push(`padding-left-${pl}`);
    if (pr) className.push(`padding-right-${pr}`);
    if (pt) className.push(`padding-top-${pt}`);
    if (pb) className.push(`padding-bottom-${pb}`);
    if (ml) className.push(`margin-left-${ml}`);
    if (mr) className.push(`margin-right-${mr}`);
    if (mt) className.push(`margin-top-${mt}`);
    if (mb) className.push(`margin-bottom-${mb}`);
    if (radius) className.push(`border-radius-${radius}`);
  }

  return className.join(" ").trim();
};
