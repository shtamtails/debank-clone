import { AutocompleteProps } from "./Autocomplete.model";
import { getInputClassNames } from "../../utils/getClassName/getClassName";
import "../Input/Input.style.scss";
import "./Autocomplete.style.scss";
import { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

// ! DEPRECATED! USE <INPUT TYPE="AUTOCOMPLETE" /> INSTEAD!

export const Autocomplete: React.FC<AutocompleteProps> = (props) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const [value, setValue] = useState(
    props.data.find((item) => item.value === props.value)?.label
  );

  const filteredData = value
    ? props.data.filter((el) =>
        el.label.toLowerCase().includes(value?.toLowerCase())
      )
    : props.data;

  // Close menu when clicked outside of it
  const menuRef = useRef(null);
  const inputRef = useRef(null);
  useClickOutside(menuRef, inputRef, () => {
    setMenuOpened(false);
  });

  // Get classnames for element to style them (sizes, theme, color, paddings, etc.)
  const {
    inputClassName,
    descriptionClassName,
    labelClassName,
    containerClassName,
  } = getInputClassNames(props);

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
        <input
          ref={inputRef}
          data-testid={props.testId}
          disabled={props.disabled}
          placeholder={props.placeholder}
          className={inputClassName}
          style={{ width: props.width, height: props.height }}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onClick={() => {
            setMenuOpened(!menuOpened);
          }}
        />
      </div>

      {props.error && <div className="input__error">{props.error}</div>}
      {menuOpened && (
        <div
          className={`dropdown-menu dropdown-menu--${props.variant}`}
          ref={menuRef}
        >
          {filteredData.map((element) => (
            <div
              className={`dropdown-menu__element 
              dropdown-menu__element--${props.size} 
              dropdown-menu__element--${props.variant}
               ${
                 props.value === element.value
                   ? `dropdown-menu__element--selected--${props.variant}`
                   : ""
               } 
              
              `}
              onClick={() => {
                setMenuOpened(false);
                setValue(element.label);
                props.setValue && props.setValue(element.value);
              }}
            >
              {element.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
