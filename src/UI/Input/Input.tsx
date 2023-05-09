import { useState, useRef, ChangeEvent } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { getInputClassNames } from "../../utils/getClassName/getClassName";
import { InputProps } from "./Input.model";
import "./Input.style.scss";

export const Input: React.FC<InputProps> = (props) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const [value, setValue] = useState(
    props.data
      ? props.data.find((item) => item.value === props.value)?.label
      : props.value
  );
  const filteredData = value
    ? props.data?.filter((el) =>
        el.label.toLowerCase().includes(value?.toLowerCase())
      )
    : props.data;

  // Close menu when clicked outside of it
  const menuRef = useRef(null);
  const inputRef = useRef(null);
  useClickOutside(menuRef, inputRef, () => {
    setMenuOpened(false);
  });

  const {
    inputClassName,
    descriptionClassName,
    labelClassName,
    containerClassName,
  } = getInputClassNames(props);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.type === "autocomplete") {
      setValue(e.target.value);
    } else {
      props.setValue && props.setValue(e.target.value);
    }
  };

  const handleClick = () => {
    setMenuOpened(!menuOpened);
  };

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
          type={props.type}
          data-testid={props.testId}
          disabled={props.disabled}
          placeholder={props.placeholder}
          className={inputClassName}
          style={{ width: props.width, height: props.height }}
          value={props.type === "autocomplete" ? value : props.value}
          onChange={handleChange}
          onClick={handleClick}
        />
      </div>
      {props.error && <div className="input__error">{props.error}</div>}
      {props.type === "autocomplete" && menuOpened && (
        <div
          data-testid="autocomplete-dropdown-menu"
          className={`dropdown-menu dropdown-menu--${props.variant}`}
          ref={menuRef}
        >
          {filteredData?.map((element, index) => (
            <div
              key={index}
              data-testid="autocomplete-dropdown-menu-element"
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
