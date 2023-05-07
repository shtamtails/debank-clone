import { getClassName } from "../../utils/getClassName/getClassName";
import { InputProps } from "./Input.model";
import "./Input.style.scss";

export const Input: React.FC<InputProps> = (props) => {
  const className = getClassName({
    defaultClassName: `input--${props.variant === "light" ? "light" : "dark"}`,
    props,
    component: "input",
  });

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

  return (
    <div
      data-testid="input-container"
      className={containerClassName.join(" ").trim()}
      style={{ width: props.width }}
    >
      {props.label && (
        <label
          className={`input__label input__label--${props.size} input__label--${
            props.variant === "light" ? "light" : "dark"
          }`}
        >
          Full name
          {props.required && <div className="input__label--required">*</div>}
        </label>
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
    </div>
  );
};
