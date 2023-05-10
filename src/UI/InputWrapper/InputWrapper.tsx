import { getInputClassNames } from "../../utils/getClassName/getClassName";
import "./InputWrapper.style.scss";
import { InputWrapperProps } from "./InputWrapper.model";

export const InputWrapper: React.FC<InputWrapperProps> = (props) => {
  const { descriptionClassName, labelClassName, containerClassName } =
    getInputClassNames(props);

  return (
    <div
      data-testid="input-container"
      className={containerClassName}
      style={{ width: props.width }}
    >
      {props.label && (
        <label className={labelClassName}>
          {props.label}
          {props.required && <div className="input__label--required">*</div>}
        </label>
      )}
      {props.description && (
        <div className={descriptionClassName}>{props.description}</div>
      )}
      <div className="input-wrapper">
        {props.icon && <div className="input__icon">{props.icon}</div>}
        {props.children}
      </div>
      {props.error && <div className="input__error">{props.error}</div>}
    </div>
  );
};
