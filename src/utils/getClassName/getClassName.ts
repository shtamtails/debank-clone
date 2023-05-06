import { SharedUIProps } from "../../UI/models";

export interface IGetClassName {
  defaultClassName?: string;
  props: SharedUIProps;
  component?: string;
}

export const getClassName = ({
  defaultClassName,
  props,
  component,
}: IGetClassName) => {
  const className: string[] = [defaultClassName || ""];
  // Border Radius
  props.borderRadius && className.push(`border-radius-${props.borderRadius}`);
  // Size
  component && props.size && className.push(`${component}--${props.size}`);
  // Disabled
  props.disabled && className.push("disabled");
  // FullWidth
  props.fullWidth && className.push("fullWidth");
  // Margins / Paddings / Border Radius
  props.pl && className.push(`padding-left-${props.pl}`);
  props.pr && className.push(`padding-right-${props.pr}`);
  props.pt && className.push(`padding-top-${props.pt}`);
  props.pb && className.push(`padding-bottom-${props.pb}`);
  props.ml && className.push(`margin-left-${props.ml}`);
  props.mr && className.push(`margin-right-${props.mr}`);
  props.mt && className.push(`margin-top-${props.mt}`);
  props.mb && className.push(`margin-bottom-${props.mb}`);
  props.radius && className.push(`border-radius-${props.radius}`);

  return className.join(" ").trim();
};
