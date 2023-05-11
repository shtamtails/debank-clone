import { ReactNode } from "react";
import "./InputWrapper.style.scss";
import { SharedUIProps } from "../models";
import { getInputClassNames } from "../../utils/getClassName/getInputClassName";

export interface InputProps extends Omit<SharedUIProps, "color"> {
  value?: string;
  setValue?: (arg0: string) => void;
  label?: string;
  required?: boolean;
  variant: "dark" | "light";
  placeholder?: string;
  description?: string;
  error?: string;
  icon?: ReactNode;
  type?:
    | "number"
    | "password"
    | "search"
    | "text"
    | "url"
    | "email"
    | "autocomplete"
    | "select";
}

export interface InputWrapperProps extends InputProps {
  children: ReactNode;
}

export const InputWrapper: React.FC<InputWrapperProps> = (props) => {
  const {
    label,
    required,
    description,
    icon,
    children,
    error,
    width,
    testId,
    style,
  } = props;

  const { descriptionClassName, labelClassName, containerClassName } =
    getInputClassNames(props);

  return (
    <div
      data-testid={testId && `${testId}-wrapper`}
      className={containerClassName}
      style={{ width, ...style }}
    >
      {label && (
        <label className={labelClassName}>
          {label}
          {required && <div className="input__label--required">*</div>}
        </label>
      )}
      {description && <div className={descriptionClassName}>{description}</div>}
      <div className="input-wrapper">
        {icon && <div className="input__icon">{icon}</div>}
        {children}
      </div>
      {error && <div className="input__error">{error}</div>}
    </div>
  );
};
