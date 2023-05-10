import { AutocompleteProps } from "./Autocomplete.model";
import { getInputClassNames } from "../../utils/getClassName/getClassName";
import { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import { InputWrapper } from "../InputWrapper/InputWrapper";
import "./Autocomplete.style.scss";

export const Autocomplete: React.FC<AutocompleteProps> = (props) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const [label, setLabel] = useState(
    props.data.find((item) => item.value === props.value)?.label
  );

  const menuRef = useRef(null);
  const inputRef = useRef(null);

  useClickOutside(menuRef, inputRef, () => {
    setMenuOpened(false);
  });

  const { inputClassName } = getInputClassNames(props);

  const filteredData = label
    ? props.data.filter((el) =>
        el.label.toLowerCase().includes(label?.toLowerCase())
      )
    : props.data;

  return (
    <InputWrapper {...props}>
      <input
        ref={inputRef}
        data-testid={props.testId}
        disabled={props.disabled}
        placeholder={props.placeholder}
        className={inputClassName}
        style={{ width: props.width, height: props.height }}
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        onClick={() => setMenuOpened(!menuOpened)}
      />
      {menuOpened && (
        <DropdownMenu
          data={filteredData}
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
