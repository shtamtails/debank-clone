import { RiArrowDropDownLine } from "react-icons/ri";
import { useState, useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { DropdownMenu, DropdownMenuData } from "../DropdownMenu/DropdownMenu";
import { InputProps, InputWrapper } from "../InputWrapper/InputWrapper";
import "./Select.styles.scss";
import { getInputClassNames } from "../../utils/getClassName/getInputClassName";

export interface SelectProps extends Omit<InputProps, "type"> {
  data: DropdownMenuData[];
}

export const Select: React.FC<SelectProps> = (props) => {
  const {
    testId,
    disabled,
    placeholder,
    width,
    height,
    data,
    style,
    variant,
    size,
    value,
    setValue,
  } = props;

  const [menuOpened, setMenuOpened] = useState(false);

  const [label, setLabel] = useState(
    data.find((item) => item.value === value)?.label
  );

  const menuRef = useRef(null);
  const inputRef = useRef(null);
  useClickOutside(menuRef, inputRef, () => setMenuOpened(false));

  const { inputClassName } = getInputClassNames(props);

  return (
    <InputWrapper {...props}>
      <div className="input__dropdown-icon">
        <RiArrowDropDownLine />
      </div>
      <input
        readOnly
        ref={inputRef}
        data-testid={testId}
        disabled={disabled}
        placeholder={placeholder}
        className={inputClassName}
        style={{
          width: width,
          height: height,
          cursor: "pointer",
          ...style,
        }}
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        onClick={() => setMenuOpened(!menuOpened)}
      />
      {menuOpened && (
        <DropdownMenu
          testId={testId && `${testId}-dropdown`}
          data={data}
          variant={variant}
          size={size || "sm"}
          setMenuOpened={setMenuOpened}
          value={value}
          setValue={setValue}
          setLabel={setLabel}
          ref={menuRef}
        />
      )}
    </InputWrapper>
  );
};
