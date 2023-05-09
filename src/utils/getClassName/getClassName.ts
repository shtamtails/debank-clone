import { InputProps } from "../../UI/Input/Input.model";
import { SharedUIProps } from "../../UI/models";

export interface IGetClassName {
  defaultClassName?: string;
  props: SharedUIProps;
  component?: string;
  withIndents?: boolean;
}

export const getClassName = ({
  defaultClassName,
  props,
  component,
  withIndents,
}: IGetClassName) => {
  const className: string[] = [defaultClassName || ""];
  // Size
  component && props.size && className.push(`${component}--${props.size}`);

  // Disabled
  props.disabled && className.push("disabled");

  // FullWidth
  props.fullWidth && className.push("fullWidth");

  // Margins / Paddings / Border Radius
  if (withIndents) {
    props.pl && className.push(`padding-left-${props.pl}`);
    props.pr && className.push(`padding-right-${props.pr}`);
    props.pt && className.push(`padding-top-${props.pt}`);
    props.pb && className.push(`padding-bottom-${props.pb}`);
    props.ml && className.push(`margin-left-${props.ml}`);
    props.mr && className.push(`margin-right-${props.mr}`);
    props.mt && className.push(`margin-top-${props.mt}`);
    props.mb && className.push(`margin-bottom-${props.mb}`);
    props.radius && className.push(`border-radius-${props.radius}`);
  }

  return className.join(" ").trim();
};

export const getInputClassNames = (props: InputProps) => {
  const defaultClassName = [""];
  props.variant &&
    defaultClassName.push(
      `input--${props.variant === "light" ? "light" : "dark"}`
    );
  props.error && defaultClassName.push("input--error");
  props.icon && defaultClassName.push("input--with-icon");

  const inputClassName = getClassName({
    defaultClassName: defaultClassName.join(" ").trim(),
    props,
    component: "input",
  });

  const rawLabelClassName = ["input__label"];
  props.size && rawLabelClassName.push(`input__label--${props.size}`);
  props.variant &&
    rawLabelClassName.push(
      `input__label--${props.variant === "light" ? "light" : "dark"}`
    );

  const rawDescriptionClassName = ["input__description"];
  props.size &&
    rawDescriptionClassName.push(`input__description--${props.size}`);
  props.variant &&
    rawDescriptionClassName.push(
      `input__description--${props.variant === "light" ? "light" : "dark"}`
    );

  const rawContainerClassName = [`input ${props.className}`];
  props.pl && rawContainerClassName.push(`padding-left-${props.pl}`);
  props.pr && rawContainerClassName.push(`padding-right-${props.pr}`);
  props.pt && rawContainerClassName.push(`padding-top-${props.pt}`);
  props.pb && rawContainerClassName.push(`padding-bottom-${props.pb}`);
  props.ml && rawContainerClassName.push(`margin-left-${props.ml}`);
  props.mr && rawContainerClassName.push(`margin-right-${props.mr}`);
  props.mt && rawContainerClassName.push(`margin-top-${props.mt}`);
  props.mb && rawContainerClassName.push(`margin-bottom-${props.mb}`);
  props.radius && rawContainerClassName.push(`border-radius-${props.radius}`);

  const containerClassName = rawContainerClassName.join(" ").trim();
  const labelClassName = rawLabelClassName.join(" ").trim();
  const descriptionClassName = rawDescriptionClassName.join(" ").trim();

  return {
    inputClassName,
    containerClassName,
    labelClassName,
    descriptionClassName,
  };
};
