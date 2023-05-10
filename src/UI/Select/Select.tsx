import { RiArrowDropDownLine } from "react-icons/ri";
import { useState, useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { getInputClassNames } from "../../utils/getClassName/getClassName";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import { SelectProps } from "./Select.modules";
import { InputWrapper } from "../InputWrapper/InputWrapper";
import "./Select.styles.scss";

export const Select: React.FC<SelectProps> = (props) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const [label, setLabel] = useState(
    props.data.find((item) => item.value === props.value)?.label
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
        data-testid={props.testId}
        disabled={props.disabled}
        placeholder={props.placeholder}
        className={inputClassName}
        style={{ width: props.width, height: props.height, cursor: "pointer" }}
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        onClick={() => setMenuOpened(!menuOpened)}
      />
      {menuOpened && (
        <DropdownMenu
          data={props.data}
          variant={props.variant}
          size={props.size || "sm"}
          setMenuOpened={setMenuOpened}
          value={props.value}
          setValue={props.setValue}
          setLabel={setLabel}
          ref={menuRef}
        />
      )}
    </InputWrapper>
  );
};
