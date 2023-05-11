import { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import { InputProps, InputWrapper } from "../InputWrapper/InputWrapper";
import "./Autocomplete.style.scss";
import { getInputClassNames } from "../../utils/getClassName/getInputClassName";

export type AutocompleteData = { value: string; label: string };

export interface AutocompleteProps extends Omit<InputProps, "type"> {
  data: AutocompleteData[];
}

export const Autocomplete: React.FC<AutocompleteProps> = (props) => {
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

  useClickOutside(menuRef, inputRef, () => {
    setMenuOpened(false);
  });

  const { inputClassName } = getInputClassNames(props);

  const filteredData = label
    ? data.filter((el) => el.label.toLowerCase().includes(label?.toLowerCase()))
    : data;

  return (
    <InputWrapper {...props}>
      <input
        ref={inputRef}
        data-testid={testId}
        disabled={disabled}
        placeholder={placeholder}
        className={inputClassName}
        style={{ width: width, height: height, ...style }}
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        onClick={() => setMenuOpened(!menuOpened)}
      />
      {menuOpened && (
        <DropdownMenu
          testId={testId && `${testId}-dropdown`}
          data={filteredData}
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
