import { getClassName } from "../../utils/getClassName/getClassName";
import { InputProps } from "./Input.model";
import "./Input.style.scss";

export const Input: React.FC<InputProps> = (props) => {
  // Get classNames without indents, because indents should
  // be used in the input-container to work properly
  const inputClassName = [""];
  props.variant &&
    inputClassName.push(
      `input--${props.variant === "light" ? "light" : "dark"}`
    );
  props.error && inputClassName.push("input--error");

  const className = getClassName({
    defaultClassName: inputClassName.join(" ").trim(),
    props,
    component: "input",
  });

  // Add ident classNames to container element
  const containerClassName = [`input ${props.className}`];
  props.pl && containerClassName.push(`padding-left-${props.pl}`);
  props.pr && containerClassName.push(`padding-right-${props.pr}`);
  props.pt && containerClassName.push(`padding-top-${props.pt}`);
  props.pb && containerClassName.push(`padding-bottom-${props.pb}`);
  props.ml && containerClassName.push(`margin-left-${props.ml}`);
  props.mr && containerClassName.push(`margin-right-${props.mr}`);
  props.mt && containerClassName.push(`margin-top-${props.mt}`);
  props.mb && containerClassName.push(`margin-bottom-${props.mb}`);
  props.radius && containerClassName.push(`border-radius-${props.radius}`);

  // classNames for the label element
  const labelClassName = ["input__label"];
  props.size && labelClassName.push(`input__label--${props.size}`);
  props.variant &&
    labelClassName.push(
      `input__label--${props.variant === "light" ? "light" : "dark"}`
    );

  // classNames for the description element
  const descriptionClassName = ["input__description"];
  props.size && descriptionClassName.push(`input__description--${props.size}`);
  props.variant &&
    descriptionClassName.push(
      `input__description--${props.variant === "light" ? "light" : "dark"}`
    );

  return (
    <div
      data-testid="input-container"
      className={containerClassName.join(" ").trim()}
      style={{ width: props.width }}
    >
      {props.label && (
        <label className={labelClassName.join(" ").trim()}>
          Full name
          {props.required && <div className="input__label--required">*</div>}
        </label>
      )}
      {props.description && (
        <div className={descriptionClassName.join(" ").trim()}>
          {props.description}
        </div>
      )}
      <input
        data-testid={props.testId}
        disabled={props.disabled}
        placeholder={props.placeholder}
        className={className}
        style={{ width: props.width, height: props.height }}
        value={props.value}
        onChange={(e) => {
          props.setValue && props.setValue(e.target.value);
        }}
      />
      {props.error && <div className="input__error">{props.error}</div>}
    </div>
  );
};
