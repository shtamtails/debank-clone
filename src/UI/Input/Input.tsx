import { getInputClassNames } from "../../utils/getClassName/getInputClassName";
import { InputProps, InputWrapper } from "../InputWrapper/InputWrapper";
import "./Input.style.scss";

export const Input: React.FC<InputProps> = (props) => {
  const { inputClassName } = getInputClassNames(props);

  return (
    <InputWrapper {...props}>
      <input
        type={props.type}
        data-testid={props.testId}
        disabled={props.disabled}
        placeholder={props.placeholder}
        className={inputClassName}
        style={{ width: props.width, height: props.height }}
        value={props.value}
        onChange={(e) => props.setValue && props.setValue(e.target.value)}
      />
    </InputWrapper>
  );
};
