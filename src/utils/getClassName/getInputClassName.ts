import { InputProps } from "../../UI/InputWrapper/InputWrapper";
import { getClassName } from "./getClassName";

export const getInputClassNames = (props: InputProps) => {
  const { colorScheme = "light", error, icon, className, type } = props;

  const defaultClassName = [];
  if (colorScheme) {
    defaultClassName.push(`input--${colorScheme}`);
  }
  if (error) {
    defaultClassName.push("input--error");
  }
  if (icon) {
    defaultClassName.push("input--with-icon");
  }
  if (type === "select") {
    defaultClassName.push("input--select");
  }

  const inputClassName = getClassName({
    defaultClassName: defaultClassName.join(" ").trim(),
    props,
    component: "input",
  });

  const labelClassName = getClassName({
    defaultClassName: "input__label",
    props,
    component: "input__label",
    withIndents: false,
  });

  const descriptionClassName = getClassName({
    defaultClassName: "input__description",
    props,
    component: "input__description",
    withIndents: false,
  });

  const containerClassName = getClassName({
    defaultClassName: `input ${className || ""}`,
    props,
    component: "",
    withIndents: true,
  });

  return {
    inputClassName,
    containerClassName,
    labelClassName,
    descriptionClassName,
  };
};
